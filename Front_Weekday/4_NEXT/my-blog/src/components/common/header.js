import { HeaderWrap } from "@/styles/common/header.styles";

// 헤더로 사용할 컴포넌트 만들기
const Header = ()=>{
    return(
        <HeaderWrap>
            <p>About</p>
            <p>Login</p>
            <p>Join</p>
        </HeaderWrap>
    );
}

export default Header;