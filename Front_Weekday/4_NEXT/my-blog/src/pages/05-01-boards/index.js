import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Layout from "@/components/common/layout";
import { HeaderWrap } from "@/styles/common/header.styles";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BoardList = ()=>{
    const [postList, setPostList] = useState([]);

    const router = useRouter();

    useEffect(()=>{
        axios.get('https://koreanjson.com/posts')
        .then((res)=>{setPostList(res.data)})
        .catch((err)=>{console.log(err)});
    }, []);

    const onMainClick = ()=>{
        // console.log(router);
        router.push('/');
    }

    const onTitleClick = (postId)=>{
        console.log(postId);
        console.log('제목 클릭됨');
        router.push(`/05-01-boards/${postId}`);
    }

    return(
        <Layout>

            
            <h1>게시글 목록 화면입니다</h1>
            <button onClick={()=>{console.log('안녕')}}>안녕출력버튼</button>
            <button onClick={onMainClick}>메인으로 이동하기</button>
            {
                postList.map(
                    (post, index) => <p key={post.id} onClick={()=>{onTitleClick(post.id)}}>{post.title}</p>
                )
            }
            

        </Layout>
        
    );
}

export default BoardList;