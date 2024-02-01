import { usePathname, useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useLogoutMutation } from '@/redux/features/authApiSlice';
import { logout as setLogout } from '@/redux/features/authSlice';
import { NavLink } from '@/components/utills';

export default function Header() {
  const dispatch = useAppDispatch();

  const [logout] = useLogoutMutation();

  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    logout(undefined)
      .unwrap()
      .then(() => {
        dispatch(setLogout());
      });
  };

  const authLinks = (
    <>
      <button onClick={handleLogout}>Logout</button>
    </>
  );

  const guestLinks = (
    <>
      <NavLink href="/auth/login">LogIn</NavLink>
      <NavLink href="/auth/register">Register</NavLink>
    </>
  );
  return (
    <header className="links w-full px-10 flex gap-10 p-4 bg-slate-300">
      <NavLink href="/">Main</NavLink>
      {isAuthenticated ? authLinks : guestLinks}
    </header>
  );
}
