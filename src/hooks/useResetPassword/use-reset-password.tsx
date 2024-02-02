import { useResetPasswordMutation } from '@/redux/features/authApiSlice';
import { useState, ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';

export default function useResetPassword() {
  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const [email, setEmail] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    resetPassword(email)
      .unwrap()
      .then(() => {
        toast.success('Для смены пароля проверьте свою почту');
      })
      .catch(() => {
        toast.error('Ошибка при попытке сменить пароль');
      });
  };

  return {
    email,
    isLoading,
    onChange,
    onSubmit,
  };
}
