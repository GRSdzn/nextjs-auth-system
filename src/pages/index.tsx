import { HomePageComponent } from '@/components/pages';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Главная страница</title>
        <meta name="description" content="Главная страница сайта" />
        <meta name="keywords" content="Сайт для изучения авторизации" />
        {/* <meta property="og:url" content="https://ya.ru" />
        <meta property="og:title" content="Это open graph Заголовок" />
        <meta property="og:image:alt" content="About Acme" />
        <meta property="og:description" content="Это open graph Описание" />
        <meta property="og:image" content="https://ir.ozone.ru/s3/multimedia-2/wc1000/6637771802.jpg" /> */}
        {/* <meta name="robots" content="follow" /> */}
        {/* <meta name="robots" content="nofollow" /> */}
        {/* <meta name="robots" content="noindex" /> */}
        <meta name="robots" content="all" />
      </Head>
      <main>
        <HomePageComponent />
      </main>
    </>
  );
}
