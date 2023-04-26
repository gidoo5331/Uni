import React from "react";
import Image from "next/image"
import { useRouter } from "next/router";

const Card = ({ key, name, description, image, route }) => {
  const router = useRouter();
  return (
    <React.Fragment key={key}>
      <div className="w-40 lg:w-52 h-full text-center mt-10">
        <div className="relative">
          <Image src={image} width={232} height={232} alt="img" className=" w-[232.47px] h-[232.47px] object-cover" />
        </div>
        <div className="pt-4 cursor-pointer hover:font-semibold"
          onClick={() => router.push(`allUnis/${route}`)}>
          <p className="text-lg text-red hover:text-red-400 ">{name}</p>
          <p className="text-sm text-gray ">{description}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
