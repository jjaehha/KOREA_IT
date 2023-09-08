import {PageContent, MyDiv, PageTitle , PageSubTitle} from "../styles/home.styles";
import styled from "@emotion/styled";


//함수 1
// function 함수명(){}


// 2
// const 함수명 = function(){}

// 3
// const 함수명 = ()=>{}

const Home = ()=>{
  return (
    <MyDiv>
      <PageTitle>안녕</PageTitle>
      <PageSubTitle>React를 활용하여 만든 메인 화면입니다!</PageSubTitle>
      <PageContent>내용입니다</PageContent>
    </MyDiv>
  );
}

export default Home;

