import { useState } from "react";

const CounterPage = ()=>{
    //let cnt = 0;
    // cnt는 state 변수로 사용이 된다 최초로는 0이라는 값이 대입되어있다
    // setCnt 는 setState함수로 사용이 되며 state변수인 cnt 속의 값을 설정하고, 리렌더링
    // 시키는 함수이다
    const [ cnt , setCnt ] = useState( 0 );

    // 입력된 값 state변수 
    const [ txt, setTxt ] = useState('이자리에 입력한 값이 표시됩니다');
    

    const onMinusClick = ()=>{
        console.log('minus 버튼 클릭됨, 현재 cnt : ' , cnt);
        setCnt(cnt - 1);
        console.log('minus버튼 함수 종료됨 현재 cnt: ' , cnt);
    }

    const onPlusClick = ()=>{
        setCnt(cnt + 1);
    }

    const onInputChange = (e)=>{
        console.log('input변화발생!');
        console.log(e);
        setTxt(e.target.value);
    }
    return(
        <>
            <h1>카운터 페이지</h1>
            <h2>{cnt}</h2>
            <button onClick = {onMinusClick}>-</button>
            <button onClick = {onPlusClick}>+</button>
            <input onChange={onInputChange}/>
            <p>{txt}</p>
        </>
    );
}

export default CounterPage;