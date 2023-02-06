import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { decrement, increment } from '@/store/counterSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const count = useAppSelector((state: any) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">
        Hello world!
        </h1>

        <div>
          <button onClick={() => dispatch(increment())}>
          Increment
          </button>
          <span>{count}</span>
          <button    onClick={() => dispatch(decrement())}>
          Decrement
          </button>
        </div>
      </main>
    </>
  )
}