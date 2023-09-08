import { ArrowBtn, ArrowWrap, Carousel, CarouselContents, CarouselDetail, CarouselItem, CarouselTextWrap, CarouselTitle, JoinBtn, LoginBtn, MainHeader, MainNav, MenuItem, MenuWrap, NavBtnWrap, Pin, PinItem } from "@/styles/common/header.styles";
import Image from "next/image";

const Header = ()=>{
  return(
    <MainHeader>
        <MainNav>
          <Image src={'/logo.svg'} alt={'logo image'} width={200} height={100}/>
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
  );
}

export default Header;