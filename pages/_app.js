import '@/styles/globals.css'
import '@/styles/nprogress.css'
import Head from 'next/head'
import { Heebo } from 'next/font/google'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import { Toaster } from 'react-hot-toast'
import RootWrapper from '@/components/Layouts/rootWrapper'
import ModalLayout from '@/components/Layouts/modalLayout'
import MainLayout from '@/components/Layouts/mainLayout'

// Font
const heebo = Heebo({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  console.count('Home')
  console.log(store.getState().userProfile)

  const getLayout =
    Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>)

  const layout = getLayout(<Component {...pageProps} />)

  return (
    <>
      <Head>
        <title>UpDash</title>
      </Head>
      <style jsx global>{`
        html {
          font-family: ${heebo.style.fontFamily};
        }
      `}</style>
      <Provider store={store}>
        <RootWrapper>{layout}</RootWrapper>
      </Provider>
      <Toaster
        toastOptions={{
          style: {
            fontSize: '1.6rem',
          },
        }}
      />
    </>
  )
}
