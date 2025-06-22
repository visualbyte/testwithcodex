import ReactMarkdown from 'react-markdown';
import posts from '../../data/posts';
import Layout from '../../components/Layout';

export async function getStaticPaths() {
  const paths = posts.map(post => ({ params: { id: post.id } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = posts.find(p => p.id === params.id);
  return { props: { post } };
}

export default function Post({ post }) {
  return (
    <Layout>
      <h1>{post.title}</h1>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </Layout>
  );
}
