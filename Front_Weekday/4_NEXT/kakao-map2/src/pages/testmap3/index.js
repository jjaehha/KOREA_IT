import geojson from "../../../public/coords.json";
import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import {
  CustomOverlayMap,
  Map,
  MapMarker,
  Polygon,
} from "react-kakao-maps-sdk";

const MapTestPage9 = () => {
  const [hos, setHos] = useState([]);
  const [lib, setLib] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [hosInfo, setHosInfo] = useState([]);
  const [libInfo, setLibInfo] = useState([]);

  const [map, setMap] = useState(null);
  const [dongInfo, setDongInfo] = useState([]);

  const [currentPath, setCurrentPath] = useState([]);
  const [mousePosition, setMousePosition] = useState({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    axios
      .all([
        axios.get(
          `http://openapi.seoul.go.kr:8088/576e61714e636a6b3637545a455046/json/TvEmgcHospitalInfo/1/500/`
        ),
        axios.get(
          `http://openapi.seoul.go.kr:8088/4f49455041636a6b37376d485a5255/json/SeoulPublicLibraryInfo/1/500/`
        ),
      ])
      .then(
        axios.spread((hos, lib) => {
          setHos(hos.data.TvEmgcHospitalInfo.row);
          setLib(lib.data.SeoulPublicLibraryInfo.row);
        })
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (!map) return;

    let data = geojson.features;
    let infos = [];

    data.forEach((dong) => {
      let coordinates = dong.geometry.coordinates[0];
      let info = {};
      info.coords = [];
      info.dongName = dong.properties.EMD_NM;
      info.isMouseover = false;

      coordinates.forEach((coord) => {
        info.coords.push({
          lat: coord[1],
          lng: coord[0],
        });
      });

      infos.push(info);
    });

    setDongInfo(infos);
  }, [map]);

  useEffect(() => {
    if (!map) return;

    const geocoder = new kakao.maps.services.Geocoder();
    let markersContent = [];

    hos.forEach((elem) => {
      let addr = elem.DUTYADDR.split(",")[0];

      geocoder.addressSearch(addr, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          markersContent.push({
            name: elem.DUTYNAME,
            coord: {
              lat: result[0].y,
              lng: result[0].x,
            },
            guName: result[0].road_address.region_2depth_name,
            dongName: result[0].road_address.region_3depth_name,
          });

          if (markersContent.length === hos.length) {
            setHosInfo(markersContent);
          }
        } else {
          console.log("검색 실패");
        }
      });
    });
  }, [map, hos]);

  useEffect(() => {
    if (!map) return;

    const geocoder = new kakao.maps.services.Geocoder();
    let markersContent = [];

    lib.forEach((elem) => {
      let addr = elem.ADRES;

      geocoder.addressSearch(addr, (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          markersContent.push({
            name: elem.LBRRY_NAME,
            coord: {
              lat: result[0].y,
              lng: result[0].x,
            },
            guName: result[0].road_address.region_2depth_name,
            dongName: result[0].road_address.region_3depth_name,
          });
        } else {
          console.log("검색 실패");
          console.log(elem.ADRES);
          console.log(elem.LBRRY_NAME);
        }
      });
    });

    setLibInfo(markersContent);
  }, [map, lib]);

  const click1 = () => {
    console.log(dongInfo);
    console.log(hosInfo);
    console.log(libInfo);
  };

  const filterData = () => {
    let filteredData = [];

    if (selectedType !== null) {
      selectedType.forEach((type) => {
        if (type === "hospital" && hosInfo !== null) {
          hosInfo.forEach((hInfo) => {
            dongInfo.forEach((dInfo) => {
              if (hInfo.dongName.includes(dInfo.dongName)) {
                filteredData.push(dInfo);
              }
            });
          });
        }
        if (type === "library" && libInfo !== null) {
          libInfo.forEach((lInfo) => {
            dongInfo.forEach((dInfo) => {
              if (lInfo.dongName.includes(dInfo.dongName)) {
                filteredData.push(dInfo);
              }
            });
          });
        }
      });
    }

    return filteredData;
  };

  const handleButtonClick = (type) => {
    setSelectedType((prevSelectedType) => {
      if (prevSelectedType === null) {
        return [type];
      } else if (prevSelectedType.includes(type)) {
        return prevSelectedType.filter((t) => t !== type);
      } else {
        return [...prevSelectedType, type];
      }
    });
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
          <Infra onClick={() => handleButtonClick("hospital")}>도서관</Infra>
          <Infra>경로당</Infra>
        </Category>
        <Category>
          <CateTitle>의료시설</CateTitle>
          <Infra onClick={() => handleButtonClick("library")}>응급실</Infra>
          <Infra>보건소</Infra>
          <Infra onClick={click1}>클릭1</Infra>
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
            path={info.coords}
            strokeWeight={2}
            strokeColor={"#004c80"}
            strokeOpacity={0.8}
            strokeStyle={"solid"}
            fillColor={info.isMouseover ? "#09f" : "#fff"}
            fillOpacity={0.7}
            onMouseover={() => {
              info.isMouseover = true;
            }}
            onMouseout={() => {
              info.isMouseover = false;
            }}
          />
        ))}

        {dongInfo.findIndex((v) => v.isMouseover) !== -1 && (
          <CustomOverlayMap position={mousePosition}>
            <DivArea>{dongInfo.find((v) => v.isMouseover).dongName}</DivArea>
          </CustomOverlayMap>
        )}

        {filterData().map((path, idx) => (
          <Polygon
            key={idx}
            path={path.coords}
            strokeWeight={2}
            strokeColor={"red"}
            strokeOpacity={0.8}
            strokeStyle={"solid"}
            fillColor={path.isMouseover ? "pink" : "#ffe6ea"}
            fillOpacity={0.7}
            onMouseover={() => {
              path.isMouseover = true;
            }}
            onMouseout={() => {
              path.isMouseover = false;
            }}
          />
        ))}

        {currentPath.findIndex((v) => v.isMouseover) !== -1 && (
          <CustomOverlayMap position={mousePosition}>
            <DivArea>{currentPath.find((v) => v.isMouseover).dongName}</DivArea>
          </CustomOverlayMap>
        )}
      </Map>
    </Container>
  );
};

export default MapTestPage9;

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
