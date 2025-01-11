import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface LinkProps {
  href: string;
  label: string;
  icon?: IconType;
}

const Links = ({ href, label, icon: Icon }: LinkProps) => {
  return (
    <Link
      className={`text-white hover:text-teal-500 flex ${
        Icon ? "flex items-center justify-center gap-3" : "items-start"
      }`}
      to={href}
    >
      {Icon && <Icon size={24} />}
      <div>{label}</div>
    </Link>
  );
};

export default Links;
