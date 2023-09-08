import styled from "@emotion/styled";

export const BoardDetailWrap = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const BoardTitle = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid silver;
  font-size: 18px;
  padding: 20px;
  background-color: #e9e9e9;
`;

export const BoardInfoWrap = styled.div`
  display: flex;
  border-bottom: 1px solid silver;
  &>p{
    padding: 20px;
  }

  & > p:nth-of-type(odd){
    width: 10%;
    text-align: center;
    border-right: 0.5px solid silver;
    border-left: 0.5px solid silver;
    
  }
  & > p:nth-of-type(even){
    width: 40%;
  }
`;

export const BoardContent = styled.div`

  padding: 40px 20px;
  border-bottom:1px solid silver;
`;


