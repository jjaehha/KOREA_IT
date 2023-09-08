import Layout from "@/components/common/layout";
// 게시글 목록 페이지 컴포넌트
// <BoardListPage/> 에서 return 부분에 있는
// 실질적으로 그려지는 부분이 presenter 컴포넌트

const BoardListUI = (props) => {
  return (
    <Layout>
      <h1>게시글 목록 화면입니다</h1>
      <button
        onClick={() => {
          console.log("안녕");
        }}
      >
        안녕출력버튼
      </button>
      <button onClick={props.onMainClick}>메인으로 이동하기</button>
      <button onClick={props.onWriteBtnClick}>글쓰기</button>
      {props.postList.map((post, index) => (
        <p
          key={post.id}
          onClick={() => {
            props.onTitleClick(post.id);
          }}
        >
          {post.title}
        </p>
      ))}
    </Layout>
  );
};

export default BoardListUI;
