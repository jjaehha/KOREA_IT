import { Global, css } from "@emotion/react";

const style = css`
  @import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Do Hyeon', sans-serif;
  }

  input:focus { 
    outline: none !important; 
    border-color: aqua; 
  }
  textarea:focus { 
    outline: none !important; 
    border-color: aqua; 
  }
`;

const GlobalStyle = ()=>{

  return(<Global styles={style}></Global>);
}

export default GlobalStyle;