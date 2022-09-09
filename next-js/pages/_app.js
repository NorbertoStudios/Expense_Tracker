import "../styles/globals.css";
import Nav from "../components/Nav";
import Head from "next/head";


function MyApp({ Component, pageProps }) {
  return (
    <div className="flex bg-gray-900">
      <Head>
        <title>Expense Tracker</title>
        <meta name="description" content="Norberto Studios" />
        <link rel="icon" href="/NS_fox_logo.svg" />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
