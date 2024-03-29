export default function HomePage() {
  return (
    <main className="flex min-h-[90dvh] flex-col items-center justify-between p-24 ">
      <h1 className="flex w-full justify-center font-bold text-2xl text-main">Home Page</h1>
      <div className="flex flex-col text-center w-full">
        <h3 className="font-bold text-main">Stack</h3>
        <p className="font-light text-second">Redux Toolkit, RTK Query, Axios, Next JS, TypeScript</p>
      </div>
    </main>
  );
}
