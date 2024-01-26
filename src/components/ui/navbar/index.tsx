import Link from 'next/link';
import { links } from '../../mockdata/links';

const DataLink = () => {
  return links.map((item) => {
    return (
      <Link href={item.url} key={item.id}>
        {item.title}
      </Link>
    );
  });
};

export default function Header() {
  return (
    <header className="links w-full px-10 flex gap-10 p-4">
      <DataLink />
    </header>
  );
}
