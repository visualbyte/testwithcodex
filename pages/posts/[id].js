import ReactMarkdown from 'react-markdown';
import { getPosts } from '../../data/posts';
import Layout from '../../components/Layout';
import LikeButton from '../../components/LikeButton';
import { useEffect } from 'react';

export async function getServerSideProps({ params }) {
  const posts = getPosts();
  const post = posts.find(p => p.id === params.id);
  if (!post) {
    return { notFound: true };
  }
  return { props: { post } };
}

export default function Post({ post }) {
  useEffect(() => {
    if (window.DISQUS === undefined) {
      const d = document, s = d.createElement('script');
      s.src = 'https://example.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    } else {
      window.DISQUS.reset({ reload: true });
    }
  }, [post.id]);

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <LikeButton postId={post.id} />
      <article className="prose dark:prose-invert">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
      <div id="disqus_thread" />
    </Layout>
  );
}
