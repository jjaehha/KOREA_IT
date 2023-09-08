// page 컴포넌트 만들기
const PostsPage = ()=>{
    // javascript 코드 동작 공간
    const myFunc = ()=>{
        console.log('버튼이 클릭됨!');
    }
    

    // return 안쪽은 jsx 문법이 적용되고 있고, 
    // 이 안에서 javascript 코드를 사용하고 싶다면 
    // {} 로 감싸주어야 한다
    // 이벤트 설정할때 기존 html과 차이점
    // 1.속성 이름이 카멜표기법으로 되어있다 
    //기존 : onclick 
    //리액트 : onClick
    // 2. 함수를 실행하는 것이 아니라 함수 자체를 전달한다
    // 기존 : onclick = "myFunc()"
    // 리액트 : onClick = {myFunc}
    return(
        <>
            <h1>게시글 목록 페이지</h1>
            <button onClick={myFunc}>게시글 작성하기</button>
        </>
    );
}

export default PostsPage;