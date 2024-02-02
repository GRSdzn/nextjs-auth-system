import { Form } from '@/components/forms';
import { useResetPassword } from '@/hooks';

export default function ResetPasswordForm() {
  const { email, isLoading, onSubmit, onChange } = useResetPassword();
  const config = [
    {
      labelText: 'Адрес электронной почты',
      labelId: 'email',
      type: 'email',
      value: email,
      required: true,
      placeholder: 'Введите почту',
    },
  ];
  return <Form config={config} isLoading={isLoading} btnText="Отправить" onSubmit={onSubmit} onChange={onChange} />;
}
