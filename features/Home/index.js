import React from "react";
import Card from "../../components/Card";
import HeroLayout from "../../components/HeroLayout";
import HeroSection from "../../components/HeroSection";
import SearchBar from "../../components/SearchBar";
import { useRouter } from "next/router";

const streaming = [
  {
    id: "1",
    name: "KNUST",
    description: "Kumasi",
    image: "/images/knust.jpg",
    route: "",
    href: "#",
  },
  {
    id: "2",
    name: "LEGON",
    description: "legon",
    image: "/images/legon.jpg",
    route: "480",
    href: "#",
  },
  {
    id: "3",
    name: "Ashesi University ",
    description: "Berekuso",
    image: "/images/ash.jpg",
    route: "450",
    href: "#",
  },
  {
    id: "4",
    name: "UCC",
    description: "Winneba",
    image: "/images/ucc.jpg",
    route: "450",
    href: "#",
  },
  {
    id: "5",
    name: "UEW",
    description: "Wenniba",
    image: "/images/uew.jpg",
    route: "410",
    href: "#",
  },
  {
    id: "6",
    name: "CENTRAL",
    description: "cen",
    image: "/images/central.jpg",
    route: "480",
    href: "#",
  },
  {
    id: "7",
    name: "VALLEY VIEW",
    description: "Oyibi",
    image: "/images/valley.png",
    route: "480",
    href: "#",
  },
  {
    id: "8",
    name: "METHODIST UNI ",
    description: "Dansoman",
    image: "/images/med.jpg",
    route: "450",
    href: "#",
  },
];

const HomePage = () => {
  const router = useRouter();

  return (
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
              route={item.id}
              />
              ))}
        </HeroLayout>
        <div className=" grid place-items-center mt-8">

        <button type="button" 
        onClick={()=> router.push('/allUnis')} 
        className="bg-purple items-center text-sm text-white rounded py-3 px-10 hover:bg-purple-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          View All Uni's</button>
          </div>
      </div>
    </div>
  );
};

export default HomePage;
