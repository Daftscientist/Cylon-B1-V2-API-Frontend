import { Pages } from "../components/navigation/activeOrNot";

export async function authCheck(url, setAuthorized) {
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

export async function effect(){
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
}