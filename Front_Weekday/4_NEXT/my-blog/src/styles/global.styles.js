import { css, Global } from "@emotion/react";

// const MyDiv = styled.div``;
// common.css 라고 생각
export const MyGlobalStyle = css`

    @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200;300;400;500;600;700;900&display=swap');


    body {
        padding: 0;
        margin: 0;
    }

    *{
        box-sizing: border-box;
        font-family: 'Noto Serif KR', serif;
    }
`;

const GlobalStyle = ()=>{
    return (<Global styles={MyGlobalStyle}></Global>);
}

export default GlobalStyle;