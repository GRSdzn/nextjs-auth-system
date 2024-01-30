import { useFilmQuery } from '@/redux/features/ItemsApiSlice';

export default function HomePage() {
  const { data: books, isFetching, isError } = useFilmQuery();
  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching books</div>;
  }
  return (
    <main className="flex min-h-[90dvh] flex-col items-center justify-between p-24 ">
      <h1 className="flex w-full justify-center font-bold text-2xl text-main">Home Page</h1>
      <div className="flex flex-col text-center w-full">
        <h3 className="font-bold text-main">Stack</h3>
        {books?.map((film, idx) => (
          <div key={idx}>
            <h2>{film.title}</h2>
          </div>
        ))}
        <p className="font-light text-second py-8">Redux Toolkit, RTK Query, Axios, Next JS, TypeScript</p>
      </div>
    </main>
  );
}
