

import '@/styles/globals.css'
import '@/styles/netflixIntro.css'
import 'react-toastify/dist/ReactToastify.css';

import { useEffect } from "react"
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import useCurrentUser from '@/hooks/useCurrentUser';
import router from 'next/router';

export default function App({ Component, pageProps }: AppProps) {


  const { data: currentUser } = useCurrentUser();


  useEffect(() => {
    if (!currentUser) {
      router.replace("/auth")
    }
  }, [currentUser])



  return (
    <>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  )
}
