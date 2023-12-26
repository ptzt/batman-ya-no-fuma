import Time from './components/Time';
import ThemeChanger from './components/ThemeChanger';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 dark:bg-gray-800">
      <ThemeChanger />
      <div className="mb-8">
        <h1 className="text-lg lg:text-4xl font-bold dark:border-white dark:text-white">
          Tomas dejo de fumar 😬
        </h1>
      </div>
      <div className="border-8 rounded-2xl border-black p-4 dark:border-white dark:text-white">
        <Time />
      </div>
    </div>
  );
}
