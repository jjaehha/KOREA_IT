import Layout from "@/components/common/layout";
import {
    BoardMain,
    BoardWriteContentInput,
    BoardWriteInput,
    BoardWriteInputFlexContainer,
    BoardWriteInputLabel,
    BoardWriteInputWrap,
    BoardWriteTitle,
    BoardWriteWrap,
    ErrMsg,
    PostBtn,
    RequiredMark,
    ZipBtn,
} from "@/styles/boards/boardWrtie.styles";

const BoardWriteUI = (props) => {
    // BoardUpdate 에서 사용중인 BoardWrite에서 사용중인 BoardWriteUI라면
    //    props.isUpdate 에 true 가 들어있고
    // BoardWritePage 에서 사용중인 BoardWrite에서 사용중인 BoardWriteUI라면
    //   pops.isUpdate에 undefined(flasy) 가 들어있다
    const {
        writerErrMsg,
        writerInputRef,
        contentErrMsg,
        contentInputRef,
        titleErrMsg,
        titleInputRef,
        onWriteBtnClick,
        isUpdate,
        post,
    } = props;
    return (
        <Layout>
            <BoardMain>
                <BoardWriteWrap>
                    <BoardWriteTitle>게시물 {isUpdate ? "수정" : "등록"}</BoardWriteTitle>
                    <BoardWriteInputFlexContainer>
                        <BoardWriteInputWrap>
                            <BoardWriteInputLabel>
                                작성자<RequiredMark>*</RequiredMark>
                            </BoardWriteInputLabel>
                            <BoardWriteInput
                                ref={writerInputRef}
                                defaultValue={post?.UserId}
                                type="text"
                                placeholder="작성자를입력하시오"
                            />
                            <ErrMsg>{writerErrMsg}</ErrMsg>
                        </BoardWriteInputWrap>
                        <BoardWriteInputWrap>
                            <BoardWriteInputLabel>
                                제목<RequiredMark>*</RequiredMark>
                            </BoardWriteInputLabel>
                            <BoardWriteInput
                                ref={titleInputRef}
                                defaultValue={post?.title}
                                type="text"
                                placeholder="제목을 입력하시오"
                            />
                            <ErrMsg>{titleErrMsg}</ErrMsg>
                        </BoardWriteInputWrap>
                        <BoardWriteInputWrap>
                            <BoardWriteInputLabel>
                                내용<RequiredMark>*</RequiredMark>
                            </BoardWriteInputLabel>
                            <BoardWriteContentInput
                                ref={contentInputRef}
                                defaultValue={post?.content}
                                type="text"
                                placeholder="내용을 입력하시오"
                            />
                            <ErrMsg>{contentErrMsg}</ErrMsg>
                        </BoardWriteInputWrap>
                    </BoardWriteInputFlexContainer>
                    <PostBtn onClick={() => onWriteBtnClick(isUpdate)}>{isUpdate ? "수정" : "등록"}하기</PostBtn>
                </BoardWriteWrap>
            </BoardMain>
        </Layout>
    );
};

export default BoardWriteUI;
