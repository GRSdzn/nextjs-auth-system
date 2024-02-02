import ResetPasswordPageComponent from '@/components/pages/ResetPasswordPage';
import Head from 'next/head';

const ResetPassword = () => {
  return (
    <>
      <Head>
        <title>Восстановление пароля</title>
        <meta name="description" content="Страница для восстановления пароля" />
      </Head>
      <main>
        <ResetPasswordPageComponent />
      </main>
    </>
  );
};

export default ResetPassword;
