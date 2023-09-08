import axios from "axios";
import BoardWriteUI from "./boardWrite.presenter";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

const BoardWrite = (props) => {
  const router = useRouter();
  // BoardUpdatePage 에서 사용중인 BoardWrite라면 props.isUpdate 가 true
  // BoardUpdatePage 에서 사용중인 BoardWrite라면 props.isUpdate 가 false
  const [writerErrMsg, setWriterErrMsg] = useState("");
  const [titleErrMsg, setTitleErrMsg] = useState("");
  const [contentErrMsg, setContentErrMsg] = useState("");

  const writerInputRef = useRef(null);
  const titleInputRef = useRef(null);
  const contentInputRef = useRef(null);

  const onWriteBtnClick = (isUpdate) => {
    // 함수를 사용할때 onWriteBtnClick(true) --> 개시글 수정하기 버튼으로 동작
    // 함수를 사용할때 onWriteBtnClick(false) --> 개시글 작성하기 버튼으로 동작

    const writer = writerInputRef.current.value; // 사용자가 입력한 작성자
    const title = titleInputRef.current.value; // 사용자가 입력한 제목
    const content = contentInputRef.current.value; // 사용자가 입력한 게시글 내용

    let check = false;

    if (!content) {
      setContentErrMsg("내용은 필수 입력 값입니다");
      check = true;
      contentInputRef.current.focus();
    } else {
      setContentErrMsg("");
    }

    if (!title) {
      setTitleErrMsg("제목은 필수 입력 값입니다");
      check = true;
      titleInputRef.current.focus();
    } else {
      setTitleErrMsg("");
    }

    if (!writer) {
      setWriterErrMsg("작성자는 필수 입력 값입니다");
      check = true;
      writerInputRef.current.focus();
    } else {
      setWriterErrMsg("");
    }
    console.log("ddd");

    if (!check) {
      // 작성 성공했다는 의미
      if (isUpdate) {
        alert("수정하기 성공!");
      } else {
        axios
          .post(`http://localhost:3000/api/posts`, {
            title: title,
            content: content,
            writerId: writer,
          })
          .then((res) => {
            console.log(res);
            router.replace(`/boards/${res.data.id}`);
          })
          .catch((err) => console.log(err));
      }
      alert("성공");
    }
  };

  return (
    <BoardWriteUI
      post={props.post}
      isUpdate={props.isUpdate}
      writerErrMsg={writerErrMsg}
      titleErrMsg={titleErrMsg}
      contentErrMsg={contentErrMsg}
      writerInputRef={writerInputRef}
      contentInputRef={contentInputRef}
      titleInputRef={titleInputRef}
      onWriteBtnClick={onWriteBtnClick}
    />
  );
};
export default BoardWrite;
