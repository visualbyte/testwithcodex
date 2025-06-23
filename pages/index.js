import { useState } from 'react';
import postsData from '../data/posts';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';

export async function getStaticProps() {
  return { props: { posts: postsData } };
}

export default function Home({ posts }) {
  const [query, setQuery] = useState('');
  const [tag, setTag] = useState('');

  const allTags = Array.from(new Set(posts.flatMap(p => p.tags)));

  const filtered = posts.filter(p => {
    const matchesTag = tag ? p.tags.includes(tag) : true;
    const q = query.toLowerCase();
    const matchesQuery = p.title.toLowerCase().includes(q) ||
      p.content.toLowerCase().includes(q);
    return matchesTag && matchesQuery;
  });

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Modern Blog</h1>
      <input
        className="border p-2 w-full mb-4"
        type="text"
        placeholder="Search"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <select className="border p-2 mb-4" value={tag} onChange={e => setTag(e.target.value)}>
        <option value="">All</option>
        {allTags.map(t => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      {filtered.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </Layout>
  );
}
