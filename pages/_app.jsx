import '../styles/globals.css'
import { Toaster } from 'react-hot-toast';
import Navigation from '../components/navigation/navigation';

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
