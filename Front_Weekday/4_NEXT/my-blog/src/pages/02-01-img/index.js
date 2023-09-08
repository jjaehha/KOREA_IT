import styled from "@emotion/styled";
import Image from "next/image";

const ImgPage = ()=>{
    return(
        <>
            <h1>이미지 가져오기</h1>
            <Image 
                src={'/puppy.jpg'} 
                width={200} 
                height={100}
                alt="강아지 이미지"
            />
            <MyDiv/>
        </>
    );
}

export default ImgPage;

// 가로세로 비율 망가지지 않도록 사용하는 방법
const MyDiv = styled.div`
    width: 200px;
    height: 100px;
    background-image: url(/puppy.jpg);
`;