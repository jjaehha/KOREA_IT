import { useRouter } from "next/router";

const TestPage = ()=>{
    const router = useRouter();
    // 주소에 localhost:3000/04-04-dynamic/??
    // router 의 query 안에 [key] 방에 ?? 값이 들어가 있다
    console.log(router)
    return (
        <>
            <h1>test page</h1>
            <p>{router.query.boardId}</p>
        </>
    );
}

export default TestPage;