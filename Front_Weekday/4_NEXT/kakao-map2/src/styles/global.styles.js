import { css, Global } from "@emotion/react";

const Style = css`
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Noto Sans KR", sans-serif;
    }
`;

const GlobalStyle = () => {
    return <Global styles={Style}></Global>;
};

export default GlobalStyle;
