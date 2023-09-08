import { useState } from "react";

const StatePage = ()=>{
    let [cnt , setCnt] = useState(0);// [ 스테이트변수, 스테이트변수설정함수]
    
    const onPlusClick = ()=>{
        setCnt( cnt + 1 );
    }
    return(
        <>
            <h1>스테이트 페이지</h1>
            <h2>{cnt}</h2>
            <button>-</button>
            <button onClick={onPlusClick}>+</button>
        </>
    );
}

export default StatePage;