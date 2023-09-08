import styled from "@emotion/styled";

const EmotionPropsPage = ()=>{
    return(
        <>
            <h1>EmotionPropsPage</h1>
            <MyBtn isLogin={true}>로그인버튼!</MyBtn>
            <MyBtn isLogin={false}>회원가입 버튼!</MyBtn>
            <MyP msgType='plain'>메시지 입니다!</MyP>
            <MyP msgType='err'>오류가 발생했어요!</MyP>
            <MyP msgType='detail'>오류가 발생했어요!</MyP>
            <MyP msgType='ddd'>오류가 발생했어요!</MyP>
            <MyP msgType='aaa'>오류가 발생했어요!</MyP>
            <MyP msgType='ccc'>오류가 발생했어요!</MyP>

        </>
    );
}

export default EmotionPropsPage;

const MyP = styled.p`
    text-align: center;
    border: 1px solid black;

    color: ${ props=>props.msgType === 'err' && 'red' };

    padding: ${ props=>props.msgType === 'err' || '30px' };
`;

const MyBtn = styled.button`
    padding: 10px;
    color: red;

    background-color: ${props => props.isLogin ? 'white' : 'aquamarine'};
    
`;

const LoginBtn = styled.button`
    padding: 10px;
    background-color: white;
    color: red;
`;

const JoinBtn = styled.button`
    padding: 10px;
    background-color: aquamarine;
    color: red;
`;