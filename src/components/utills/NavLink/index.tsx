import Link from 'next/link';

interface Props {
  isSelected?: boolean;
  isMobile?: boolean;
  isBanner?: boolean;
  href: string;
  children?: React.ReactNode;
  [rest: string]: any;
}

export default function NavLink({ isSelected, isMobile, isBanner, href, children, ...rest }: Props) {
  return (
    <Link href={href} className="">
      {children}
    </Link>
  );
}
