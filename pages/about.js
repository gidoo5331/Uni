import Head from 'next/head'
import HomePage from '../features/Home'
import Layout from '../Layout'

export default function About() {
    return (
        <div className="">
            <Head>
                <title>About</title>
                <meta name="description" content="about Gidoo" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <HomePage />
            </Layout>
        </div>
    )
}
