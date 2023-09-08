import Layout from "@/components/common/layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BoardDetailPage = ()=>{
    //주소와 관련된 여러가지 정보들이 들어있는 객체
    const router = useRouter();
    // router 객체의 query 번째 방에는
    // 주소에 입력된 값이 들어있다
    // router.query.boardId 에는 사용자가 주소에 입력한
    // 값이 문자열로 들어있다

    const [post, setPost] = useState(null);
    console.log()
    useEffect(()=>{
        
        axios.get(`https://koreanjson.com/posts/${router.query.boardId}`)
        .then((res)=>{setPost(res.data)})
        .catch((err)=>{console.log(err)});
    }, []);

    return(
        <Layout>
            <h1>{router.query.boardId}번 게시글 상세 페이지 입니다</h1>
            <p>제목 : {post?.title}</p>
            <p>작성자id : {post?.UserId}</p>
            <p>게시글 id : {post?.id}</p>
            <p>작성일자 : {post?.createdAt}</p>
            <p>수정일자 : {post?.updatedAt}</p>
            <p>내용 : {post?.content}</p>
        </Layout>
        
    );
}

export default BoardDetailPage;