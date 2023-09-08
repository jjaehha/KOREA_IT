import axios from "axios";
import { useEffect, useState } from "react";

const APIPage = ()=>{
    const [posts, setPosts] = useState([]);

    // useEffect 의 콜백함수는 최초 랜더링 시에만 실행이 되고
    // re-rendering 시에는 실행이 되지 않는다
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((a)=>{setPosts(a.data)})
        .catch((err)=>{console.log(err)});
    }, []);

    return(
        <>
            <h1>API Page</h1>
            {posts.map((post)=> <div key={post.id}><p>{post.title}</p></div>)}
        </>
    );
}

export default APIPage;