import Image from "next/image";
import SocialIcons from "../SocialIcons";

const navigation = {
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Terms Policy", href: "#" },
    { name: "Copyright Policy", href: "#" },
  ],
  our_communities: [
    { name: "lorem", href: "/" },
    { name: "lorem", href: "lorem" },
    { name: "lorem ipsum", href: "lorem" },
    { name: "ipsum", href: "#" },
  ],
  qLinks: [
    { name: "Lorem 1", href: "#" },
    { name: "Lorem 2", href: "#" },
    { name: "Lorem 3", href: "#" },
  ],
  social: [
    {
      name: "Instagram",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

const Footer = () => {
  return (
    <footer
      className="bg-purple mt-60 lg:mt-0 lg:pt-12 h-[742px] xl:h-[395px] lg:h-[440px]"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:pt-16 lg:pb-2 xl:pt-16 xl:pb-1 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8 md:grid md:grid-cols-4 md:gap-8">
          <div className="space-y-8 xl:col-span-1 md:col-span-1">
            <Image
            width={100}
            height={100}
              className="h-[100px] w-[100px]"
              src="/images/logo.png"
              alt="Company name"
            />

          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 md:col-span-3">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-bold text-gray">COMPANY</h3>
                <ul role="list" className="mt-4 text-lg space-y-2">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-red hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-bold text-gray">OUR COMMUNITIES</h3>
                <ul role="list" className="mt-4 text-lg space-y-2">
                  {navigation.our_communities.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-red hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-bold text-gray">QUICK LINKS</h3>
                <ul role="list" className="mt-4 text-lg space-y-2">
                  {navigation.qLinks.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-red hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-16 md:mt-12">
          <div className="text-sm text-gray xl:text-center">
            <p className="pl-0 xl:pl-3 md:pl-0">Copyright © Gideon B</p>
            <p>All rights reserved</p>
          </div>
          <div className="">
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
