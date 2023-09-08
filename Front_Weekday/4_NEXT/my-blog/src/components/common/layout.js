import Footer from "./footer";
import Header from "./header";

const Layout = (props)=>{
    // props.children key 존재
    return(
        <>
            <Header/>
            <main>{props.children}</main>
            <Footer/>
        </>
    );
}

export default Layout;