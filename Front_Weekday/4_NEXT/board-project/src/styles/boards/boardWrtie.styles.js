import styled from "@emotion/styled"



// 게시글 등록 페이지
export const BoardMain= styled.main`
  display: flex;
  justify-content: center;
  align-items: stretch;

  max-width: 1200px;
  margin: 0 auto;

`;
export const BoardWriteWrap = styled.div`
  margin: 100px 20px;
  flex-basis: 1200px;
  
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding: 60px 100px 100px;

`;
export const BoardWriteTitle= styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 36px;
  margin-bottom: 80px;
`;
export const BoardWriteInputFlexContainer= styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
`;
export const BoardWriteInputWrap= styled.div`
  flex-basis: 100%;
  margin-bottom: 30px;
  ${
    (props)=>
      ((props.id==='writer-input' || props.id==='pw-input') && 
      {flexGrow:1, flexBasis:0})
  }

`;
export const BoardWriteInputLabel= styled.label`
  font-size: 16px;
  margin-bottom: 16px;
`;
export const RequiredMark = styled.p`
  color: #61dafb;
  display: inline;
`;
export const BoardWriteInput= styled.input`
  padding: 10px;
  height: 52px;
  width: 100%;
  outline: none;
  border: 1px solid #e9e9e9;
  margin-bottom: 10px;

  ${(props)=>props.type==='radio' && {width:'10px', height:'10px', marginLeft:'10px'}}

  ${(props)=>props.id==='zip-input' && {width:'80px', color:"gray"}}

 `;

export const BoardWriteContentInput= styled.textarea`
  resize: none;
  width: 100%;
  height: 480px;
  outline: none;
  border: 1px solid #e9e9e9;
  padding: 10px;
`;
export const ZipBtn= styled.button`
  display: inline-block;
  height: 52px;
  background-color: black;
  color: white;
  padding: 10px;
  margin-left: 10px;
`;
export const BoardWriteRadioWrap= styled.div``;


export const PostBtn= styled.button`
  background-color: #61dafb;
  border: none;
  padding: 14px 60px;
  margin: 0 auto;
  display: block;
  cursor: pointer;
`;

//err msg 추가
export const ErrMsg = styled.p`
  font-size: 10px;
  color: red;
`;


//footer 영역