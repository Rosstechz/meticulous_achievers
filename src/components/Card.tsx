import { IconType } from "react-icons";
import { FaArrowRight } from "react-icons/fa";

interface CardProps {
  title: string;
  description: string;
  icon: IconType;
}

const Card = ({ title, description, icon: Icon }: CardProps) => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-teal-800 backdrop-blur-lg border border-white/20 rounded-lg p-5 text-center text-white max-w-xs h-[350px] w-[500px] flex flex-col justify-between py-10 shadow-xl ">
      <div className="flex justify-between items-center">
        <span>
          {Icon && <Icon size={40} className="text-teal-500 mx-auto mb-3" />}
        </span>
        <span>
          <FaArrowRight size={30} />
        </span>
      </div>

      <div className="flex flex-col  justify-between h-full">
        <div className="text-3xl mb-5 text-start mt-16 text-teal-400">
          {title}
        </div>

        <div className="text-lg text-justify mb-10">{description}</div>
      </div>
    </div>
  );
};

export default Card;
