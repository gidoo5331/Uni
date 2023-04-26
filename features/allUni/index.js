import React from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import Card from "../../components/Card";
import HeroLayout from "../../components/HeroLayout";
import HeroSection from "../../components/HeroSection";
import SearchBar from "../../components/SearchBar";
import { Router } from "next/router";
import Link from "next/link";

const streaming = [
  {
    id: "1",
    name: "KNUST",
    description: "Kumasi",
    image: "/images/knust.jpg",
    price: "480",
    href: "#",
  },
  {
    id: "2",
    name: "LEGON",
    description: "legon",
    image: "/images/legon.jpg",
    price: "480",
    href: "#",
  },
  {
    id: "3",
    name: "UCC",
    description: "Winneba",
    image: "/images/ucc.jpg",
    price: "450",
    href: "#",
  },
  {
    id: "4",
    name: "UEW",
    description: "Wenniba",
    image: "/images/uew.jpg",
    price: "410",
    href: "#",
  },
  {
    id: "5",
    name: "CENTRAL",
    description: "cen",
    image: "/images/central.jpg",
    price: "480",
    href: "#",
  },
  {
    id: "6",
    name: "VALLEY VIEW",
    description: "Oyibi",
    image: "/images/valley.png",
    price: "480",
    href: "#",
  },
  {
    id: "7",
    name: "METHODIST UNI ",
    description: "Dansoman",
    image: "/images/med.jpg",
    price: "450",
    href: "#",
  },
  {
    id: "8",
    name: "LOREM",
    description: "lorem",
    image: "/images/knust.jpg",
    price: "410",
    href: "#",
  },
];

const AllUni = () => {
  const { data: session } = useSession()
  // const { push } = useRouter()

  return (
    <>
  {session ? 
    <div className="main bg-white">

      <HeroSection title="Universities in Ghana" title_red="Top 100%" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>

      <div className="container mx-auto bg-white mb-72">
        {/*------ SearchBar component ------ */}
        <SearchBar
          label="Search"
          placeholder="Search for Universties by name, location"
        />

        <HeroLayout title="Universities in Ghana" className="mt-24">
          {streaming.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              description={item.description}
              image={item.image}
              price={item.price}
              />
              ))}
        </HeroLayout>
      </div>
    </div> 
    : <>
    <Link  href="/dashboard"></Link>
    {/* { push('/signIn') } */}
    </>
}
    </>
  );
};

export default AllUni;

// class AllUnis extends React.Component {
//   static getInitialProps ({ res }) {
//      if(!session) {
//        res.redirect('/your-path');
//      }
//   }

// }
