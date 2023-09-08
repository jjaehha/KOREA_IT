import { useEffect, useState } from "react";
import axios from "axios";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const MapTestPage2 = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    axios
      .all([
        axios.get(
          "http://openapi.seoul.go.kr:8088/576e61714e636a6b3637545a455046/json/TvEmgcHospitalInfo/1/10/"
        ),
        axios.get(
          "http://openapi.seoul.go.kr:8088/4f49455041636a6b37376d485a5255/json/SeoulPublicLibraryInfo/1/10/"
        ),
      ])
      .then(
        axios.spread((res1, res2) => {
          const res = [...data1, ...data2];
          setData1(res1.data.TvEmgcHospitalInfo.row);
          setData2(res2.data.SeoulPublicLibraryInfo.row);
        })
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filterData = () => {
    let filteredData = [];
    if (selectedType === "hospital") {
      filteredData = data1.map((datum1) => ({
        type: "type1",
        position: {
          lat: parseFloat(datum1.WGS84LAT),
          lng: parseFloat(datum1.WGS84LON),
        },
        title: datum1.DUTYNAME,
        image: {
          src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png",
          size: {
            width: 31,
            height: 35,
          },
        },
      }));
    } else if (selectedType === "library") {
      filteredData = data2.map((datum2) => ({
        type: "type2",
        position: {
          lat: parseFloat(datum2.XCNTS),
          lng: parseFloat(datum2.YDNTS),
        },
        title: datum2.LBRRY_NAME,
        image: {
          src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
          size: {
            width: 31,
            height: 35,
          },
        },
      }));
    }
    return filteredData;
  };

  const handleButtonClick = (type) => {
    setSelectedType(type);
  };

  return (
    <>
      <button onClick={() => handleButtonClick("hospital")}>병원</button>
      <button onClick={() => handleButtonClick("library")}>도서관</button>
      <Map
        center={{ lat: 37.541, lng: 126.986 }}
        level={9}
        style={{ width: "100%", height: "100vh" }}
      >
        {filterData().map((datum, idx) => (
          <MapMarker
            key={idx}
            position={datum.position}
            title={datum.title}
            image={datum.image}
          ></MapMarker>
        ))}
      </Map>
    </>
  );
};

export default MapTestPage2;
