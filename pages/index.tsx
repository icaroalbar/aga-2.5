import type { NextPage } from 'next'
import Head from 'next/head'
import Nav from '../components/Nav/Nav'
import Header from '../components/Header/Header'
import Policy from '../components/Policy/Policy'
import QuemSomos from '../components/QuemSomos/QuemSomos'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AGÁ Empreendimentos</title>
        <meta name="AGÁ Empreendimentos" content="AGÁ Empreendimentos" />
        <link rel="icon" href="/logoAga.svg" />
      </Head>
      <Policy />
      <Nav />
      <Header />
      <QuemSomos />
    </>
  )
}

export default Home