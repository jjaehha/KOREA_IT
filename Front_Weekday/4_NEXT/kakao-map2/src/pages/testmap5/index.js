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

const MapTestPage12 = () => {
  const [hos, setHos] = useState([]);
  const [lib, setLib] = useState([]);

  const [locationObj, setLocationObj] = useState([]);
  let hosInfo = [];
  let libInfo = [];

  // let fullAddress = [
  //     { addr: "서울특별시 관악구 관악로 242 (봉천동)" },
  //     { addr: "서울특별시 영등포구 63로 10, 여의도성모병원 (여의도동)" },
  // ];

  useEffect(() => {
    axios
      .all([
        axios.get(
          `http://openapi.seoul.go.kr:8088/576e61714e636a6b3637545a455046/json/TvEmgcHospitalInfo/1/500`
        ),
        axios.get(
          `http://openapi.seoul.go.kr:8088/4f49455041636a6b37376d485a5255/json/SeoulPublicLibraryInfo/1/500`
        ),
      ])
      .then(
        axios.spread((hos, lib) => {
          // console.log(hos.data.TvEmgcHospitalInfo.row);
          // console.log(lib.data.SeoulPublicLibraryInfo.row);
          setHos(hos.data.TvEmgcHospitalInfo.row);
          setLib(lib.data.SeoulPublicLibraryInfo.row);
        })
      )
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const axiosFunc = (elem, addrKey, info) => {
    // console.log(elem);
    axios
      .get(
        `https://dapi.kakao.com/v2/local/search/address.json?query=${elem[addrKey]}`,
        {
          headers: {
            Authorization: "KakaoAK c810d1096c3f50297a4f3e8323afece5",
          },
        }
      )
      .then((res) => {
        const location = res.data.documents[0];
        if (location) {
          info.push({
            si: location.address.region_1depth_name,
            gu: location.addregion_3depth_name,
            lat: location.addresress.region_2depth_name,
            dong: location.address.s.y,
            lng: location.address.x,
          });
        }
      });
  };

  const arrFunc = (data, addrKey, info) => {
    for (let a = data.length; data.length > a; a--) {
      for (let i = 0; i < a; i++) {
        setTimeout(() => axiosFunc(data[i], addrKey, info), 5000);
      }
      for (let i = a; i < data.length; i++) {
        setTimeout(() => axiosFunc(data[i], addrKey, info), 5000);
      }
    }
  };

  useEffect(() => {
    arrFunc(hos, "DUTYADDR", hosInfo);
  }, [hos]);

  useEffect(() => {
    setTimeout(() => arrFunc(lib, "ADRES", libInfo), 5000);
  }, [lib]);

  const click1 = () => {
    console.log(hos);
    console.log(hosInfo);
  };

  const click2 = () => {
    console.log(lib);
    console.log(libInfo);
  };

  return (
    <>
      <button onClick={click1}>클릭1</button>
      <button onClick={click2}>클릭2</button>
    </>
  );
};

export default MapTestPage12;
