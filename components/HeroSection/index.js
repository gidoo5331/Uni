import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const HeroSection = ({title, title_red, content}) => {
const router = useRouter()

  return (
    <React.Fragment>
      <div className="lg:relative border border-y-black mt-2 ">
        <div className="mx-auto w-full lg:pl-8 max-w-7xl pb-20 text-[10px] text-center lg:py-32 lg:text-left">
          <div className="px-4 pt-16 sm:px-8 lg:w-1/2 xl:pr-16 ">
            <p className="text-5xl font-normal tracking-tight sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl xl:pr-18">
              <span className="block xl:inline text-black-100 leading-[68px]">
                {title}
              </span>
              <span className="block text-red xl:block leading-[68px]">{title_red}</span>
            </p>
            <p className="mx-auto mt-3 max-w-md text-lg text-gray sm:text-lg md:mt-5 md:max-w-3xl md:pr-1 xl:pr-24 leading-[26px]">
              {content}
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <button type='button' onClick={()=> router.push('/signUp')} className="bg-red rounded-full text-sm text-white px-5 py-1">
                Sign Up now
              </button>
            </div>
          </div>
        </div>
        <div className="relative h-[380px] mb-12 lg:mb-0  w-full sm:h-72 lg:absolute lg:inset-y-0 lg:right-0 md:right-0 lg:h-full lg:w-1/2">
          <img
            className="absolute inset-0 h-full w-full md:pr-0"
            src="./images/books.jpg"
            alt="img"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
