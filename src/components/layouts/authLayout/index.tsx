import React from 'react';
import Image from 'next/image';
import fox from '@/assets/authimg/fox_bg.jpg';

type Props = {
  children: React.ReactNode;
  isRegister: boolean;
  setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthLayout = ({ children, isRegister, setIsRegister }: Props) => {
  return (
    <section className="flex px-10 flex-wrap flex-col w-full content-center justify-center py-10 min-h-[90dvh]">
      <div className="flex sm:flex-col-reverse shadow-md">
        <div className="flex flex-wrap content-center p-24 sm:p-6 h-[600px] justify-center rounded-l-md bg-white">
          <div className="w-72 ">
            <h1 className="text-xl font-semibold">{isRegister ? 'Регистрация' : 'Войти'}</h1>
            <p className="text-gray-400 text-sm">Для продолжения необходимо заполнить поля!</p>
            {children}
          </div>
        </div>
        <div className="flex flex-wrap content-center justify-center rounded-r-md">
          <Image rel="preload" alt="fox" placeholder="blur" className="h-full w-full object-center max-w-xl object-cover rounded-r-md" src={fox} />
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
