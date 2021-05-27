import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import withApollo from "../hoc/withApollo";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
     body{
      min-height:100vh;
       margin:0;
       padding:0;
       box-sizing:border-box;
       font-family:'Kaushan Script'
     }
`;

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default withApollo(MyApp);
