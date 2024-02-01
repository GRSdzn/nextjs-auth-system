import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useLogoutMutation } from '@/redux/features/authApiSlice';
import { logout as setLogout } from '@/redux/features/authSlice';
import { NavLink } from '@/components/utills';
import { memo } from 'react';

export const Header = memo(() => {
  const dispatch = useAppDispatch();

  const [logout] = useLogoutMutation();

  // const { isAuthenticated } = useAppSelector((state) => state.auth);
  const { isAuthenticated } = useAppSelector(({ auth }) => auth); // деструктуризация
  const handleLogout = () => {
    logout(undefined)
      .unwrap()
      .then(() => {
        dispatch(setLogout());
      });
  };

  const authLinks = [
    <NavLink key="dashboard" href="/dashboard">
      Dashboard
    </NavLink>,
    <button className="text-red-500 font-semibold" onClick={handleLogout}>
      Logout
    </button>,
  ];

  const guestLinks = [
    <NavLink key="login" href="/auth/login">
      LogIn
    </NavLink>,
    <NavLink key="register" href="/auth/register">
      Register
    </NavLink>,
  ];
  return (
    <header className="links w-full px-10 flex gap-10 p-4 bg-slate-300">
      <NavLink href="/">Main</NavLink>
      {isAuthenticated ? authLinks : guestLinks}
    </header>
  );
});
