import Image from 'next/image';
import React from 'react';
import fox from '@/assets/authImg/fox_bg.jpg';
import { PasswordResetForm } from '@/components/forms';

const ResetPasswordPageComponent = () => {
  return (
    <div className="flex flex-wrap w-full content-center justify-center py-10 px-10">
      <div className="shadow-md grid grid-cols-2 sm:grid-cols-1">
        <div className="flex flex-col flex-wrap content-center max-w-xl  p-24 justify-center rounded-l-md bg-white">
          <h1 className="text-xl font-semibold">Восстановление пароля</h1>
          <p className="text-gray-400 text-sm mb-3">Для продолжения необходимо заполнить поля!</p>

          <PasswordResetForm />
          {/* <div className="flex gap-5 text-xs text-main mt-3 ">
            
          </div> */}
        </div>
        <Image priority placeholder="blur" src={fox} className="h-full w-full object-center max-w-xl object-cover rounded-r-md" alt="right grid block image" />
      </div>
    </div>
  );
};

export default ResetPasswordPageComponent;
