import BoardListUI from "./boardList.presenter";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const BoardList = () => {
  const countPerPage = 15;
  const [posts, setPosts] = useState([]);
  //   const [paginatedPosts, setPaginatedPosts] = useState([]);
  //   const [filteredPosts, setFilteredPosts] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [currnetPage, setCurrentPage] = useState(1);

  const searchInputRef = useRef(null);
  const searchText = useRef("");

  const router = useRouter();

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/api/posts?page=${currnetPage}&limit=${countPerPage}&search=${searchText.current}`
      )
      .then((res) => {
        setTotalPage(Math.ceil(res.data.totalLength / countPerPage));
        setPosts(res.data.fetchBoards);
      })
      .catch((err) => console.log(err));
  }, [currnetPage, countPerPage]);

  const onTitleClick = (postId) => {
    router.push(`/boards/${postId}`);
  };

  const onWriteBtnClick = () => {
    router.push(`/boards/new`);
  };

  const onPageClick = (event, value) => {
    // console.log("페이지가 클릭됨");
    // console.log(event);
    // console.log(value);
    searchInputRef.current.value = "";
    setCurrentPage(value);
    // setPaginatedPosts(
    //   posts.slice((value - 1) * countPerPage, value * countPerPage)
    // );
  };

  const onSerchClick = () => {
    searchText.current = searchInputRef.current.value;
    axios
      .get(
        `http://localhost:3000/api/posts?$paget=${currnetPage}&limit=${countPerPage}&search=${searchText.current}`
      )
      .then((res) => {
        setTotalPage(Math.ceil(res.data.totalLength / countPerPage));
        setPosts(res.data.fetchBoards);
        setCurrentPage(1);
        searchInputRef.current.value = "";
      })
      .catch((err) => {
        console.log(err);
        alert("해당 검색어 결과가 없습니다");
        searchInputRef.current.value = "";
      });
    // const searchTxt = searchInputRef.current.value;
    // console.log(searchTxt);
    // setFilteredPosts(posts.filter((post) => post.title.includes(searchTxt)));
    // setTotalPage(Math.ceil(filteredPosts.length / countPerPage));
    setCurrentPage(1);

    // setPaginatedPosts(
    //   filteredPosts.slice(
    //     (currnetPage - 1) * countPerPage,
    //     currnetPage * countPerPage
    //   )
    // );
  };

  return (
    <BoardListUI
      onSerchClick={onSerchClick}
      searchInputRef={searchInputRef}
      countPerPage={countPerPage}
      onPageClick={onPageClick}
      currnetPage={currnetPage}
      totalPage={totalPage}
      posts={posts}
      onTitleClick={onTitleClick}
      onWriteBtnClick={onWriteBtnClick}
    />
  );
};

export default BoardList;
