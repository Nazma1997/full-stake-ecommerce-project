import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shop</title>
        <meta name="description" content="E commerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

       
    </div>
  )
}
