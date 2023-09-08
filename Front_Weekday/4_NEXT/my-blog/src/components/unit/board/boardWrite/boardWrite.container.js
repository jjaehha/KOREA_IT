import { useRef, useState } from "react";
import BoardWriteUI from "./boardWrite.presenter";
import axios from "axios";
import { useRouter } from "next/router";

const BoardWrite = (props) => {
  const router = useRouter();

  const [titleErrMsg, setTitleErrMsg] = useState("");
  const [contentErrMsg, setContentErrMsg] = useState("");

  const titleInputRef = useRef(null);
  const contentInputRef = useRef(null);

  const onWriteBtnClick = (check) => {
    // 제목 입력창에 입력된 문자열 값
    const title = titleInputRef.current.value;
    // 내용 입력창에 입력된 문자열 값
    const content = contentInputRef.current.value;
    // 내용이 입력이 되엉있지 않다면 내용 ErrMsg보여주기
    if (!content) {
      setContentErrMsg("내용은 필수 입력 값입니다");
      contentInputRef.current.focus();
    } else {
      setContentErrMsg("");
    }

    // 제목이 입력이 되어 있지 않다면 제목 ErrMsg보여주기
    if (!title) {
      setTitleErrMsg("제목은 필수 입력 값입니다");
      titleInputRef.current.focus();
    } else {
      setTitleErrMsg("");
    }

    // 둘다 정상 입력 이라면
    // 성공했다고 alert창 띄어주기
    if (title !== "" && content !== "") {
      if (check) {
        //수정하기 기능
        axios
          .put(`https://koreanjson.com/posts/${router.query.boardId}`, {
            title,
            content,
            userId: 1,
            createAt: "원래최초 입력되어있던 날짜값",
            updatedAt: new Date().toString(),
          })
          .then((res) => {
            alert("수정완료!");
            router.replace(`07-01-boards/${res.date.id}`);
          })
          .catch((err) => console.log(err));
        return;
      }

      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title,
          body: content,
          userId: 1,
        })
        .then((res) => {
          // console.log(res);
          alert(`
          ${res.data.id}번 id의 게시글이 추가 완료
          \n추가된 제목: ${res.data.title}
          \n추가된 내용: ${res.data.body}
          \n추가된 작성자:${res.data.userId}`);
          router.replace("/07-01-boards");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <BoardWriteUI
      isUpdate={props.isUpdate}
      titleInputRef={titleInputRef}
      contentInputRef={contentInputRef}
      titleErrMsg={titleErrMsg}
      contentErrMsg={contentErrMsg}
      onWriteBtnClick={onWriteBtnClick}
    />
  );
};

export default BoardWrite;
