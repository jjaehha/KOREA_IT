import { useRef, useState } from "react";

const EventPage = ()=>{
    const [firstValue, setFirstValue] = useState('배상엽');
    const [secondValue, setSecondValue] = useState('');

    let a = useRef(0);
    let thirdValue = useRef('');
    let fourthInput = useRef(null);

    const onFirstInputChange  = (e)=>{
        setFirstValue(e.target.value);
    }
    const firstBtnClick = ()=>{
        // console.log(firstValue);
        if(!firstValue){ // firstValue === ''
            alert('필수 입력 값입니다!');
            return;
        }
    }

    const onSecondInputChange = (e)=>{
        setSecondValue(e.target.value);
    }

    const secondBtnClick = ()=>{
        // console.log(secondValue);
        if(!secondValue){
            alert('두번째 input 비어있음!');
            return;
        }
    }

    const btn1Click = ()=>{
        a.current = a.current + 10;
    }

    const btn2Click = ()=>{
        console.log(a);
    }

    //-------3번input--------------
    const onThirdInputChange = (e)=>{
        thirdValue.current = e.target.value;
    }

    const thirdBtnClick = ()=>{
        if(!thirdValue.current){
            alert('3번 input이 비어있어요!');
            return;
        }
    }

    //-------3번input--------------
    //-------4번input--------------
    const fourthBtnClick = ()=>{
        // console.log(fourthInput);
        if(!fourthInput.current.value){
            alert('4번째 입력이 안되어 있음!');
            fourthInput.current.focus();
            return;
        }
    }

    //-------4번input--------------
    return (
        <>
            <h1>event Page</h1>
            <div>1번 input <input onChange={onFirstInputChange} value={firstValue}/></div>
            <button onClick={firstBtnClick}>1번 input에 입력값 확인!</button>

            <div>2번 input<input onChange={onSecondInputChange}/></div>
            <button onClick={secondBtnClick}>2번 input에 입력값 가져오기</button>

            <div>3번 input<input onChange={onThirdInputChange}/></div>
            <button onClick={thirdBtnClick}>3번 input에 입력값 가져오기</button>

            <div>4번 input<input ref={fourthInput}/></div>
            <button onClick={fourthBtnClick}>4번 input에 입력값 가져오기</button>

            <div>
                useRef Test
                <button onClick={btn1Click}>btn1</button>
                <button onClick={btn2Click}>btn2</button>
            </div>
        </>
    );
}

export default EventPage;