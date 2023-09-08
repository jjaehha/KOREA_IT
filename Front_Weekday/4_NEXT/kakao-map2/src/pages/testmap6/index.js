import geojson from "../../../public/coords.json";
import geojson2 from "../../../public/seoul.json";
import styled from "@emotion/styled";
import axios from "axios";
import { cookies } from "next/dist/client/components/headers";
import { useEffect, useRef, useState } from "react";
import {
  CustomOverlayMap,
  Map,
  MapMarker,
  Polygon,
} from "react-kakao-maps-sdk";

const MapTestPage13 = () => {
  const [hos, setHos] = useState([]); // 병원 데이터 전체 배열
  const [lib, setLib] = useState([]); // 도서관 데이터 전체 배열
  const [swim, setSwim] = useState([]); // 수영장 데이터 전체 배열
  const [park, setPark] = useState([]); // 공원 데이터 전체 배열
  const [gym, setGym] = useState([]); // 체육관 데이터 전체 배열
  const [reh, setReh] = useState([]); // 재활센터 데이터 전체 배열
  const [old, setOld] = useState([]); // 노인여가복지시설 데이터 전체 배열
  const [market, setMarket] = useState([]); // 시장 데이터 전체 배열
  const [kids, setKids] = useState([]); // 키즈카페 데이터 전체 배열
  const [sch, setSch] = useState([]); // 대학교 데이터 전체 배열

  const [hosInfo, setHosInfo] = useState([]); // 전체 병원 데이터 중 이름, 좌표, 구이름, 동이름 넣어줄 배열
  const [libInfo, setLibInfo] = useState([]); // 전체 도서관 데이터 중 이름, 좌표, 구이름, 동이름 넣어줄 배열
  const [swimInfo, setSwimInfo] = useState([]); // 전체 수영장 데이터 중 이름, 좌표, 구이름, 동이름 넣어줄 배열
  const [parkInfo, setParkInfo] = useState([]); // 전체 공원 데이터 중 이름, 좌표, 구이름, 동이름 넣어줄 배열
  const [gymInfo, setGymInfo] = useState([]); // 전체 체육관 데이터 중 이름, 좌표, 구이름, 동이름 넣어줄 배열
  const [rehInfo, setRehInfo] = useState([]); // 전체 복지센터 데이터 중 이름, 좌표, 구이름, 동이름 넣어줄 배열
  const [oldInfo, setOldInfo] = useState([]); // 전체 노인여가복지시설 데이터 중 이름, 좌표, 구이름, 동이름 넣어줄 배열
  const [marketInfo, setMarketInfo] = useState([]); // 전체 시장 데이터 중 이름, 좌표, 구이름, 동이름 넣어줄 배열
  const [kidsInfo, setKidsInfo] = useState([]); // 전체 키즈카페 데이터 중 이름, 좌표, 구이름, 동이름 넣어줄 배열
  const [schInfo, setSchInfo] = useState([]); // 전체 대학교 데이터 중 이름, 좌표, 구이름, 동이름 넣어줄 배열
  // let hosInfo = [];
  // let libInfo = [];
  let info = [];

  const [seoulData, setSeouleData] = useState([]);
  const [map, setMap] = useState(null);
  const [dongInfo, setDongInfo] = useState([]);
  const [selectedDong, setSelectedDong] = useState([]);

  const [mousePosition, setMousePosition] = useState({
    lat: 0,
    lng: 0,
  });

  let hosClickCnt = useRef(0);
  let libClickCnt = useRef(0);
  let swimClickCnt = useRef(0);
  let parkClickCnt = useRef(0);
  let gymClickCnt = useRef(0);
  let rehClickCnt = useRef(0);
  let oldClickCnt = useRef(0);
  let marketClickCnt = useRef(0);
  let kidsClickCnt = useRef(0);
  let schClickCnt = useRef(0);

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
          `http://openapi.seoul.go.kr:8088/617452596868757433317a6a736e45/json/LOCALDATA_103501/1/500/`
        ),
        axios.get(
          `http://openAPI.seoul.go.kr:8088/6a6e674c5868757439366f7a7a7569/json/SearchParkInfoService/1/500/`
        ),
        axios.get(
          `http://openapi.seoul.go.kr:8088/724c6a766e68757438395350634741/json/InnerGmnsmInfo/1/500/`
        ),
        axios.get(
          `http://openapi.seoul.go.kr:8088/6b4e565a6f68757434354655725848/json/fcltOpenInfo_OMSI/1/500/`
        ),
        axios.get(
          `http://openapi.seoul.go.kr:8088/53786a67426875743739434b634f72/json/fcltOpenInfo_OWI/1/500/`
        ),
        axios.get(
          `http://openAPI.seoul.go.kr:8088/726d77696d68757437344864765279/json/ListTraditionalMarket/1/500/`
        ),
        axios.get(
          `http://openapi.seoul.go.kr:8088/4f6f58626f68757439387768446543/json/tnFcltySttusInfo1011/1/500/`
        ),
        axios.get(
          `http://openapi.seoul.go.kr:8088/63677a4d7668757434324b427a4d59/json/SebcCollegeInfoKor/1/500/`
        ),
      ])
      .then(
        axios.spread(
          (hos, lib, swim, park, gym, reh, old, market, kids, sch) => {
            // console.log(hos.data.TvEmgcHospitalInfo.row);
            // console.log(swim);
            // console.log(park);
            setHos(hos.data.TvEmgcHospitalInfo.row);
            setLib(lib.data.SeoulPublicLibraryInfo.row);
            setSwim(swim.data.LOCALDATA_103501.row);
            setPark(park.data.SearchParkInfoService.row);
            setGym(gym.data.InnerGmnsmInfo.row);
            setReh(reh.data.fcltOpenInfo_OMSI.row);
            setOld(old.data.fcltOpenInfo_OWI.row);
            setMarket(market.data.ListTraditionalMarket.row);
            setKids(kids.data.tnFcltySttusInfo1011.row);
            setSch(sch.data.SebcCollegeInfoKor.row);
          }
        )
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

    const data = geojson.features[0].geometry.coordinates[0];

    let contents = [];

    data.forEach((pos) => {
      contents.push({
        lat: pos[1],
        lng: pos[0],
      });
    });

    console.log(contents);
    console.log(contents.length);

    setSeoulData(contents);
  }, [map]);

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

    if (data.length < 100) {
      for (let i = 0; i < data.length; i++) {
        setTimeout(() => axiosFunc(data[i], addrKey), 1000);
      }
      setFunc(info);
    } else if (data.length < 200) {
      for (let i = 0; i < 100; i++) {
        setTimeout(() => axiosFunc(data[i], addrKey), 1000);
      }
      for (let i = 100; i < data.length; i++) {
        setTimeout(() => axiosFunc(data[i], addrKey), 2000);
      }
      setFunc(info);
    } else if (data.length < 300) {
      for (let i = 0; i < 100; i++) {
        setTimeout(() => axiosFunc(data[i], addrKey, info), 1000);
      }
      for (let i = 100; i < 200; i++) {
        setTimeout(() => axiosFunc(data[i], addrKey, info), 2000);
      }
      for (let i = 200; i < data.length; i++) {
        setTimeout(() => axiosFunc(data[i], addrKey, info), 3000);
      }
      setFunc(info);
    } else if (data.length < 400) {
      for (let i = 0; i < 100; i++) {
        setTimeout(() => axiosFunc(data[i], addrKey, info), 1000);
      }
      for (let i = 100; i < 200; i++) {
        setTimeout(() => axiosFunc(data[i], addrKey, info), 2000);
      }
      for (let i = 200; i < 300; i++) {
        setTimeout(() => axiosFunc(data[i], addrKey, info), 2000);
      }
      for (let i = 300; i < data.length; i++) {
        setTimeout(() => axiosFunc(data[i], addrKey, info), 4000);
      }
      setFunc(info);
    }
  };

  const hosBtnClick = (cnt) => {
    if (!cnt) {
      console.log("병원 클릭");
      arrFunc(hos, "DUTYADDR", setHosInfo);
      hosClickCnt.current++;
    }
  };

  const libBtnClick = (cnt) => {
    if (!cnt) {
      console.log("도서관 클릭");
      arrFunc(lib, "ADRES", setLibInfo);
      libClickCnt.current++;
    }
  };

  const swimBtnClick = (cnt) => {
    if (!cnt) {
      console.log("수영장 클릭");
      arrFunc(swim, "SITEWHLADDR", setSwimInfo);
      swimClickCnt.current++;
    }
  };

  const parkBtnClick = async (cnt) => {
    if (!cnt) {
      console.log("공원 클릭");
      arrFunc(park, "P_ADDR", setParkInfo);
      parkClickCnt.current++;
    }
  };

  const gymBtnClick = (cnt) => {
    if (!cnt) {
      console.log("체육관 클릭");
      arrFunc(gym, "ADDR_OLD", setGymInfo);
      gymClickCnt.current++;
    }
  };

  const rehBtnClick = (cnt) => {
    if (!cnt) {
      console.log("복지센터 클릭");
      arrFunc(reh, "FCLT_ADDR", setRehInfo);
      rehClickCnt.current++;
    }
  };
  const oldBtnClick = (cnt) => {
    if (!cnt) {
      console.log("노인여가시설센터 클릭");
      arrFunc(old, "FCLT_ADDR", setOldInfo);
      oldClickCnt.current++;
    }
  };
  const marketBtnClick = (cnt) => {
    if (!cnt) {
      console.log("전통시장 클릭");
      arrFunc(market, "ITEM_ADDR", setMarketInfo);
      marketClickCnt.current++;
    }
  };
  const kidsBtnClick = (cnt) => {
    if (!cnt) {
      console.log("키즈카페 클릭");
      arrFunc(kids, "BASS_ADRES", setKidsInfo);
      kidsClickCnt.current++;
    }
  };
  const schBtnClick = (cnt) => {
    if (!cnt) {
      console.log("대학교 클릭");
      arrFunc(sch, "ADD_KOR", setSchInfo);
      schClickCnt.current++;
    }
  };

  // 배열 값 확인
  const click1 = () => {
    // console.log(dongInfo);
    console.log("전체 병원 데이터 :", hos.length);
    console.log("정리된 병원 데이터 :", hosInfo.length);

    console.log("전체 도서관 데이터 :", lib.length);
    console.log("정리된 도서관 데이터 :", libInfo.length);

    console.log("전체 수영장 데이터 :", swim.length);
    console.log("정리된 수영장 데이터 :", swimInfo.length);

    console.log("전체 공원 데이터 :", park.length);
    console.log("정리된 공원 데이터 :", parkInfo.length);

    console.log("전체 실내체육관 데이터 :", gym.length);
    console.log("정리된 실내체육관 데이터 :", gymInfo.length);

    console.log("전체 장애인복지센터 데이터 :", reh.length);
    console.log("정리된 장애인복지센터 데이터 :", rehInfo.length);

    console.log("전체 노인여가복지시설 데이터 :", old);
    console.log("정리된 노인여가복지시설 데이터 :", oldInfo);

    console.log("전체 전통시장 데이터 :", market);
    console.log("정리된 전통시장 데이터 :", marketInfo);

    console.log("전체 키즈카페 데이터 :", kids);
    console.log("정리된 키즈카페 데이터 :", kidsInfo);

    console.log("전체 대학교 데이터 :", sch);
    console.log("정리된 대학교 데이터 :", schInfo);

    // console.log(info);
  };

  const click2 = () => {
    let dong = [];

    hosInfo.forEach((dataElem) => {
      dongInfo.forEach((dongElem) => {
        if (dataElem.dong.includes(dongElem.dongName)) {
          dong.push(dongElem);
        }
      });
    });

    libInfo.forEach((dataElem) => {
      dongInfo.forEach((dongElem) => {
        if (dataElem.dong.includes(dongElem.dongName)) {
          dong.push(dongElem);
        }
      });
    });

    swimInfo.forEach((dataElem) => {
      dongInfo.forEach((dongElem) => {
        if (dataElem.dong.includes(dongElem.dongName)) {
          dong.push(dongElem);
        }
      });
    });

    parkInfo.forEach((dataElem) => {
      dongInfo.forEach((dongElem) => {
        if (dataElem.dong.includes(dongElem.dongName)) {
          dong.push(dongElem);
        }
      });
    });
    gymInfo.forEach((dataElem) => {
      dongInfo.forEach((dongElem) => {
        if (dataElem.dong.includes(dongElem.dongName)) {
          dong.push(dongElem);
        }
      });
    });
    rehInfo.forEach((dataElem) => {
      dongInfo.forEach((dongElem) => {
        if (dataElem.dong.includes(dongElem.dongName)) {
          dong.push(dongElem);
        }
      });
    });
    oldInfo.forEach((dataElem) => {
      dongInfo.forEach((dongElem) => {
        if (dataElem.dong.includes(dongElem.dongName)) {
          dong.push(dongElem);
        }
      });
    });
    marketInfo.forEach((dataElem) => {
      dongInfo.forEach((dongElem) => {
        if (dataElem.dong.includes(dongElem.dongName)) {
          dong.push(dongElem);
        }
      });
    });
    kidsInfo.forEach((dataElem) => {
      dongInfo.forEach((dongElem) => {
        if (dataElem.dong.includes(dongElem.dongName)) {
          dong.push(dongElem);
        }
      });
    });
    schInfo.forEach((dataElem) => {
      dongInfo.forEach((dongElem) => {
        if (dataElem.dong.includes(dongElem.dongName)) {
          dong.push(dongElem);
        }
      });
    });

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
          <Infra
            onClick={() =>
              setTimeout(() => libBtnClick(libClickCnt.current), 1500)
            }
          >
            도서관
          </Infra>
          <Infra
            onClick={() =>
              setTimeout(() => swimBtnClick(swimClickCnt.current), 1500)
            }
          >
            수영장
          </Infra>
          <Infra
            onClick={() =>
              setTimeout(() => parkBtnClick(parkClickCnt.current), 1500)
            }
          >
            공원
          </Infra>
          <Infra
            onClick={() =>
              setTimeout(() => gymBtnClick(gymClickCnt.current), 1500)
            }
          >
            실내체육관
          </Infra>
          <Infra
            onClick={() =>
              setTimeout(() => marketBtnClick(marketClickCnt.current), 1500)
            }
          >
            전통시장
          </Infra>
          <Infra
            onClick={() =>
              setTimeout(() => kidsBtnClick(kidsClickCnt.current), 1500)
            }
          >
            키즈카페
          </Infra>
          <Infra
            onClick={() =>
              setTimeout(() => schBtnClick(schClickCnt.current), 1500)
            }
          >
            대학교
          </Infra>
          {/* <Infra onClick={() => libBtnClick(libClickCnt.current)}>도서관</Infra>
          <Infra onClick={() => swimBtnClick(swimClickCnt.current)}>
            수영장
          </Infra>
          <Infra onClick={() => parkBtnClick(parkClickCnt.current)}>공원</Infra>
          <Infra onClick={() => gymBtnClick(gymClickCnt.current)}>
            실내체육관
          </Infra> */}
        </Category>
        <Category>
          <CateTitle>의료시설</CateTitle>
          <Infra
            onClick={() =>
              setTimeout(() => hosBtnClick(hosClickCnt.current), 1500)
            }
          >
            응급실
          </Infra>
          <Infra
            onClick={() =>
              setTimeout(() => rehBtnClick(rehClickCnt.current), 1500)
            }
          >
            복지센터
          </Infra>
          <Infra
            onClick={() =>
              setTimeout(() => oldBtnClick(oldClickCnt.current), 1500)
            }
          >
            노인여가복지시설
          </Infra>
          {/* <Infra onClick={() => hosBtnClick(hosClickCnt.current)}>응급실</Infra>
          <Infra onClick={() => rehBtnClick(rehClickCnt.current)}>
            복지센터
          </Infra> */}
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
            path={seoulData} // 그려질 다각형의 좌표 배열
            strokeWeight={2} // 선의 두께
            strokeColor={"#004c80"} // 선의 색깔
            strokeOpacity={0.8} // 선의 불투명도, 1에서 0 사이의 값이며 0에 가까울수록 투명
            strokeStyle={"solid"} // 선의 스타일
            fillColor={"#fff"} // 채우기 색깔
            fillOpacity={0.7} // 채우기 불투명도
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

        {/* {selectedDong.findIndex((v) => v.isMouseover) !== -1 && (
                    <CustomOverlayMap position={mousePosition}>
                        <DivArea>{selectedDong.find((v) => v.isMouseover).dongName}</DivArea>
                    </CustomOverlayMap>
                )} */}
      </Map>
    </Container>
  );
};

export default MapTestPage13;

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
