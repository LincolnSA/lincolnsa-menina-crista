import Head from 'next/head';
import '../../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Menina Cristã</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/logo.jpeg" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
