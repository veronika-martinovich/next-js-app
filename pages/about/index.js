import Router from 'next/router';
import {MainLayout} from "../../components/MainLayout";

const About = () => {
  return (
  <MainLayout title="About">
    <h1>About</h1>
    <button onClick={() => {
      Router.push('/about/author')
    }}>Go to author</button>
  </MainLayout>
  )
}

export default About