import React from "react";
import Image from "next/image"
import { useRouter } from "next/router";

const Card = ({ key, name, description, image, price }) => {
  const router = useRouter();
  return (
    <React.Fragment key={key}>
      <div className="w-40 lg:w-52 h-full text-center mt-10">
        <div className="relative">
          <Image src={image} width={232} height={232} alt="img" className=" w-[232.47px] h-[232.47px] object-cover" />
          <button
            type="button"
            onClick={()=> router.push('')}
            className="absolute -bottom-3 left-12 lg:left-20 bg-red text-sm text-white rounded px-3"
          >
            &#163; {price}
          </button>
        </div>
        <div className="pt-4">
          <p className="text-lg text-red">{name}</p>
          <p className="text-sm text-gray">{description}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
