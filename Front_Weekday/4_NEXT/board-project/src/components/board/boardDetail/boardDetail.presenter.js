import Layout from "@/components/common/layout";
import { BoardContent, BoardDetailWrap, BoardInfoWrap, BoardTitle } from "@/styles/boards/boardDetail.styles";
import { WriteBtn } from "@/styles/boards/boardList.styles";

const BoardDetailUI = (props) => {
    const { post } = props;
    return (
        <Layout>
            <BoardDetailWrap>
                <BoardTitle>{post?.title}</BoardTitle>
                <BoardInfoWrap>
                    <p>작성자id</p>
                    <p>{post?.UserId}</p>
                    <p>게시글id</p>
                    <p>{post?.id}</p>
                </BoardInfoWrap>
                <BoardInfoWrap>
                    <p>작성일자</p>
                    <p>{post?.createdAt}</p>
                    <p>수정일자</p>
                    <p>{post?.updatedAt}</p>
                </BoardInfoWrap>
                <BoardContent>{post?.content}</BoardContent>
                <WriteBtn onClick={props.onUpdateBtnClick}>수정하기</WriteBtn>
            </BoardDetailWrap>
        </Layout>
    );
};

export default BoardDetailUI;
