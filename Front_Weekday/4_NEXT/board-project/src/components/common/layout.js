import MyFooter from "./footer";
import Header from "./header";

const Layout = (props)=>{
  return(
    <>
      <Header/>
      <main>{props.children}</main>
      <MyFooter/>
    </>
  );
}

export default Layout;