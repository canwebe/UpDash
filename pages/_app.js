import '@/styles/globals.css'
import '@/styles/nprogress.css'
import Head from 'next/head'
import { Heebo } from 'next/font/google'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import { Toaster } from 'react-hot-toast'
import RootWrapper from '@/components/RootWrapper'

// Font
const heebo = Heebo({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  console.count('Home')
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
        <RootWrapper>
          <Component {...pageProps} />
        </RootWrapper>
      </Provider>
      <Toaster
        toastOptions={{
          style: {
            fontSize: '1.7rem',
          },
        }}
      />
    </>
  )
}
