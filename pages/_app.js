import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import withApollo from '../hoc/withApollo';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default withApollo(MyApp);
