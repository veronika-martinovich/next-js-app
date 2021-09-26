import Head from 'next/head';
import Link from 'next/link';

export const MainLayout = ({children, title}) => {
  return (
  <>
    <Head>
      <title>Next.js | {title}</title>
    </Head>
    <nav>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/posts"><a>Posts</a></Link>
    </nav>
    <main >{children}</main>
    <style jsx>
      {`
        nav {
          display: flex;
          align-items: center;
          width: 100%;
          height: 80px;
          background-color: black;
          color: white;
          padding: 0 20px;
        }

        a {
          color: white;
          margin-right: 15px;
          font-weight: 500;
        }
      `}
    </style>
  </>
  )
}
