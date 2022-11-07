import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav/Nav'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AGÁ Empreendimentos</title>
        <meta name="AGÁ Empreendimentos" content="AGÁ Empreendimentos" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;300;400;500;600;700&display=swap" />
      </Head>
      <Nav />
    </>
  )
}

export default Home