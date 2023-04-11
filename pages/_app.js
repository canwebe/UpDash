import '@/styles/globals.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Comfortaa } from 'next/font/google'

// Font
const comfortaa = Comfortaa({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const { pathname } = router

  return (
    <>
      <Head>
        <title>UpDash | Home</title>
      </Head>
      <style jsx global>{`
        html {
          font-family: ${comfortaa.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
