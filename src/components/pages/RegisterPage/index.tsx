import { RegisterForm } from '@/components/forms';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import fox from '@/assets/authImg/fox_bg.jpg';

export default function RegisterPageComponent() {
  return (
    <div className="flex flex-wrap w-full content-center justify-center py-10 px-10">
      <div className="shadow-md grid grid-cols-2 sm:grid-cols-1">
        <div className="flex flex-col flex-wrap content-center max-w-xl  p-24 justify-center rounded-l-md bg-white">
          <h1 className="text-xl font-semibold">Регистрация</h1>
          <p className="text-gray-400 text-sm mb-3">Для продолжения необходимо заполнить поля!</p>

          <RegisterForm />
          <Link href="#" className="text-xs font-semibold text-main mt-3 underline">
            Забыли пароль?
          </Link>
        </div>
        <Image priority placeholder="blur" src={fox} className="h-full w-full object-center max-w-xl object-cover rounded-r-md" alt="fox" />
      </div>
    </div>
  );
}
