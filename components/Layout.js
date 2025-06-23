import Head from 'next/head';
import { useEffect, useState } from 'react';
import Nav from './Nav';

export default function Layout({ children }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('dark');
    if (stored === 'true') setDark(true);
  }, []);

  useEffect(() => {
    document.body.className = dark ? 'dark' : '';
    localStorage.setItem('dark', dark);
  }, [dark]);

  return (
    <div className="container">
      <Head>
        <title>Modern Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <button onClick={() => setDark(!dark)} aria-label="toggle-dark">
        {dark ? 'Light' : 'Dark'} Mode
      </button>
      {children}
    </div>
  );
}
