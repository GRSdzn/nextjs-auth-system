export default function Spinner() {
  return (
    <>
      <div className="text-xl animate-spin font-bold">&</div>
      <span className="sr-only">Loading ...</span>
    </>
  );
}
