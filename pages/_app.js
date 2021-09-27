import NextNprogress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <NextNprogress
      color="yellow"
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
      showOnShallow={true}
    />
      <Component {...pageProps} />
      <style jsx global>
      {`
        body {
          font-family: 'Roboto', sans-serif;
        }
      `}
      </style>
    </>
  )
}

export default MyApp