import Head from 'next/head'
import HomePage from '../features/Home/home'
import Layout from '../Layout'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Gidoo</title>
        <meta name="description" content="Gidoo's app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HomePage />
      </Layout>
    </div>
  )
}
