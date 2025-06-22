import Link from 'next/link';
import posts from '../data/posts';
import Layout from '../components/Layout';

export async function getStaticProps() {
  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <Layout>
      <h1>Modern Blog</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </h2>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </Layout>
  );
}
