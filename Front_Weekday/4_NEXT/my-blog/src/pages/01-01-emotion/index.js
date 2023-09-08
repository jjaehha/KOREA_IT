import styled from "@emotion/styled";

const EmotionPage = ()=>{
    // let myH1Style = {
    //     color:'red', 
    //     border : '1px solid black',
    //     textAlign:'center' 
    // };
    
    return(
        <>
            <h1 
                style={{
                    color:'red', 
                    border:'1px solid black', 
                    textAlign:'center'
                }}
            >
                css in js 심화
            </h1>
            <MyDiv>1</MyDiv>
            <MyDiv>2</MyDiv>
            <MyDiv>3</MyDiv>
            <MyWrap>
                <p>첫번째 내용</p>
                <p>두번째 내용</p>
                <p>세번째 내용</p>
            </MyWrap>
            <MediaWrap></MediaWrap>
        </>
    );
}

export default EmotionPage;

// 나중에 style만 따로 파일로 분리
const MyDiv = styled.div`
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    border: 1px solid black;

    &:nth-of-type(2){
        color: red;
    }
`;

const MyWrap = styled.div`
    background-color: #e9e9e9;

    & > p{
        font-size: 20px;
        color: blue;
    }
`;

const MediaWrap = styled.div`
    height: 200px;
    width: 200px;
    background-color: red;

    @media screen and (min-width:700px){
        background-color: blue;
    }
`;