import Head from 'next/head'
import Image from 'next/image'
import App from '../components/App';
import Nav from '../components/Nav';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Expense Tracker</title>
        <meta name="description" content="Norberto Studios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <App/>
      </main>

      <footer></footer>
    </div>
  );
}
