import axios from "axios";
import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const MapTestPage5 = () => {
    const [data, setData] = useState([]);
    const [markers, setMarkers] = useState([]);
    const [map, setMap] = useState();
    const dataCnt = 20;

    // 결과적으로 markers에는 이런식으로 데이터가 들어가게 됨
    // const markers = [
    //     {
    //         name: "강남고려병원",
    //         position: {
    //             lat: "37.4856188363947",
    //             lng: "126.956781703053",
    //         },
    //         guName: "관악구",
    //         dongName: "봉천동",
    //     },
    //     {
    //         name: "가톨릭대학교은평성모병원",
    //         position: {
    //             lat: "37.6336094022541",
    //             lng: "126.916152525534",
    //         },
    //         guName: "은평구",
    //         dongName: "진관동",
    //     },
    //     {
    //         name: "강북삼성병원",
    //         position: {
    //             lat: "37.5688677261045",
    //             lng: "126.967812703696",
    //         },
    //         guName: "종로구",
    //         dongName: "평동",
    //     },
    //     //...
    // ];

    useEffect(() => {
        axios
            .get(`http://openapi.seoul.go.kr:8088/576e61714e636a6b3637545a455046/json/TvEmgcHospitalInfo/1/${dataCnt}/`)
            .then((res) => {
                // console.log(res.data.TvEmgcHospitalInfo.row);
                setData(res.data.TvEmgcHospitalInfo.row);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        if (!map) return;

        // 주소-좌표 변환 객체를 생성
        const geocoder = new kakao.maps.services.Geocoder();
        let markersContent = [];

        // 주소로 좌표를 검색
        data.forEach((elem) => {
            let addr = elem.DUTYADDR.split(",")[0];
            // console.log("addr :", addr);

            geocoder.addressSearch(addr, (result, status) => {
                // 정상적으로 검색이 완료됐다면
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

                    if (markersContent.length === dataCnt) {
                        setMarkers(markersContent);
                    }
                } else {
                    console.log("검색 실패");
                }
            });
        });
    }, [map, data]);

    const click = () => {
        console.log(markers);
    };

    return (
        <>
            {/* 콘솔창에서 markers 확인 */}
            <button onClick={click} style={{ fontSize: "20px" }}>
                클릭
            </button>

            {/* {markers.map((row, idx) => (
                <p key={idx}>
                    {idx + 1}. {row.name}
                </p>
            ))} */}

            <Map
                center={{
                    lat: 37.541,
                    lng: 126.986,
                }}
                style={{
                    width: "100%",
                    height: "100vh",
                }}
                level={9}
                onCreate={setMap}
            >
                {markers.map((row) => (
                    <MapMarker
                        key={`marker-${row.name}-${row.coord.lat},${row.coord.lng}`}
                        position={row.coord}
                        title={row.name}
                        image={{
                            src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png",
                            size: {
                                width: 31,
                                height: 35,
                            },
                        }}
                    ></MapMarker>
                ))}
            </Map>
        </>
    );
};

export default MapTestPage5;
