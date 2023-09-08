import styled from "@emotion/styled";

// 헤더영역 디자인
export const MainHeader = styled.header`
  margin-bottom: 20px;
`;

export const MainNav = styled.nav`
  max-width: 1200px;
  height: 156px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoImg = styled.img`

`;

export const NavBtnWrap = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const LoginBtn = styled.button`
  padding: 10px 16px;
  border-radius: 10px;
  border: none;
  background-color: white;
`;

export const JoinBtn = styled.button`
  padding: 10px 16px;
  border-radius: 10px;
  background-color: #61dafb;
  border: none;
`;

// carousel 메뉴 디자인
export const Carousel = styled.div`
  height: 400px;
  position: relative;
`;

export const CarouselContents = styled.div`
  height: inherit;
`;

export const CarouselItem = styled.div`
  height: inherit;
  background-image: url('/carousel1.jpg');
  background-size: cover;
  background-position: center;

  position: relative;
`;

export const CarouselTextWrap = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0,0,0,0.5);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: whitesmoke;
`;

export const CarouselTitle = styled.h1`

`;

export const CarouselDetail = styled.h2`

`;

export const ArrowWrap = styled.div`
  display: flex;
  justify-content: space-between;  
 
  position: absolute;
  

  bottom: 50%;
  transform: translateY(50%);

  left: 70px;
  right: 70px;

`;

export const ArrowBtn = styled.div`
  width: 48px;
  height: 48px;
  background-color: #e9e9e9;
  border-radius: 48px;
  text-align: center;
  line-height: 48px;
`;


export const Pin = styled.div`
  position:absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
`;

export const PinItem = styled.span`
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 8px;
  border: 1px solid white;
  margin-right: 10px;
  &:last-child{
    margin-right: 0;
  }

  background-color: ${(props)=>props.current && 'white' };
`;

export const MenuWrap = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 40px;

  padding: 18px 0;

  background-color: #61dafb;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.1);

  color: white;

  align-items: baseline;

  @media screen and (max-width:768px) {
  & {
    padding: 20px;
  }
}
`;

export const MenuItem = styled.div`
  color: ${(props)=> props.current ? 'black' : 'gray'};
  cursor: pointer;

  font-weight: ${(props)=>props.current && 'bold'};
`;