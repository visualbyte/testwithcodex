import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="mb-6">
      <Link className="mr-4 text-blue-600 hover:text-blue-800" href="/">Home</Link>
      <Link className="text-blue-600 hover:text-blue-800" href="/about">About</Link>
    </nav>
  );
}
