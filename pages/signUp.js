import Head from 'next/head'
import { SignUp } from '../features/Auth/SignUp'


export default function index() {
  return (
    <div className="">
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Gideon's uni site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignUp />
    </div>
  )
}
