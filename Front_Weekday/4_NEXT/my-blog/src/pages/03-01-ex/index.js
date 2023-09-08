import { useState } from "react";

const StateEx = ()=>{
    const [idMsg, setIdMsg] = useState('');
    const [emailMsg, setEmailMsg] = useState('');
    const [pwMsg, setPwMsg] = useState('');

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
    const onEmailChange = (e)=>{
        const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if(emailRegExp.test(e.target.value)){
            setEmailMsg('사용 가능합니다');
        }else{
            setEmailMsg('올바르지 않은 이메일 형식입니다');
        }

        
    }

    // 비밀번호 양식이 맞지 않다면 올바드리 않은 비밀번호입니다
    // 비밀번호 양식이 맞다면 아무것도 보여주지 않기
    const onPwChange = (e)=>{
        const pwRegExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

        if(pwRegExp.test(e.target.value)){
            setPwMsg('');
        }else{
            setPwMsg('올바르지 않은 비밀번호입니다. 문자 특수문자 숫자 포함하여 8~15자리')
        }
    }
    
    return(
        <>
            <h1>State 활용하기</h1>
            <div>아이디 :<input onChange={onIdChange}/></div>
            <p>{idMsg}</p>
            <div>이메일 :<input onChange={onEmailChange}/></div>
            <p>{emailMsg}</p>
            <div>비밀번호 :<input onChange={onPwChange}/></div>
            <p>{pwMsg}</p>
        </>
    );
}

export default StateEx;