import HomePage from '@/components/pages/Home';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Главная страница</title>
        <meta name="description" content="Главная страница сайта" />
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  );
}
