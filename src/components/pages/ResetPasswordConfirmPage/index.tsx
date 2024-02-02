import ResetPasswordConfirmForm from '@/components/forms/ResetPasswordConfirmForm';
import Image from 'next/image';
import fox from '@/assets/authImg/fox_bg.jpg';
interface Props {
  uid: string;
  token: string;
}

export default function ResetPasswordConfirmPageComponent({ uid, token }: Props) {
  return (
    <div className="flex flex-wrap w-full content-center justify-center py-10 px-10">
      <div className="shadow-md grid grid-cols-2 sm:grid-cols-1">
        <div className="flex flex-col flex-wrap content-center max-w-xl  p-24 justify-center rounded-l-md bg-white">
          <h1 className="text-xl font-semibold">Восстановление пароля</h1>
          <p className="text-gray-400 text-sm mb-3">Для продолжения необходимо заполнить поля!</p>

          <ResetPasswordConfirmForm uid={uid} token={token} />
          {/* <div className="flex gap-5 text-xs text-main mt-3 ">
            
          </div> */}
        </div>
        <Image priority placeholder="blur" src={fox} className="h-full w-full object-center max-w-xl object-cover rounded-r-md" alt="right grid block image" />
      </div>
    </div>
  );
}
