import { AppProps } from 'next/app';
import { LoveContextProvider } from '../contexts/LoveContext';
import { GlobalStyle } from '../styles/globals';

function MyApp({ Component, pageProps } : AppProps) {
  return (
    <>
      <GlobalStyle />
      <LoveContextProvider>
        <Component {...pageProps} />
      </LoveContextProvider>
    </>
  )
}

export default MyApp;
