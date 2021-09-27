import {useState, useEffect} from 'react';
import {useRouter} from  'next/router';
import {MainLayout} from "../../components/MainLayout";
import Link from 'next/link';

export default function Post ({post: serverPost}) {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();

  useEffect(()=> {
    async function getPost () {
      const response = await fetch(`http://localhost:4200/posts/${router.query.id}`);
      const data = await response.json();
      setPost(data);
    }

    if (!serverPost) {
      getPost();
    }
  }, []);

  if (!post) {
    return (
      <p>Loading ...</p>
    )
  }

  return (
    <MainLayout title="Posts">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link href="/posts">
        <a>
          See all posts
        </a>
      </Link>
    </MainLayout>
  )
}

Post.getInitialProps =  async ({query, req}) => {
  if (!req) {
    return {
      post: null
    }
  }

  const response = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post = await response.json();

  return {
    post
  }
};