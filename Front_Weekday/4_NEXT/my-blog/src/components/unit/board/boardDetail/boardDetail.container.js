import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BoardDetailUI from "./boardDetail.presenter";

const BoardDetail = () => {
  //주소와 관련된 여러가지 정보들이 들어있는 객체
  const router = useRouter();
  // router 객체의 query 번째 방에는
  // 주소에 입력된 값이 들어있다
  // router.query.boardId 에는 사용자가 주소에 입력한
  // 값이 문자열로 들어있다

  const [post, setPost] = useState(null);
  console.log();
  useEffect(() => {
    axios
      .get(`https://koreanjson.com/posts/${router.query.boardId}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router.isReady]);

  const onUpdateBtnClick = () => {
    router.push(`/07-01-boards/${router.query.boardId}/update`);
  };

  return (
    <BoardDetailUI
      router={router}
      post={post}
      onUpdateBtnClick={onUpdateBtnClick}
    />
  );
};

export default BoardDetail;
