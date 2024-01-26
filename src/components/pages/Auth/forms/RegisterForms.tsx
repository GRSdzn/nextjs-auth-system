/* <!-- Register component --> */
import { Spinner } from '@/components/ui';
import { useRegisterMutation } from '@/redux/features/authApiSlice';
import Link from 'next/link';
import React, { ChangeEvent, FormEvent } from 'react';
import { toast } from 'react-toastify';

type Props = {};

const RegisterForm = (props: Props) => {
  const [register, { isLoading }] = useRegisterMutation();

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
        toast.success('Please check email to verify account');
      })
      .catch(() => {
        toast.error('Failed to register account');
      });
  };
  return (
    // <!-- Container -->
    <div className="flex flex-wrap w-full content-center justify-center ">
      <div>
        {/* <!-- Login form --> */}
        <div className="flex flex-wrap content-center  justify-center">
          <div className="w-72">
            <form className="mt-4" onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="first_name" className="mb-2 block text-xs font-semibold">
                  Ваше имя
                </label>
                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  value={first_name}
                  onChange={onChange}
                  placeholder="Введите ваше имя"
                  required
                  className="block w-full rounded-md border border-gray-300 focus:border-main focus:outline-none focus:ring-1 focus:ring-main py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="last_name" className="mb-2 block text-xs font-semibold">
                  Вашу фамилию
                </label>
                <input
                  value={last_name}
                  onChange={onChange}
                  id="last_name"
                  type="text"
                  name="last_name"
                  placeholder="Введите вашу фамилию"
                  required
                  className="block w-full rounded-md border border-gray-300 focus:border-main focus:outline-none focus:ring-1 focus:ring-main py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="mb-2 block text-xs font-semibold">
                  Почта
                </label>
                <input
                  value={email}
                  onChange={onChange}
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Введите вашу почту"
                  required
                  className="block w-full rounded-md border border-gray-300 focus:border-main focus:outline-none focus:ring-1 focus:ring-main py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="mb-2 block text-xs font-semibold">
                  Пароль
                </label>
                <input
                  value={password}
                  onChange={onChange}
                  id="password"
                  type="password"
                  name="password"
                  placeholder="*****"
                  required
                  className="block w-full rounded-md border border-gray-300 focus:border-main focus:outline-none focus:ring-1 focus:ring-main py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="re_password" className="mb-2 block text-xs font-semibold">
                  Повторите пароль
                </label>
                <input
                  value={re_password}
                  onChange={onChange}
                  id="re_password"
                  type="password"
                  name="re_password"
                  placeholder="*****"
                  required
                  className="block w-full rounded-md border border-gray-300 focus:border-main focus:outline-none focus:ring-1 focus:ring-main py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3 flex flex-wrap content-center">
                <input id="remember" required type="checkbox" className="mr-1 mb-2 checked:bg-main" />
                <label className="mr-auto text-xs font-semibold mb-2">Принять лицензионное соглашение</label>
                <Link href="#" className="text-xs font-semibold text-main">
                  Забыли пароль?
                </Link>
              </div>
              <button className="block w-full text-center text-white bg-main hover:bg-mainLight duration-200 px-2 py-1.5 rounded-md">{isLoading ? <Spinner /> : 'Зарегистрироваться'}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
