import { ResetPasswordConfirmPageComponent } from '@/components/pages/';
import Head from 'next/head';
import { useParams } from 'next/navigation';

const ResetPasswordConfirm = () => {
  const params = useParams();

  if (!params) {
    return <div>Loading...</div>; // or any other handling for null params
  }

  const { uid, token } = params;
  console.log(params);

  return (
    <>
      <Head>
        <title>Создание нового пароля</title>
        <meta name="description" content="Страница для восстановления и создания нового пароля" />
      </Head>
      <main>
        <ResetPasswordConfirmPageComponent uid={uid as string} token={token as string} />
        {/* <ResetPasswordConfirmForm uid={uid} token={token} /> */}
      </main>
    </>
  );
};

export default ResetPasswordConfirm;
