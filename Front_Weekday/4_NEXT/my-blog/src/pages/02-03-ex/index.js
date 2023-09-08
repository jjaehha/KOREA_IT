import { useState } from "react";

const StateEx = ()=>{
    const [idMsg, setIdMsg] = useState('');

    const onIdChange = (e)=>{
        let id = e.target.value;
        if(id.length < 5){
            setIdMsg('아이디는 5글자 이상으로 설정해 주세요')
        }else{
            setIdMsg('올바른 입력입니다');
        }
    }

    // 이메일 양식이 맞지 않다면 올바르지 않은 이메일 형식입니다
    // 이메일 양식이 맞다면 사용 가능합니다

    // 비밀번호 양식이 맞지 않다면 올바드리 않은 비밀번호입니다
    // 비밀번호 양식이 맞다면 아무것도 보여주지 않기
    
    return(
        <>
            <h1>State 활용하기</h1>
            <div>아이디 :<input onChange={onIdChange}/></div>
            <p>{idMsg}</p>
            <div>이메일 :<input/></div>
            <p>{}</p>
            <div>비밀번호 :<input/></div>
            <p>{}</p>
        </>
    );
}

export default StateEx;