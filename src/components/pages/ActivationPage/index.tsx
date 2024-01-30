import { useEffect } from 'react';
import { useActivationMutation } from '@/redux/features/authApiSlice';
import { toast } from 'react-toastify';
import { useParams, useRouter } from 'next/navigation';

interface Props {
  params: {
    uid: string;
    token: string;
  };
}

const ActivationPageComponent = () => {
  const router = useRouter();
  const [activation] = useActivationMutation();
  const { uid, token } = useParams() ?? {};

  useEffect(() => {
    const activateAccount = async () => {
      if (uid && token) {
        try {
          await activation({ uid, token }).unwrap();
          toast.success('Аккаунт успешно активирован');
        } catch (error) {
          toast.error('Ошибка при активации аккаунта');
        } finally {
          setTimeout(() => {
            router.push('/auth/login');
          }, 2500);
        }
      }
    };

    activateAccount();
  }, [activation, uid, token]);

  return <div className="text-center">Страница активации аккаунта ...</div>;
};

export default ActivationPageComponent;
