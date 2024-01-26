import AuthLayout from '@/components/layouts/authLayout';
import { useState } from 'react';
import RegisterForm from '@/components/pages/Auth/forms/RegisterForms';
import LoginForm from '@/components/pages/Auth/forms/LoginForm';

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <AuthLayout isRegister={isRegister} setIsRegister={setIsRegister}>
      {isRegister ? <RegisterForm /> : <LoginForm />}
      <button className="text-center text-xs font-semibold text-main" onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? 'Уже есть аккаунт? Войти' : 'Зарегистрироваться'}
      </button>
    </AuthLayout>
  );
};

export default AuthPage;
