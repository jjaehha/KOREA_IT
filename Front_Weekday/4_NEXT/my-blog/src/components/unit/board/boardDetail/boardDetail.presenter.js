import Layout from "@/components/common/layout";

const BoardDetailUI = ({ router, post, onUpdateBtnClick }) => {
  // const { router, post } = props;
  return (
    <Layout>
      <h1>{router.query.boardId}번 게시글 상세 페이지 입니다</h1>
      <button onClick={onUpdateBtnClick}>수정하기</button>
      <p>제목 : {post?.title}</p>
      <p>작성자id : {post?.UserId}</p>
      <p>게시글 id : {post?.id}</p>
      <p>작성일자 : {post?.createdAt}</p>
      <p>수정일자 : {post?.updatedAt}</p>
      <p>내용 : {post?.content}</p>
    </Layout>
  );
};

export default BoardDetailUI;
