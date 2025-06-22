import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <title>Modern Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <nav>
        <Link href="/">Home</Link>
      </nav>
      {children}
    </div>
  );
}
