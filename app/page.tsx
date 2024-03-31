export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-72">
      <div className="text-lg uppercase flex shadow-lg shadow-stone-900 justify-center items-center">
        andré luis de oliveira andrade
      </div>
      <div className="flex justify-between w-72">
        <a className="cursor-pointer hover:underline">github</a>
        <a className="cursor-pointer hover:underline">twitter</a>
        <a className="cursor-pointer hover:underline">linkedin</a>
      </div>
    </main>
  );
}
