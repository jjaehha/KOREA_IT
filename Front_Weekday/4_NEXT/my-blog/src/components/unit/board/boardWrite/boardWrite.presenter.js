import Layout from "@/components/common/layout";

const BoardWriteUI = (props) => {
  return (
    <Layout>
      <h1>게시글 {props.isUpdate ? "수정" : "작성"} 페이지</h1>
      <p>
        제목: <input ref={props.titleInputRef} />
      </p>
      <p>{props.titleErrMsg}</p>
      <p>
        내용: <input ref={props.contentInputRef} />
      </p>
      <p>{props.contentErrMsg}</p>
      <button onClick={() => props.onWriteBtnClick(props.isUpdate)}>
        {props.isUpdate ? "수정" : "작성"}하기!
      </button>
    </Layout>
  );
};

export default BoardWriteUI;
