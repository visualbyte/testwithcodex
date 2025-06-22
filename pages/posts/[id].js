import { useRouter } from 'next/router';
import Link from 'next/link';
import posts from '../../data/posts';
import ReactMarkdown from 'react-markdown';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  const post = posts.find(p => p.id === id);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <nav>
        <Link href="/">Home</Link>
      </nav>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
}
