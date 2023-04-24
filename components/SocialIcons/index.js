import { BsFacebook, BsPinterest } from "react-icons/bs";
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";

const SocialIcons = () => {
  return (
    <div className="flex text-xl text-gray gap-3 pt-2">
      <BsPinterest className="" />
      <AiOutlineInstagram />
      <AiOutlineInstagram />
      <AiFillTwitterCircle />
      <BsFacebook />
    </div>
  );
};

export default SocialIcons;
