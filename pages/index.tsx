import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav/Nav'
import Header from '../components/Header/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AGÁ Empreendimentos</title>
        <meta name="AGÁ Empreendimentos" content="AGÁ Empreendimentos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Header />
    </>
  )
}

export default Home