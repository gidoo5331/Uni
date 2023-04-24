import React from "react";
import Card from "../../components/Card";
import HeroLayout from "../../components/HeroLayout";
import HeroSection from "../../components/HeroSection";
import SearchBar from "../../components/SearchBar";

const streaming = [
  {
    id: "1",
    name: "KNUST",
    description: "Kumasi",
    image: "/images/Ed3.jpg",
    price: "480",
    href: "#",
  },
  {
    id: "2",
    name: "LEGON",
    description: "legon",
    image: "/images/Celinedion.jpg",
    price: "480",
    href: "#",
  },
  {
    id: "3",
    name: "UCC",
    description: "Winneba",
    image: "/images/Rihanna.jpg",
    price: "450",
    href: "#",
  },
  {
    id: "4",
    name: "UEW",
    description: "Wenniba",
    image: "/images/Don.jpg",
    price: "410",
    href: "#",
  },
  {
    id: "5",
    name: "CENTRAL",
    description: "cen",
    image: "/images/Ed3.jpg",
    price: "480",
    href: "#",
  },
  {
    id: "6",
    name: "Uni",
    description: "Uni",
    image: "/images/Celinedion.jpg",
    price: "480",
    href: "#",
  },
  {
    id: "7",
    name: "TEST",
    description: "test",
    image: "/images/Rihanna.jpg",
    price: "450",
    href: "#",
  },
  {
    id: "8",
    name: "LOREM",
    description: "lorem",
    image: "/images/Don.jpg",
    price: "410",
    href: "#",
  },
];

const HomePage = () => {
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
              price={item.price}
              />
              ))}
        </HeroLayout>
      </div>
    </div>
  );
};

export default HomePage;
