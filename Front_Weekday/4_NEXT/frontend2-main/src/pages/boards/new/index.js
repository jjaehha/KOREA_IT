import { ArrowBtn, ArrowWrap, BoardMain, BoardWriteContentInput, BoardWriteInput, BoardWriteInputFlexContainer, BoardWriteInputLabel, BoardWriteInputWrap, BoardWriteTitle, BoardWriteWrap, Carousel, CarouselContents, CarouselDetail, CarouselItem, CarouselTextWrap, CarouselTitle, JoinBtn, LoginBtn, LogoImg, MainHeader, MainNav, MenuItem, MenuWrap, NavBtnWrap, Pin, PinItem, PostBtn, RequiredMark, ZipBtn } from "@/styles/boards/boardWrtie.styles";
import Image from "next/image";

const BoardWritePage = ()=>{
  return(
    <>
      <MainHeader>
        <MainNav>
          <Image src={'/logo.svg'} width={200} height={100}/>
          <NavBtnWrap>
            <LoginBtn>로그인</LoginBtn>
            <JoinBtn>회원가입</JoinBtn>
          </NavBtnWrap>
        </MainNav>
        <Carousel>
          <CarouselContents>
            <CarouselItem>
              <CarouselTextWrap>
                <CarouselTitle>내가 만드는 사이트</CarouselTitle>
                <CarouselDetail>이곳은 Carousel 메뉴가 적용되는 곳입니다</CarouselDetail>
              </CarouselTextWrap>
            </CarouselItem>
          </CarouselContents>

          <ArrowWrap>
            <ArrowBtn>{'<'}</ArrowBtn>
            <ArrowBtn>{'>'}</ArrowBtn>
          </ArrowWrap>

          <Pin>
            <PinItem current/>
            <PinItem/>
            <PinItem/>
          </Pin>

        </Carousel>

        <MenuWrap>
          <MenuItem current>게시판</MenuItem>
          <MenuItem>할일 목록</MenuItem>
          <MenuItem>내정보보기</MenuItem>
        </MenuWrap>
      </MainHeader>

      <BoardMain>
        <BoardWriteWrap>
          <BoardWriteTitle>게시물 등록</BoardWriteTitle>
          <BoardWriteInputFlexContainer>
            <BoardWriteInputWrap id="writer-input">
              <BoardWriteInputLabel  htmlFor='writer'>작성자<RequiredMark>*</RequiredMark></BoardWriteInputLabel>
              <BoardWriteInput type='text' id="writer" placeholder='작성자를입력하시오'/>
            </BoardWriteInputWrap>
            <BoardWriteInputWrap id="pw-input">
              <BoardWriteInputLabel htmlFor='post-pw'>비밀번호</BoardWriteInputLabel>
              <BoardWriteInput type='password' id="post-pw" placeholder='비밀번호를 입력하시오'/>
            </BoardWriteInputWrap>
            <BoardWriteInputWrap>
              <BoardWriteInputLabel htmlFor='post-title'>제목<RequiredMark>*</RequiredMark></BoardWriteInputLabel>
              <BoardWriteInput type='text' id="post-title" placeholder='제목을 입력하시오'/>
            </BoardWriteInputWrap>
            <BoardWriteInputWrap>
              <BoardWriteInputLabel htmlFor='post-detail'>내용<RequiredMark>*</RequiredMark></BoardWriteInputLabel>
              <BoardWriteContentInput type='text' id="post-detail" placeholder='제목을 입력하시오'/>
            </BoardWriteInputWrap>
            <BoardWriteInputWrap>
              <BoardWriteInputLabel>주소</BoardWriteInputLabel>
              <div>
                <BoardWriteInput id="zip-input" type="text" readOnly value={"01234"}/>
                <ZipBtn>우편번호 조회</ZipBtn>
              </div>
              <BoardWriteInput type="text"/>
              <BoardWriteInput type="text"/>
            </BoardWriteInputWrap>

            <BoardWriteInputWrap>
              <BoardWriteInputLabel>권한설정</BoardWriteInputLabel>
              <div>
                <BoardWriteInput type="radio" name="prev" id="public" defaultChecked/>
                <BoardWriteInputLabel htmlFor="public">공개</BoardWriteInputLabel>
                <BoardWriteInput type="radio" name="prev" id="public" />
                <BoardWriteInputLabel htmlFor="prev">비공개</BoardWriteInputLabel>
              </div>
            </BoardWriteInputWrap>
          </BoardWriteInputFlexContainer>
          <PostBtn>등록하기</PostBtn>
        </BoardWriteWrap>
      </BoardMain>
    </>
  );
}

export default BoardWritePage;