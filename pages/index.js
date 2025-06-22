import Link from 'next/link';
import posts from '../data/posts';

export default function Home() {
  return (
    <div className="container">
      <h1>Modern Blog</h1>
      <nav>
        <Link href="/">Home</Link>
      </nav>
      {posts.map(post => (
        <div key={post.id}>
          <h2>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </h2>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}
