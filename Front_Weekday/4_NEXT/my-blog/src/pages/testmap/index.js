import { useEffect, useState } from "react";
import axios from "axios";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const MapTestPage2 = () => {
  // const [data, setData] = useState([]);

  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       "http://openapi.seoul.go.kr:8088/576e61714e636a6b3637545a455046/json/TvEmgcHospitalInfo/1/20/"
  //     )
  //     .then((res) => {
  //       setData(res.data.TvEmgcHospitalInfo.row);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // useEffect(() => {
  //     axios
  //         .all([
  //             axios.get("http://openapi.seoul.go.kr:8088/576e61714e636a6b3637545a455046/json/TvEmgcHospitalInfo/1/10/"),
  //             axios.get("http://openapi.seoul.go.kr:8088/4f49455041636a6b37376d485a5255/json/SeoulPublicLibraryInfo/1/10/"),
  //         ])
  //         .then(
  //             axios.spread((res1, res2) => {
  //                 // console.log(res1, res2);
  //                 const data1 = res1.data.TvEmgcHospitalInfo.row;
  //                 const data2 = res2.data.SeoulPublicLibraryInfo.row;
  //                 const res = [...data1, ...data2];
  //                 setData(res);
  //                 console.log(res);
  //             })
  //         )
  //         .catch((err) => {
  //             console.log(err);
  //         });
  // }, []);

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
          // console.log(res1, res2);
          // const data1 = res1.data.TvEmgcHospitalInfo.row;
          // const data2 = res2.data.SeoulPublicLibraryInfo.row;
          const res = [...data1, ...data2];
          setData1(res1.data.TvEmgcHospitalInfo.row);
          setData2(res2.data.SeoulPublicLibraryInfo.row);
          // console.log(res);
        })
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const data = [
    ...data1.map((datum1, idx2) => ({
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
    })),
    ...data2.map((datum2, idx2) => ({
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
    })),
  ];

  return (
    <>
      <Map
        center={{ lat: 37.541, lng: 126.986 }}
        level={9}
        style={{ width: "100%", height: "100vh" }}
      >
        {data.map((datum, idx) => (
          <MapMarker
            key={idx}
            position={datum.position}
            title={datum.title}
            image={datum.image}
          ></MapMarker>
        ))}
        {/* {data1.map((datum, idx) => (
        <MapMarker
          key={idx}
          position={{ lat: `${datum.WGS84LAT}`, lng: `${datum.WGS84LON}` }}
          title={datum.DUTYNAME}
          image={{
            src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png",
            size: {
              width: 31,
              height: 35,
            },
          }}
        ></MapMarker>
      ))}

      {data2.map((datum2, idx2) => (
        <MapMarker
          key={idx2}
          position={{ lat: `${datum2.XCNTS}`, lng: `${datum2.YDNTS}` }}
          title={datum2.LBRRY_NAME}
          image={{
            src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
            size: {
              width: 31,
              height: 35,
            },
          }}
        ></MapMarker>
      ))} */}
      </Map>
    </>
  );
};

export default MapTestPage2;
