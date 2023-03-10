import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>BCP Autos</title>
      </Head>
      <Header />
        <main>{children}</main>
      <Footer />
    </>
  )
}
