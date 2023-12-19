import Image from 'next/image'
import Time from './components/Time'

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <h1 className='text-4xl font-bold'>Bienvenidos</h1>
        </div>
        <Time />

      </main>
    </>
  )
}
