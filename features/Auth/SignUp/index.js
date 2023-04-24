import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineGithub } from 'react-icons/ai'

export const SignUp = () => {
  const { data: session } = useSession()
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
  })

  const { email, terms } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }


  const onSubmit = async (e) => {
    e.preventDefault();
    await signIn('email', { email, redirect: false, callbackUrl: "/" });
    // console.log(formData)
  }


  return (
    <>
      <div className="bg-white lg:h-[100vh] pt-4 pb-8">
        <div className='relative w-full lg:mt-8 lg:pl-10'>
          <div>
            <div className='hidden lg:block'>
              <Image
                src="/images/logo.png"
                onClick={() => router.push("/")}
                width={80} height={50}
              />
            </div>
            <div className='lg:hidden'>
              <Image
                src="/images/logo.png"
                width={77} height={37}
                onClick={() => router.push("/")}
              />
            </div>

            <div className='hidden lg:block w-1/2 mt-20 text-black-500 text-center text-semibold tracking-tight font-open'>
              <Image
                src="/images/ver.jpg"
                width={220} height={220}
              />
              <p className='lg:text-3xl text-[38px] pt-6 font-semibold leading-[45px] '>
                Welcome aboard
              </p>
              <p className='text-lg leading-[45px]'>
                just a couple of clicks and we start
              </p>
            </div>
          </div>


          <div className="lg:absolute lg:w-1/2 w-full font-inter right-0 lg:pt-0 pt-5 lg:inset-y-0">
            <div className="relative w-2/3 font-inter ml-20">
              <h2 className="text-black font-bold text-[30px] ">Register an Account!</h2>
              <h4 className='mr-2 inline-block'> Already have an account?</h4>
              <Link href="/signIn">
                Sign In
              </Link>
              <form onSubmit={e => onSubmit(e)} className='pt-10'>
                <div className='pb-6'>
                  <label htmlFor="email" className="block text-base font-rubik font-medium text-gray-700">
                    Email address*
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      value={email}
                      onChange={e => onChange(e)}
                      type="email"
                      autoComplete="email"
                      placeholder='John@gmail.com'
                      required
                      className="block w-full appearance-none bg-white text-black rounded border border-gray-600 px-3 py-2 placeholder-gray-600 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>


                <div className='text-gray-700 text-base pb-1 ml-4'>
                  <p>
                    <input type="checkBox"
                      name="terms"
                      value={terms}
                      onChange={e => onChange(e)}
                      checked

                      className='checked-blue'
                    />
                    I agree to <a href="/" className="text-blue">terms & conditions</a></p>
                  <p className=''> <input type="checkBox" /> I’d like being informed about latest news and tips</p>
                </div>


                <button
                  type="submit"
                  className="w-full rounded border bg-blue-400 px-2 py-3 mb-5 text-sm font-medium text-black hover:bg-blue-300 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >Register Account</button>

                <h4 className='text-other-100 text-center text-sm'>Or</h4>
                <div>

                <button
        type="button"
        onClick={() => signIn('github')}
        className=" inline-flex items-center rounded-l-md border border-gray-300 bg-white px-6 mr-10 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
               <AiOutlineGithub className='lg:mr-3 mr-3 text-xl' />
 Github SignUp</button>
                <button
                  type="button"
                  onClick={() => signIn('google', { callbackUrl: "/" })}
                  className=" inline-flex items-center rounded-l-md border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  > <FcGoogle className='lg:mr-3 mr-3 text-xl' />Register with Google</button>
                  </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>

  )

}