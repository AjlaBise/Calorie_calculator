import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';


function MyApp({ Component, pageProps }) {
  return(
  <div>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </div>
  )
}

export default MyApp;
