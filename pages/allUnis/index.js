import Head from 'next/head'
import Layout from '../../Layout'
import AllUni from '../../features/allUni'
import {getSession} from "next-auth/react"

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Gidoo</title>
        <meta name="description" content="Gidoo's app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <AllUni />
      </Layout>
    </div>
  )
}




export const getServerSideProps = async ({req}) => {
  const session = await getSession({req})
  
  if(!session)
  return {
      redirect : {
          destination: "/signIn",
          permanent: false,
  },
}
}
