import BoardListUI from "./boardList.presenter";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BoardList = () => {
  const [postList, setPostList] = useState([]);

  const router = useRouter();

  useEffect(() => {
    axios
      .get("https://koreanjson.com/posts")
      .then((res) => {
        setPostList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onMainClick = () => {
    // console.log(router);
    router.push("/");
  };

  const onTitleClick = (postId) => {
    console.log(postId);
    console.log("제목 클릭됨");
    router.push(`/07-01-boards/${postId}`);
  };

  const onWriteBtnClick = () => {
    // console.log("글쓰기 버튼 클릭됨");
    router.push("/07-01-boards/new");
  };

  return (
    <BoardListUI
      onWriteBtnClick={onWriteBtnClick}
      onMainClick={onMainClick}
      onTitleClick={onTitleClick}
      postList={postList}
    />
  );
};

export default BoardList;
