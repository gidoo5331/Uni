import React, { useEffect, useState } from 'react'
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link';
import Loading from '../../../components/Loading/Loading';



const SignIn = () => {
  const router = useRouter();
  const { data: session } = useSession()

  const isAuthenticated = false
  const isLoading = false
  const [formData, setFormData] = useState({
    email: '',
  })

  const { email } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const body = formData

  const onSubmit = e => {
    e.preventDefault();
  }

  // useEffect(() =>{
  //   // const data =  user.email
  //   console.log(data)

  // // }, [user])
  // }, [])

  return (
    <React.Fragment>
      {!isAuthenticated ?
        <div className="lg:relative lg:h-full min-h-[100vh] lg-pt-0 lg:pb-0 pt-9 pb-[50%]">
          <div className="mx-auto w-full lg:pl-8 max-w-7xl pb-20 text-[10px] lg:py-32 lg:text-left">

            <img
              className="absolute top-5 left-[40%] lg:inset-0  h-[63px] lg:h-[86px] w-[63px] lg:w-[86px]"
              src="./images/logo.png"
              alt="img"
            />
            <div className='lg:w-1/2 lg:relative lg:left-0 mx-auto lg:mx-0 w-2/3 pt-16 lg:pt-0 '>
              <div className='text-center mx-auto mb-3'>
                <p className='text-[24px] text-black font-rubik'>Log in to Your Account</p>
                <p className='text-black-200 text-[14px] lg:text-xs'>Where your talent get’s rewarded. </p>
              </div>

              <form onSubmit={e => onSubmit(e)} className="lg:w-1/2 w-full lg:max-w-sm  mx-auto" action="#" method="POST" >
                <div className=''>
                  <label htmlFor="email" className="block text-base lg:text-sm font-rubik font-normal text-black-200">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      value={email}
                      onChange={e => onChange(e)}
                      // type="text"
                      type="email"
                      autoComplete="email"
                      placeholder='admin@company.com'
                      required
                      className="block w-full h-[48px] text-black text-base lg:text-sm appearance-none px-3 bg-slate-400 rounded-md border border-gray-300 placeholder-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
                    />
                  </div>
                </div>

                <div className='flex justify-between text-xs mt-3'>
                  <div className=''>
                    <input
                      type="checkbox"
                      id="remember"
                      name="remember"
                      className='border-[#ECEEF0] bg-white h-3 w-3' />
                    <label htmlFor='remember' className='text-black-200 ml-2'>Remember me</label>
                  </div>
                  <p className='text-red'>Forgot password?</p>
                </div>

                {/* <div className='flex lg:hidden text-black-200 justify-betwee text-[14px] mt-2'>
              <div className=''>
                 <p className=''>Dont have an account?</p>
                 </div>
            <p className='  text-red flex pl-4 '> Sign Up</p>
              </div> */}
                {isLoading ?
                  <Loading /> :
                  <button type="submit" className="bg-red rounded mt-3 leading-3 text-[16px] font-rubik w-full h-[48px] text-white">
                    Log In
                  </button>
                }

                <p className='text-black-200 flex text-xs mt-3 justify-center '>Or log in using</p>

                <div className='flex text-base mt-4 font-rubik text-black-300'>
                  <button type="submit" onClick={() => signIn('google')} className="rounded leading-3 w-72 mr-1 px-2 py-3 hover:border hover:border-gray">
                    <AiOutlineInstagram className='inline text-base pb-[3px]' /> <span>G+</span>

                  </button>
                  <button type="submit" className="rounded leading-3 w-72 mr-1 px-2 py-3 hover:border hover:border-gray">
                    <AiFillTwitterCircle className='inline text-base pb-[3px]' /> <span>Tw</span>
                  </button>
                  <button type="submit" className="rounded leading-3 w-72 mr-1 px p3 hover:border hover:border-gray">
                    <BsFacebook className='inline text-base pb-[3px]' /> <span className=''>Fb</span>
                  </button>
                </div>
                <div className='text-sm'>
                  <h4 className='mr-2 inline-block'> Don't have an account?</h4>
                  <Link href="/signUp">
                    Sign up
                  </Link>
                </div>
              </form>
            </div>
          </div>

          <div className="relative hidden lg:block bg-purpl mb-12 lg:mb-0 w-full sm:h-72 lg:absolute lg:inset-y-0 lg:right-0 md:right-0 lg:h-full lg:w-1/2">
            <img
              className="top-5 left-[40%] lg:inset-0  h-full lg:h-full w-[63px] lg:w-full"
              src="./images/login.jpg"
              alt="img"
            />

          </div>
        </div> :

        <h1 className='text-red h-[100vh] pt-[20%] pl-[43%]'>
          <Link href="/">Go to home Page </Link></h1>
      }
    </React.Fragment>
  )
}

export default SignIn