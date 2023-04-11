import '@/styles/globals.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Heebo } from 'next/font/google'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import useAuthCheck from '@/hooks/useAuthCheck'

// Font
const heebo = Heebo({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const { pathname } = router

  // Checking AUth
  useAuthCheck(store)

  console.count('Home')
  console.log(store.getState().auth.isAuthReady, store.getState().auth.user)
  return (
    <>
      <Head>
        <title>UpDash | Home</title>
      </Head>
      <style jsx global>{`
        html {
          font-family: ${heebo.style.fontFamily};
        }
      `}</style>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
