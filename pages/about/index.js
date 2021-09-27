import Router from 'next/router';
import {MainLayout} from "../../components/MainLayout";

export default function About ({title}) {
  return (
  <MainLayout title="About">
    <h1>{title}</h1>
    <button onClick={() => {
      Router.push('/about/author')
    }}>Go to author</button>
  </MainLayout>
  )
}

About.getInitialProps = async () => {
  const response = await fetch('http://localhost:4200/about');
  const data = await response.json();

  return {
    title: data.title
  }
}
