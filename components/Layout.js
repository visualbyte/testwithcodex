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
    <div className="container mx-auto max-w-2xl p-8 bg-white dark:bg-gray-800 shadow-md">
      <Head>
        <title>Modern Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <button
        onClick={() => setDark(!dark)}
        aria-label="toggle-dark"
        className="mb-4 px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {dark ? 'Light' : 'Dark'} Mode
      </button>
      {children}
    </div>
  );
}
