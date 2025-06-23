import Link from 'next/link';

export default function PostCard({ post }) {
  return (
    <div className="post-card">
      <h2>
        <Link href={`/posts/${post.id}`}>{post.title}</Link>
      </h2>
      <p>{post.excerpt}</p>
      {post.tags && (
        <p className="tags">{post.tags.join(', ')}</p>
      )}
    </div>
  );
}
