/* <!-- Register component --> */
import { Spinner } from '@/components/ui';
import { useRegisterMutation } from '@/redux/features/authApiSlice';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';

export default function useRegister() {
  const [register, { isLoading }] = useRegisterMutation();
  const router = useRouter();

  const [formData, setFormData] = React.useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    re_password: '',
  });

  const { first_name, last_name, email, password, re_password } = formData;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // name - ключ и value - значения ключа форм даты
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    register({ first_name, last_name, email, password, re_password })
      .unwrap()
      .then(() => {
        toast.success('Проверьте вашу почту для активации аккаунта');
        router.push('/auth/login/');
      })
      .catch(() => {
        toast.error('Ошибка при регистрации');
      });
  };

  return {
    first_name,
    last_name,
    email,
    password,
    re_password,
    isLoading,
    onChange,
    onSubmit,
  };
}
