import geojson from "../../../public/coords.json";
import { useEffect, useState } from "react";
import { Map, Polygon } from "react-kakao-maps-sdk";

const MapTestPage7 = () => {
  const [map, setMap] = useState(null);
  const [dongInfo, setDongInfo] = useState([]);

  // 결과적으로 dongInfo에는 이런식으로 데이터가 들어가게 됨
  // const dongInfo = [
  //     {
  //         coords: [
  //             {
  //                 lat: 37.570134191525206,
  //                 lng: 126.99537812847358,
  //             },
  //             {
  //                 lat: 37.57012405117911,
  //                 lng: 126.99529730833528,
  //             },
  //             //...
  //         ],
  //         dongName: "장사동",
  //     },
  //     {
  //         coords: [
  //             {
  //                 lat: 37.573358293707116,
  //                 lng: 126.9910142029499,
  //             },
  //             {
  //                 lat: 37.573335191621965,
  //                 lng: 126.99090490076108,
  //             },
  //             //...
  //         ],
  //         dongName: "돈의동",
  //     },
  //     //...
  // ];

  useEffect(() => {
    if (!map) return;

    let data = geojson.features; // 각 동의 폴리곤 좌표 및 이름 정보가 담긴 배열
    let infos = [];

    data.forEach((dong) => {
      let coordinates = dong.geometry.coordinates[0];
      let info = {};
      info.coords = [];
      info.dongName = dong.properties.EMD_NM;

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

  const click = () => {
    console.log(dongInfo);
  };

  return (
    <>
      {/* 콘솔창에서 dongInfo 확인 */}
      <button onClick={click} style={{ fontSize: "20px" }}>
        클릭
      </button>

      <Map
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
      >
        {dongInfo.map((info, idx) => (
          <Polygon
            key={idx}
            path={info.coords} // 그려질 다각형의 좌표 배열
            strokeWeight={2} // 선의 두께
            strokeColor={"#004c80"} // 선의 색깔
            strokeOpacity={0.8} // 선의 불투명도, 1에서 0 사이의 값이며 0에 가까울수록 투명
            strokeStyle={"solid"} // 선의 스타일
            fillColor={"#fff"} // 채우기 색깔
            fillOpacity={0.7} // 채우기 불투명도
          />
        ))}
      </Map>
    </>
  );
};

export default MapTestPage7;
