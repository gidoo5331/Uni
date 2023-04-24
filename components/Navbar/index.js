import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from 'next/router';

const navigation = [
  { name: "Home", href: "home", current: true },
  { name: "About", href: "about", current: false },
  { name: "Contact Us", href: "#", current: false },
  { name: "Charts", href: "#", current: false },
];
const userbutton = [
  { name: "Sign Up", href: "#" },
  { name: "Login", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavbarComp = () => {
  const router = useRouter();

  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6 text-gray" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6 text-gray" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                 <img
                   className="hidden h-8 w-[w-133px] lg:block"
                   src={"./images/logo.png"}
                   alt="logo"
                 /> 
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={"./images/logo.png"}
                    alt="logo"
                  />
                 <h1 className="text-lg font-semibold" > Gidoo</h1>
                </div>
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  {navigation.map((item) => {
                    return(
                    <NavigationLink
                    key={item.name}
                    href={`/${item.href}`}
                    text={item.name}
                    router={router}
                    />
                
                  )})}
                </div>
              </div>
               
              <div className="flex items-center">
                <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                  <button onClick = {() => router.push("/signUp")} className="bg-red rounded-full text-white px-4 py-1 mr-3">
                    Sign Up
                  </button>
                  <button onClick = { () => router.push("/signIn")} className="border border-red-500 bg-white rounded text-red px-4">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-red text-white"
                      : "text-gray hover:bg-black hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-gray-700 pt-4 pb-3">
              <div className="flex items-center px-5 sm:px-6">
                <button className="bg-red rounded-full text-white px-4 mr-10">
                  Sign Up
                </button>
                <button className="border border-red bg-white rounded text-red px-4">
                  Login
                </button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );

  
};

export default NavbarComp;

function NavigationLink({ href, text, router }) {
  const isActive = router.asPath === (href === "/home" ? "/" : href);
  return (
      <Link href={href === "/home" ? "/" : href} passHref>
          <a
              href={href === "/home" ? "/" : href}
              className={classNames(
                   isActive
                    ? "text-red"
                    : "text-[#606A70] hover:text-gray",
                  "px-3 py-2 rounded-md text-sm font-normal leading-4 tracking-tighter"
                )}>
                
              <span>{text}</span>
          </a>
      </Link>
  )};