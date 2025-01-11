import { Link } from "react-router-dom";

interface SocialLinksProps {
  src: string;
  href: string;
}

const SocialLinks = ({ src, href }: SocialLinksProps) => {
  return (
    <Link to={href}>
      <img
        className="size-10 bg-teal-500 rounded-full p-1 cursor-pointer"
        src={src}
        alt="social logo"
      />
    </Link>
  );
};

export default SocialLinks;
