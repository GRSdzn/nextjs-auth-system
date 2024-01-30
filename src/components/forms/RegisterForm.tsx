import { useRegister } from '@/hooks';
import { Form } from '@/components/forms';

export default function RegisterForm() {
  const { isLoading, onSubmit, onChange, first_name, last_name, email, password, re_password } = useRegister();
  const config = [
    {
      labelText: 'Ваша фамилия',
      labelId: 'first_name',
      type: 'text',
      value: first_name,
      required: true,
      placeholder: 'Введите фамилию',
    },
    {
      labelText: 'Ваше имя',
      labelId: 'last_name',
      type: 'text',
      value: last_name,
      required: true,
      placeholder: 'Введите имя',
    },
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
      required: true,
      placeholder: '********',
    },
    {
      labelText: 'Подтвердите пароль',
      labelId: 're_password',
      type: 'password',
      value: re_password,
      required: true,
      placeholder: '********',
    },
  ];
  return <Form config={config} isLoading={isLoading} btnText="Зарегистрироваться" onSubmit={onSubmit} onChange={onChange} />;
}
