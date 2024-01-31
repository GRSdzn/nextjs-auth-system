import { Form } from '@/components/forms';
import { useLogin } from '@/hooks';

export default function LoginForm() {
  const { email, password, isLoading, onSubmit, onChange } = useLogin();
  const config = [
    {
      labelText: 'Адрес электронной почты',
      labelId: 'email',
      type: 'email',
      value: email,
      required: true,
      placeholder: 'Введите почту',
    },
    {
      labelText: 'Придумайте пароль',
      labelId: 'password',
      type: 'password',
      value: password,
      link: {
        linkTitle: 'Забыли пароль?',
        linkUrl: '/password-reset',
      },
      required: true,
      placeholder: '********',
    },
  ];
  return <Form config={config} isLoading={isLoading} btnText="Войти" onSubmit={onSubmit} onChange={onChange} />;
}
