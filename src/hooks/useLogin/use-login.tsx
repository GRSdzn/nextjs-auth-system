/* <!-- Register component --> */
import { useLoginMutation } from '@/redux/features/authApiSlice';
import { useRouter } from 'next/router';
import React, { ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';

export default function useLogin() {
  const [login, { isLoading }] = useLoginMutation();
  const router = useRouter();

  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // name - ключ и value - значения ключа форм даты
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    login({ email, password })
      .unwrap()
      .then(() => {
        toast.success('Вход выполнен успешно');
        router.push('/dashboard');
      })
      .catch(() => {
        toast.error('Ошибка при попытке войти в аккаунт');
      });
  };

  return {
    email,
    password,
    isLoading,
    onChange,
    onSubmit,
  };
}
