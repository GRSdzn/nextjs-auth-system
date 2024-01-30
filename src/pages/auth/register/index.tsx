import { RegisterPageComponent } from '@/components/pages';
import Head from 'next/head';

const Register = () => {
  return (
    <>
      <Head>
        <title>Страница регистрации</title>
        <meta name="description" content="Страница создания аккаунта. Форма регистрации." />
      </Head>
      <main>
        <RegisterPageComponent />
      </main>
    </>
  );
};

export default Register;
