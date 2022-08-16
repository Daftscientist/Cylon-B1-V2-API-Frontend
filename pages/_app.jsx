import '../styles/globals.css'
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loading from '../components/Loading';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  async function authCheck(url) {
    // redirect to login page if accessing a private page and not logged in 
    const publicPaths = ['/', '/login', '/register'];
    const path = url.split('?')[0];

    const res = await fetch(`${process.env.BASE_API_ROUTE}user/fetch`, { method: "get", credentials: "include"});
    const data = await res.json();
    if (publicPaths.includes(path) || res.ok) {
      setAuthorized(true);
    } else {
      setAuthorized(false);
      router.push('/login');
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

  return (
    <>
      <Head>
        <title>Cylon.wtf - Home</title>    
      </Head>
      {authorized &&
        <Component {...pageProps} />
      }
      {!authorized &&
        <Loading/>
      }
    </>
  );
};

export default MyApp
