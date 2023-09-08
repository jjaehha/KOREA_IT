const MapPage = ()=>{
    let ar = ['안녕', '2번글', '3번글 제목', '4번 글입니다'];

    return(
        <>
            <h1>Map 페이지</h1>
            {ar.map((a)=>{return <p>{a}</p>})}
        </>
    );
}

export default MapPage;