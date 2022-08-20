import '../styles/globals.css'
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loading from '../components/Loading';
import { Toaster } from 'react-hot-toast';
import Sidebar from "../components/navigation/sidebar.jsx";
import getRestrictedPages from "../components/navigation/activeOrNot";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  async function authCheck(url, setAuthorized) {
    // redirect to login page if accessing a private page and not logged in 
    const publicPaths = ['/', '/login', '/register'];
    const path = url.split('?')[0];

    if (path == "/dashboard" || path.startsWith("/dashboard/tokens") || path.startsWith("/dashboard/account")) {
      if (localStorage.getItem('sessionUser')) {
        setAuthorized(true);
      } else {
        setAuthorized(false);
        router.push('/login');
      }
    } else {
      setAuthorized(false)
      return <Component {...pageProps} />
    }
}

  useEffect(() => {
    // on initial load - run auth check 
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false  
    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    // on route change complete - run auth check 
    router.events.on('routeChangeComplete', authCheck)

    // unsubscribe from events in useEffect return function
    return () => {
        router.events.off('routeChangeStart', hideContent);
        router.events.off('routeChangeComplete', authCheck);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  const ChildData = () => {
    if (router.asPath.split('?')[0] in getRestrictedPages()) {
      return <Component {...pageProps}/>
    }
    else {
      return <Loading />
    }
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={false}/>      
      <ChildData/>
    </>
  );
};

export default MyApp
