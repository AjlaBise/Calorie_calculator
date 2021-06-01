import Header from "../components/shared/Header/header";
import Footer from "../components/shared/Footer/footer";
import '../styles/globalStyles.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
