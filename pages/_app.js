import '../styles/globals.css'
import Footer from '../components/Footer';
import React, { Suspense } from 'react';
import Navbar from '../components/Navbar';
import '../components/i18n';

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Suspense fallback="loading">
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </Suspense>
    </>
    )
}

export default MyApp
