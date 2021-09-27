import { useEffect, useState } from "react";
import {MainLayout} from "../components/MainLayout";

export default function Posts () {
  const [posts, setPosts] = useState() ;

  useEffect(() => {
    async function getPosts() {
      const response = await fetch('http://localhost:4200/posts');
      console.log(response)
      const json = await response.json();
      console.log(json)
      setPosts(json);
    };
    getPosts();
  }, [])

  return (
    <MainLayout title="Posts">
      <h1>Posts</h1>
     {posts && ( 
      <ul>
        {posts.map((item) => (
          <li key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
      )}
    </MainLayout>
  )
}