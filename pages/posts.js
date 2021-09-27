import { useEffect, useState } from "react";
import {MainLayout} from "../components/MainLayout";
import Link from 'next/link';

export default function Posts ({posts}) {

  return (
    <MainLayout title="Posts">
      <h1>Posts</h1>
     {posts && ( 
      <ul>
        {posts.map((item) => (
        <li key={item.id}>
          <Link href="/post/[id]" as={`post/${item.id}`}>
            <a>
              {item.title}
            </a>
          </Link>
        </li>
        ))}
      </ul>
      )}
    </MainLayout>
  )
}

export async function getServerSideProps () {
  const response = await fetch('http://localhost:4200/posts');
  const posts = await response.json();

  return {
    props: {posts}
  }
};
