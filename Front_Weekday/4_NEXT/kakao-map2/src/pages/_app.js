import GlobalStyle from "@/styles/global.styles";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>카카오맵</title>
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}
