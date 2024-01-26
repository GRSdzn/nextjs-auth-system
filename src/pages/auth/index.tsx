import AuthPage from '@/components/pages/Auth';
import Head from 'next/head';

const Login = () => {
  return (
    <>
      <Head>
        <title>Авторизация</title>
        <meta name="description" content="Вход или регистрация пользователя" />
      </Head>
      <main>
        <AuthPage />
      </main>
    </>
  );
};

export default Login;
