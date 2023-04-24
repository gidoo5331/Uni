import Head from 'next/head'
import SignIn from '../features/Auth/signIn'

export default function index() {
  return (
    <div className="bg-white">
      <Head>
        <title>Sign In</title>
        <meta name="description" content="sign In" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignIn />
    </div>
  )
}
