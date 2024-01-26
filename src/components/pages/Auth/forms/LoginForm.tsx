/* <!-- Login component --> */
import Link from 'next/link';

type Props = {};

const LoginForm = (props: Props) => {
  return (
    // <!-- Container -->
    <div className="flex flex-wrap w-full content-center justify-center ">
      {/* <!-- Login component --> */}
      <div>
        {/* <!-- Login form --> */}
        <div className="flex flex-wrap content-center  justify-center">
          <div className="w-72">
            <form className="mt-4">
              <div className="mb-3">
                <label htmlFor="email" className="mb-2 block text-xs font-semibold">
                  Почта
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Введите вашу почту"
                  className="block w-full rounded-md border border-gray-300 focus:border-main focus:outline-none focus:ring-1 focus:ring-main py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="mb-2 block text-xs font-semibold">
                  Пароль
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="*****"
                  className="block w-full rounded-md border border-gray-300 focus:border-main focus:outline-none focus:ring-1 focus:ring-main py-1 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3 flex flex-wrap content-center">
                <input id="remember" type="checkbox" className="mr-1 checked:bg-main" />
                {/* <label  className="mr-auto text-xs font-semibold">Принять лицензионное соглашение</label> */}

                <Link href="#" className="text-xs font-semibold text-main">
                  Забыли пароль?
                </Link>
              </div>
            </form>
            <button className="block w-full text-center text-white bg-main hover:bg-mainLight duration-200 px-2 py-1.5 rounded-md">Войти</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
