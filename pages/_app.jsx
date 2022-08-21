import '../styles/globals.css'
import { Toaster } from 'react-hot-toast';
import Router from 'next/router';
import Navigation from '../components/navigation/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

function App({ Component, pageProps }) {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false}/>      
      <Navigation>
        <Component {...pageProps}/>
      </Navigation>
    </>
  );
};

export default App
