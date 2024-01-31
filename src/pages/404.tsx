'use client';
import Link from 'next/link';
import mouse from '@/assets/authImg/mouse_bg.jpg';
import Image from 'next/image';
import Head from 'next/head';

const Error = () => {
  return (
    <>
      <Head>
        <title>Страница не найдена</title>
        {/* <meta http-equiv="refresh" content="3;url=http://www.localhost:3000/" /> */}
        <meta name="description" content="Данная страница не найдена. Код ошибки 404" />
      </Head>
      <main>
        <div className="min-h-[94dvh] grid grid-cols-2 md:grid-cols-none px-40 md:px-4 grid-flow-row items-center">
          <div className="md:hidden">
            <Image priority src={mouse} width={700} height={200} placeholder="blur" alt="404 error" className=" rounded-md" />
          </div>

          <div className="w-full p-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Ошибка</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">Упс! Страница на которую вы перешли не была найдена :(</p>
            <Link href="/">
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg inline-block hover:bg-blue-600 transition duration-300 ease-in-out">Вернуться на главную</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Error;
