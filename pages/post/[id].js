import {useRouter} from  'next/router';
import {MainLayout} from "../../components/MainLayout";

export default function Post ({post}) {
  const router = useRouter();

  return (
    <MainLayout title="Posts">
      <h1>{router.query.id}</h1>
      <h2>{post.title}</h2>
    </MainLayout>
  )
}

Post.getInitialProps =  async ({query}) => {
  const response = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post = await response.json();

  return {
    post
  }
};