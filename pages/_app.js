import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
});
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <div>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default MyApp;
