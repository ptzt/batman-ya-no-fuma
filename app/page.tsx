import Time from './components/Time';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Bienvenidos</h1>
      </div>
      <div className="border-8 rounded-2xl border-black p-4">
        <Time />
      </div>
    </div>
  );
}
