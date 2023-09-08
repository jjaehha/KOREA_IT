import geojson from "../../../public/coords2.json";
import styled from "@emotion/styled";
import { Spin } from "antd";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { CustomOverlayMap, Map, Polygon } from "react-kakao-maps-sdk";

const MapTestPage15 = () => {
  const [hos, setHos] = useState([]);
  const [lib, setLib] = useState([]);
  const [park, setPark] = useState([]);
  const [swim, setSwim] = useState([]);
  const [gym, setGym] = useState([]);
  const [col, setCol] = useState([]);
  const [mar, setMar] = useState([]);
  const [reh, setReh] = useState([]);
  const [old, setOld] = useState([]);
  const [kids, setKids] = useState([]);

  const [hosInfo, setHosInfo] = useState([]);
  const [libInfo, setLibInfo] = useState([]);
  const [parkInfo, setParkInfo] = useState([]);
  const [swimInfo, setSwimInfo] = useState([]);
  const [gymInfo, setGymInfo] = useState([]);
  const [colInfo, setColInfo] = useState([]);
  const [marInfo, setMarInfo] = useState([]);
  const [rehInfo, setRehInfo] = useState([]);
  const [oldInfo, setOldInfo] = useState([]);
  const [kidsInfo, setKidsInfo] = useState([]);

  let info = [];

  const [map, setMap] = useState(null);
  const [dongInfo, setDongInfo] = useState([]);
  const [selectedDong, setSelectedDong] = useState([]);

  const [mousePosition, setMousePosition] = useState({
    lat: 0,
    lng: 0,
  });

  const [display, setDisplay] = useState("");

  let hosClickCnt = useRef(0);
  let libClickCnt = useRef(0);
  let parkClickCnt = useRef(0);
  let swimClickCnt = useRef(0);
  let gymClickCnt = useRef(0);
  let colClickCnt = useRef(0);
  let marClickCnt = useRef(0);
  let rehClickCnt = useRef(0);
  let oldClickCnt = useRef(0);
  let kidsClickCnt = useRef(0);

  let waitBox = useRef(null);

  // 병원, 도서관 데이터 요청
  useEffect(() => {
    axios
      .all([
        axios.get(
          `http://openapi.seoul.go.kr:8088/576e61714e636a6b3637545a455046/json/TvEmgcHospitalInfo/1/500/`
        ),
        axios.get(
          `http://openapi.seoul.go.kr:8088/4f49455041636a6b37376d485a5255/json/SeoulPublicLibraryInfo/1/500/`
        ),
        axios.get(
          `http://openAPI.seoul.go.kr:8088/6258655663626f623130365855576c6d/json/SearchParkInfoService/1/130/`
        ),
        axios.get(
          `http://openapi.seoul.go.kr:8088/4b56466d77626f6234384444716670/json/LOCALDATA_103501/1/500/`
        ),
        axios.get(
          `http://openapi.seoul.go.kr:8088/6f6e754d72626f6238336d58554962/json/InnerGmnsmInfo/1/500/`
        ),
        axios.get(
          `http://openapi.seoul.go.kr:8088/4643455575626f623933496f444f53/json/SebcCollegeInfoKor/1/500/`
        ),
        axios.get(
          `http://openAPI.seoul.go.kr:8088/4f46506f71626f6231366262796977/json/ListTraditionalMarket/1/500/`
        ),
        axios.get(
          `http://openapi.seoul.go.kr:8088/494b465849626f6236316e786c4f57/json/fcltOpenInfo_OMSI/1/500/`
        ),
        axios.get(
          `http://openapi.seoul.go.kr:8088/5945797941626f623930564f595467/json/fcltOpenInfo_OWI/1/500/`
        ),
        axios.get(
          `http://openapi.seoul.go.kr:8088/6851706553626f623130307049427043/json/tnFcltySttusInfo1011/1/500/`
        ),
      ])
      .then(
        axios.spread((hos, lib, park, swim, gym, col, mar, reh, old, kids) => {
          setHos(hos.data.TvEmgcHospitalInfo.row);
          setLib(lib.data.SeoulPublicLibraryInfo.row);
          setPark(park.data.SearchParkInfoService.row);
          setSwim(swim.data.LOCALDATA_103501.row);
          setGym(gym.data.InnerGmnsmInfo.row);
          setCol(col.data.SebcCollegeInfoKor.row);
          setMar(mar.data.ListTraditionalMarket.row);
          setReh(reh.data.fcltOpenInfo_OMSI.row);
          setOld(old.data.fcltOpenInfo_OWI.row);
          setKids(kids.data.tnFcltySttusInfo1011.row);
        })
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // json 파일 데이터들의
  // 폴리곤좌표(positions), 동이름(dongName), isMouseover를 객체 형태로 dongInfo 배열에 저장
  // (동 지도 그리기 위해)
  useEffect(() => {
    if (!map) return;

    const data = geojson.features; // 각 동의 폴리곤 좌표 및 이름 정보가 담긴 배열
    let dongContents = []; // 각 동 정보 객체 넣어줄 배열

    data.forEach((dong) => {
      let coordinates = dong.geometry.coordinates[0]; // 폴리곤 좌표들 담긴 배열

      let content = {}; // dongContents에 넣어줄 각 동 정보 객체
      content.positions = []; // 폴리곤 좌표 value
      content.dongName = dong.properties.EMD_NM; // 동 이름 value
      content.isMouseover = false; // 마우스 오버 이벤트 위한 value

      coordinates.forEach((coord) => {
        // 각 동의 각 폴리곤 좌표를 content.positions에 객체로 형태로 넣어줌
        content.positions.push({
          lat: coord[1],
          lng: coord[0],
        });
      });

      dongContents.push(content);
    });

    setDongInfo(dongContents);
  }, [map]);

  // 로딩 창 띄우기
  useEffect(() => {
    if (!map) return;

    if (display === "block") {
      waitBox.current.style.display = "block";
    } else {
      waitBox.current.style.display = "none";
    }
  }, [display]);

  const axiosFunc = async (elem, addrKey) => {
    if (elem[addrKey]) {
      let res = await axios.get(
        `https://dapi.kakao.com/v2/local/search/address.json?query=${elem[addrKey]}`,
        {
          headers: {
            Authorization: "KakaoAK c810d1096c3f50297a4f3e8323afece5",
          },
        }
      );

      const location = res.data.documents[0];

      if (location) {
        if (location.address) {
          info.push({
            gu: location.address.region_2depth_name,
            dong: location.address.region_3depth_name,
            lat: location.y,
            lng: location.x,
          });
        } else {
          info.push({
            gu: location.road_address.region_2depth_name,
            dong: location.road_address.region_3depth_name,
            lat: location.y,
            lng: location.x,
          });
        }
      }
    }
  };

  const arrFunc = (data, addrKey, setFunc) => {
    info = [];
    let dataLen = data.length;
    let iLen = Math.floor(dataLen / 100);

    for (let i = 0; i < iLen; i++) {
      for (let j = i * 100; j < (i + 1) * 100; j++) {
        setTimeout(() => axiosFunc(data[j], addrKey, info), (i + 1) * 1000);
      }
    }
    for (let i = iLen * 100; i < dataLen; i++) {
      setTimeout(() => axiosFunc(data[i], addrKey, info), (iLen + 1) * 1000);
    }
    setFunc(info);

    setTimeout(() => setDisplay("none"), 3000);
  };

  const clickFunc = (cnt, name, data, addrKey, setFunc, clickCnt) => {
    if (!cnt) {
      setDisplay("block");
      console.log(`${name} 클릭`);
      arrFunc(data, addrKey, setFunc);
      clickCnt.current++;
    }
  };

  const hosBtnClick = (cnt) => {
    clickFunc(cnt, "병원", hos, "DUTYADDR", setHosInfo, hosClickCnt);
  };

  const libBtnClick = (cnt) => {
    clickFunc(cnt, "도서관", lib, "ADRES", setLibInfo, libClickCnt);
  };

  const parkBtnClick = async (cnt) => {
    clickFunc(cnt, "공원", park, "P_ADDR", setParkInfo, parkClickCnt);
  };

  const swimBtnClick = (cnt) => {
    clickFunc(cnt, "수영장", swim, "SITEWHLADDR", setSwimInfo, swimClickCnt);
  };

  const gymBtnClick = (cnt) => {
    clickFunc(cnt, "체육관", gym, "ADDR_OLD", setGymInfo, gymClickCnt);
  };

  const schBtnClick = (cnt) => {
    clickFunc(cnt, "대학교", col, "ADD_KOR", setColInfo, colClickCnt);
  };

  const marketBtnClick = (cnt) => {
    clickFunc(cnt, "전통시장", mar, "ITEM_ADDR", setMarInfo, marClickCnt);
  };

  const rehBtnClick = (cnt) => {
    clickFunc(cnt, "복지센터", reh, "FCLT_ADDR", setRehInfo, rehClickCnt);
  };

  const oldBtnClick = (cnt) => {
    clickFunc(
      cnt,
      "노인여가시설센터",
      old,
      "FCLT_ADDR",
      setOldInfo,
      oldClickCnt
    );
  };

  const kidsBtnClick = (cnt) => {
    clickFunc(cnt, "키즈카페", kids, "BASS_ADRES", setKidsInfo, kidsClickCnt);
  };

  const checkFunc = (name, data, dataInfo) => {
    console.log(`전체 ${name} 데이터 :`, data.length);
    console.log(`정리된 ${name} 데이터 :`, dataInfo.length);
    console.log("------------------------------");
  };

  // 배열 값 확인
  const click1 = () => {
    // console.log(dongInfo);

    checkFunc("병원", hos, hosInfo);
    checkFunc("도서관", lib, libInfo);
    checkFunc("공원", park, parkInfo);
    checkFunc("수영장", swim, swimInfo);
    checkFunc("실내체육관", gym, gymInfo);
    checkFunc("대학교", col, colInfo);
    checkFunc("전통시장", mar, marInfo);
    checkFunc("장애인복지센터", reh, rehInfo);
    checkFunc("노인여가복지시설", old, oldInfo);
    checkFunc("키즈카페", kids, kidsInfo);

    // console.log(info);
  };

  const mapShowFunc = (data, dong) => {
    data.forEach((dataElem) => {
      dongInfo.forEach((dongElem) => {
        if (dataElem.dong.includes(dongElem.dongName)) {
          dong.push(dongElem);
        }
      });
    });
  };

  const click2 = () => {
    let dong = [];

    mapShowFunc(hosInfo, dong);
    mapShowFunc(libInfo, dong);
    mapShowFunc(parkInfo, dong);
    mapShowFunc(swimInfo, dong);
    mapShowFunc(gymInfo, dong);
    mapShowFunc(colInfo, dong);
    mapShowFunc(marInfo, dong);
    mapShowFunc(rehInfo, dong);
    mapShowFunc(oldInfo, dong);
    mapShowFunc(kidsInfo, dong);

    setSelectedDong(dong);
  };

  return (
    <Container>
      <MenuBtn>
        <GiHamburgerMenu />
      </MenuBtn>
      <SideBar>
        <CloseBtn>
          <IoMdCloseCircle />
        </CloseBtn>
        <Category>
          <CateTitle>문화시설</CateTitle>
          <Infra onClick={() => libBtnClick(libClickCnt.current)}>도서관</Infra>
          <Infra onClick={() => swimBtnClick(swimClickCnt.current)}>
            수영장
          </Infra>
          <Infra onClick={() => parkBtnClick(parkClickCnt.current)}>공원</Infra>
          <Infra onClick={() => gymBtnClick(gymClickCnt.current)}>
            실내체육관
          </Infra>
          <Infra onClick={() => marketBtnClick(marClickCnt.current)}>
            전통시장
          </Infra>
          <Infra onClick={() => kidsBtnClick(kidsClickCnt.current)}>
            키즈카페
          </Infra>
          <Infra onClick={() => schBtnClick(colClickCnt.current)}>대학교</Infra>
        </Category>
        <Category>
          <CateTitle>의료시설</CateTitle>
          <Infra onClick={() => hosBtnClick(hosClickCnt.current)}>응급실</Infra>
          <Infra onClick={() => rehBtnClick(rehClickCnt.current)}>
            복지센터
          </Infra>
          <Infra onClick={() => oldBtnClick(oldClickCnt.current)}>
            노인여가복지시설
          </Infra>
        </Category>
        <Category>
          <Infra onClick={() => setTimeout(() => click1(), 1500)}>클릭1</Infra>
          <Infra onClick={() => setTimeout(() => click2(), 1500)}>클릭2</Infra>
        </Category>
      </SideBar>

      <Map
        id={`map`}
        center={{
          lat: 37.566826,
          lng: 126.9786567,
        }}
        style={{
          width: "100%",
          height: "100vh",
        }}
        level={9}
        onCreate={setMap}
        onMouseMove={(_map, mouseEvent) =>
          setMousePosition({
            lat: mouseEvent.latLng.getLat(),
            lng: mouseEvent.latLng.getLng(),
          })
        }
      >
        {dongInfo.map((info, idx) => (
          <Polygon
            key={idx}
            path={info.positions} // 그려질 다각형의 좌표 배열
            strokeWeight={2} // 선의 두께
            strokeColor={"#004c80"} // 선의 색깔
            strokeOpacity={0.8} // 선의 불투명도, 1에서 0 사이의 값이며 0에 가까울수록 투명
            strokeStyle={"solid"} // 선의 스타일
            fillColor={info.isMouseover ? "#09f" : "#fff"} // 채우기 색깔
            fillOpacity={0.7} // 채우기 불투명도
            onMouseover={() => (info.isMouseover = true)}
            onMouseout={() => (info.isMouseover = false)}
          />
        ))}

        {dongInfo.findIndex((v) => v.isMouseover) !== -1 && (
          <CustomOverlayMap position={mousePosition}>
            <DivArea>{dongInfo.find((v) => v.isMouseover).dongName}</DivArea>
          </CustomOverlayMap>
        )}

        {selectedDong.map((path, idx) => (
          <Polygon
            key={idx}
            path={path.positions}
            strokeWeight={2}
            strokeColor={"red"}
            strokeOpacity={0.8}
            strokeStyle={"solid"}
            fillColor={path.isMouseover ? "pink" : "#ffe6ea"}
            fillOpacity={0.7}
            onMouseover={() => (path.isMouseover = true)}
            onMouseout={() => (path.isMouseover = false)}
          />
        ))}
      </Map>

      <WaitBox ref={waitBox}>
        <Spin tip="Loading">
          <div />
        </Spin>
      </WaitBox>
    </Container>
  );
};

export default MapTestPage15;

/* ---------- */
const GiHamburgerMenu = styled.div``;

const IoMdCloseCircle = styled.div``;

const Container = styled.div`
  display: flex;
`;
const MenuBtn = styled.div`
  position: absolute;
  z-index: 100;
  margin: 10px 10px;
`;
const CloseBtn = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
`;
const SideBar = styled.div`
  position: relative;
  width: 270px;
  height: 897px;
  background-color: #f0f8ff;
`;

const Category = styled.div`
  padding: 10px;
`;
const CateTitle = styled.h2`
  margin-bottom: 5px;
`;

const Infra = styled.button`
  border-radius: 15px;
  border: 1px solid black;
  width: 62px;
  height: 30px;
  background-color: white;
  margin-right: 15px;

  &:hover {
    background-color: #756bff;
    color: white;
  }
`;

const WaitBox = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1;
  display: none;

  & > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 80px;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
  }
`;

/* ---------- */
const DivArea = styled.div`
  position: absolute;
  background: #fff;
  border: 1px solid #888;
  border-radius: 3px;
  font-size: 12px;
  top: -5px;
  left: 15px;
  padding: 2px;
`;
