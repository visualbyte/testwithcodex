import Link from 'next/link';

export default function PostCard({ post }) {
  return (
    <div className="mb-4 rounded border p-4 bg-white dark:bg-gray-700">
      <h2 className="text-xl font-bold mb-2">
        <Link className="text-blue-600 hover:underline" href={`/posts/${post.id}`}>{post.title}</Link>
      </h2>
      <p className="mb-2">{post.excerpt}</p>
      {post.tags && (
        <p className="text-sm text-gray-500 font-mono">{post.tags.join(', ')}</p>
      )}
    </div>
  );
}
