import { ActivationPageComponent } from '@/components/pages';
import Head from 'next/head';

const Activation = () => {

  return (
    <>
      <Head>
        <title>Активация аккаунта</title>
        <meta name="description" content="Страница активации аккаунта" />
      </Head>
      <main>
        <ActivationPageComponent />;
      </main>
    </>
  );
};

export default Activation;
