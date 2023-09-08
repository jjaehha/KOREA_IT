import styled from "@emotion/styled";

export const BoardListWrap = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Line = styled.div`
  width: 50px;
  height: 3px;
  background-color: aqua;
  margin-bottom: 10px;
`;

export const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid black;
  align-items: center;
  padding-bottom:10px;
`;

export const SearchWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const BoardSearch = styled.input`
  width: 180px;
  border: 1px solid silver;
  outline: none;
  border-radius: 20px;
  padding: 5px 15px;
  margin-right: 5px;
`;

export const SearchBtn = styled.button`
  border: none;
  border-radius: 0;
  cursor: pointer;
  padding: 5px 10px;
`;

export const BoardTableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-align: center;
  font-weight: bold;
  border-bottom: 1px solid silver;
  padding: 10px 0;

  & > p:first-of-type{
    width: 10%;
  }

  & > p:nth-of-type(2){
    width: 45%;
  }
  & > p:nth-of-type(3){
    width: 15%;
  }
  & > p:nth-of-type(4){
    width: 15%;
  }
  & > p:nth-of-type(5){
    width: 15%;
  }
`;

export const BoardTableRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid silver;
  padding: 10px 0;

  & > p:first-of-type {
    width: 10%;
  }
  & > p:nth-of-type(2){
    width: 45%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: start;
    cursor: pointer;
  }
  & > p:nth-of-type(3){
    width: 15%;
  }
  & > p:nth-of-type(4){
    width: 15%;
  }
  & > p:nth-of-type(5){
    width: 15%;
  }
`;

export const WriteBtn = styled.button`
  align-self:flex-end;
  margin-top: 20px;
  border-radius: 0;
  padding: 6px 20px;
  border: none;
  background-color: aqua;
  cursor: pointer;
`;
