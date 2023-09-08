import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();

    const moveBtn1 = () => {
        router.push("/map-05-coord");
    };

    const moveBtn2 = () => {
        router.push("/map-07-polygon");
    };

    return (
        <>
            <h1>카카오맵</h1>
            <button onClick={moveBtn1}>주소-좌표 변환</button>
            <button onClick={moveBtn2}>동 구역 표시</button>
        </>
    );
}
