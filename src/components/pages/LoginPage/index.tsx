import { LoginForm, RegisterForm } from '@/components/forms';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import fox from '@/assets/authImg/fox_bg.jpg';

export default function LoginPageComponent() {
  return (
    <div className="flex flex-wrap w-full content-center justify-center py-10 px-10">
      <div className="shadow-md grid grid-cols-2 sm:grid-cols-1">
        <div className="flex flex-col flex-wrap content-center max-w-xl  p-24 justify-center rounded-l-md bg-white">
          <h1 className="text-xl font-semibold">Авторизация</h1>
          <p className="text-gray-400 text-sm mb-3">Для продолжения необходимо заполнить поля!</p>

          <LoginForm />
          <div className="flex gap-5 text-xs text-main mt-3 ">
            <Link href="auth/reset_password" className="underline font-semibold">
              Забыли пароль?
            </Link>
            <p className="text-gray-700">или</p>
            <Link href="/auth/register" className="underline font-semibold">
              Еще нет аккаунта ?
            </Link>
          </div>
        </div>
        <Image priority placeholder="blur" src={fox} className="h-full w-full object-center max-w-xl object-cover rounded-r-md" alt="right grid block image" />
      </div>
    </div>
  );
}
