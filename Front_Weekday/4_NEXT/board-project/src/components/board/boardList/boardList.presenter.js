import Layout from "@/components/common/layout";
import {
  BoardHeader,
  BoardListWrap,
  BoardSearch,
  BoardTableHeader,
  BoardTableRow,
  Line,
  SearchBtn,
  SearchWrap,
  WriteBtn,
} from "@/styles/boards/boardList.styles";
import { Pagination } from "@mui/material";

const BoardListUI = (props) => {
  return (
    <Layout>
      <BoardListWrap>
        <h1>게시글 목록</h1>
        <Line />
        <BoardHeader>
          <p>게시글</p>
          <SearchWrap>
            <BoardSearch ref={props.searchInputRef} />
            <SearchBtn onClick={props.onSerchClick}>검색</SearchBtn>
          </SearchWrap>
        </BoardHeader>
        <BoardTableHeader>
          <p>NO</p>
          <p>제목</p>
          <p>작성자id</p>
          <p>작성일자</p>
          <p>수정일자</p>
        </BoardTableHeader>
        {props.posts.map((v, index) => (
          <BoardTableRow key={v.id}>
            <p>{index + 1 + (props.currnetPage - 1) * props.countPerPage}</p>
            <p
              onClick={() => {
                props.onTitleClick(v.id);
              }}
            >
              {v.title}
            </p>
            <p>{v.writerId}</p>
            <p>{v.createdAt}</p>
            <p>{v.updatedAt}</p>
          </BoardTableRow>
        ))}
        <WriteBtn onClick={props.onWriteBtnClick}>글쓰기</WriteBtn>
        <Pagination
          count={props.totalPage}
          page={props.currnetPage}
          onChange={props.onPageClick}
        />
      </BoardListWrap>
    </Layout>
  );
};

export default BoardListUI;
