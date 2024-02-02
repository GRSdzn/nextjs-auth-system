import DashBoardPageComponent from '@/components/pages/DashboardPage';
import Head from 'next/head';

const DashBoard = () => {
  return (
    <>
      <Head>
        <title>Профиль пользователя</title>
        <meta name="description" content="Страница с личными данными пользователя" />
      </Head>
      <main>
        <DashBoardPageComponent />
      </main>
    </>
  );
};

export default DashBoard;
