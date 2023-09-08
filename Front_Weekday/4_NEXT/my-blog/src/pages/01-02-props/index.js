// PropsPage 컴포넌트 안에서 MyComponent 가 사용되고있다
// PropsPage 컴포넌트는 부모컴포넌트, MyComponent 는 자식컴포넌트라고 한다

const MyComponent = (props)=>{

    console.log(typeof props.nums);
    return(
    <>
        <h2>{props.title}</h2>
        <p>{props.detail}</p>
        <p>{props.a}</p>
    </>
    );
}

const PropsPage = ()=>{
    return(
        <>
            <h1>PropsPage</h1>
            <p>propsPage p태그1</p>
            <MyComponent 
                title="안녕1" 
                detail="반가워1"
                nums = {10}
            >
            </MyComponent>
            <p>propsPage p태그2</p>
            <MyComponent 
                title="두번째!"
                detail="두번째 p태그"
            ></MyComponent> 
        </>
    );
}

export default PropsPage;