import { useState } from "react";

// 게시글 작성 페이지 컴포넌트
const PostWritePage = ()=>{
    // let writer = '';
    //writer를 state변수로 만들겠다!

    // writer : state 변수
    // setWriter : state변수 writer의 값을 변경해주고, 
    //              리렌더링을 시켜주는 함수
    let [writer, setWriter] = useState('초기값');

    const onWriterChange = (e)=>{
        // e.target.value에는 input태그 내에 입력된 
        // 문자열 값이 들어있다
        console.log('writer속 값 : ', writer);
        console.log(e.target.value);

        // writer 라는 변수에다 입력된 문자열값을 대입했다
        // writer = e.target.value;
        // writer 라는 변수에다 입력된 문자열값을 대입하고,
        // re-rendering을 해줘
        setWriter(e.target.value);
    }

    return(
        <>
            <h1>게시글 작성 페이지</h1>
            <input onChange={onWriterChange} placeholder="작성자"/>
            <input placeholder="제목"/>
            <input placeholder="내용"/>
            <p>{writer}</p>
        </>
    );
}

export default PostWritePage;
