import styled from "@emotion/styled";

const MapPage = ()=>{
    let posts = [
        {
            postId:1,
            title:'게시글 제목입니다',
            content :'게시글 내용입니다',
            userId:2,
            createdAt:'2023-04-16',
            updatedAt:'2023-04-21'
        },
        {
            postId:2,
            title:'제목입니다',
            content :'게시글 내용',
            userId:1,
            createdAt:'2023-04-14',
            updatedAt:'2023-04-21'
        },
        {
            postId:3,
            title:'안녕입니다',
            content :'오늘 처음 가입했어요',
            userId:2,
            createdAt:'2023-04-10',
            updatedAt:'2023-04-21'
        },
        {
            postId:15,
            title:'안녕입니다',
            content :'오늘 처음 가입했어요',
            userId:2,
            createdAt:'2023-04-10',
            updatedAt:'2023-04-21'
        },
        {
            postId:7,
            title:'안녕입니다',
            content :'오늘 처음 가입했어요',
            userId:2,
            createdAt:'2023-04-10',
            updatedAt:'2023-04-21'
        },
    ];
    return(
        <>
            <h1>Map 페이지 2</h1>
            <DivWrap>
                <p>게시글 번호</p>
                <p>제목</p>
                <p>작성자</p>
                <p>작성일자</p>
                <p>수정일자</p>
            </DivWrap>
            {
                posts.map((post, index)=> 
                    <DivWrap key={post.postId} style={{border:'1px solid black'}}>
                        <p>{index+1}</p>
                        <p>{post.title}</p>
                        <p>{post.userId}</p>
                        <p>{post.createdAt}</p>
                        <p>{post.updatedAt}</p>
                    </DivWrap>
                )
            }
        </>
    );
}

export default MapPage;

const DivWrap = styled.div`
    display: flex;
    border: 1px solid black;
    justify-content: space-between;
`;