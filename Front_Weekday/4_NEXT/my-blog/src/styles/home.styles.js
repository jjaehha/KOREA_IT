// const { default: styled } = require("@emotion/styled"); // 옛날 import 방식
import styled from "@emotion/styled";

export const MyDiv = styled.div`
  background-color : #e9e9e9;
  width : 80%;
  margin: 0 auto;
  text-align: center;
`;

export const PageTitle = styled.h1`
  color:lightblue;
`;

export const PageSubTitle = styled.h2`
  font-size: 13px;
`;

export const PageContent = styled.p`
    color: red;
`;

// export {MyDiv, PageTitle, PageSubTitle , PageContent};
