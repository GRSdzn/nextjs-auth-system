import { HomePageComponent } from '@/components/pages';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Главная страница</title>
        <meta name="description" content="Главная страница сайта" />
      </Head>
      <main>
        <HomePageComponent />
      </main>
    </>
  );
}
