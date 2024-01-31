import { LoginPageComponent } from '@/components/pages';
import Head from 'next/head';

const Login = () => {
  return (
    <>
      <Head>
        <title>Страница авторизации</title>
        <meta name="description" content="Страница для авторизации аккаунта пользователя" />
      </Head>
      <main>
        <LoginPageComponent />
      </main>
    </>
  );
};

export default Login;
