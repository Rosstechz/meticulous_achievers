import { useState } from "react";
import { LiaBarsSolid } from "react-icons/lia";
import { RiCloseLargeFill } from "react-icons/ri";
import Logo from "./Logo";
import { BsBuildingFillGear, BsGrid } from "react-icons/bs";
import Links from "./Links";
import { FaHome } from "react-icons/fa";
import { AiFillInfoCircle } from "react-icons/ai";
import { MdContactPhone } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import SidebarItem from "./SidebarItem";
import { TfiEmail } from "react-icons/tfi";
import { LuPhone } from "react-icons/lu";
import { SiGooglemaps } from "react-icons/si";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const toggleNavbar = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="fixed w-full h-[120px] bg-gray-950/60 flex items-center justify-between rounded-b-3xl border-b border-b-teal-500 z-30">
        <div className="mx-2 lg:mx-5 flex items-center justify-between w-full lg:max-w-[1400px] xl:mx-5 2xl:mx-auto ">
          <div className="flex gap-3 text-xl items-center">
            <div>
              <Logo />
            </div>
          </div>

          <div className="hidden md:flex gap-5 xl:gap-10 items-center justify-center text-lg lg:text-xl">
            <Links href="/" label="Home" />
            <Links href="/" label="About Us" />
            <Links href="/" label="Services" />
            <Links href="/contact" label="Contact Us" />
          </div>

          <div className="flex items-center gap-2 ">
            <div
              onClick={toggleNavbar}
              className="cursor-pointer hover:text-teal-500 md:hidden"
            >
              <LiaBarsSolid size={25} />
            </div>

            <div>
              <BsGrid
                onClick={toggleSidebar}
                className="cursor-pointer hover:text-teal-500"
                size={25}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Navbar Menu */}

      <div
        className={`fixed md:hidden top-0 right-0 h-full w-[320px] bg-gray-950/95 border-l-2 border-teal-500 rounded-l-lg text-white shadow-lg transform ${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        } duration-300 z-30`}
      >
        <div className="h-full flex flex-col items-center">
          <div className="w-full p-5 flex items-center justify-between">
            <div>profile</div>
            <div
              onClick={toggleNavbar}
              className="cursor-pointer hover:text-teal-500"
            >
              <RiCloseLargeFill size={25} />
            </div>
          </div>

          <div className="flex flex-col items-center w-full justify-evenly h-5/6 text-lg">
            <Links href="/" label="Home" icon={FaHome} />
            <Links href="/about" label="About Us" icon={AiFillInfoCircle} />
            <Links
              href="/services"
              label="Services"
              icon={BsBuildingFillGear}
            />
            <Links href="/contact" label="Contact Us" icon={MdContactPhone} />
          </div>

          <div className="h-1/4 flex items-center justify-center w-full gap-10 text-lg">
            <div className="hover:text-teal-500 cursor-pointer">Login</div>
            <div className="hover:text-teal-500 cursor-pointer">Register</div>
          </div>

          <div className="flex text-base items-end justify-center h-2/4 py-5">
            copywright
          </div>
        </div>
      </div>

      {/* Sidebar */}

      <div
        className={`fixed top-0 right-0 h-full w-[320px] bg-gray-950/95 border-l-2 border-teal-500 text-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-30 rounded-l-lg `}
      >
        <div className="flex justify-end items-center mx-4 my-5">
          <button
            onClick={toggleSidebar}
            className="text-white hover:text-teal-500 cursor-pointer"
          >
            <IoMdClose size={25} />
          </button>
        </div>

        <div className="mt-20 text-white h-full flex flex-col justify-start gap-10">
          <SidebarItem
            icon={TfiEmail}
            label="Email"
            sublabel="mtaachievers@gmail.com"
          />

          <SidebarItem
            icon={LuPhone}
            label="Phone"
            sublabel="(+91) 8788771638"
          />

          <SidebarItem
            icon={SiGooglemaps}
            label="Address"
            sublabel="H.No 4-14-63,Nageshwarwadi, Ch Sambhajinagar"
          />

          <div className="flex justify-center items-center flex-col gap-5">
            <span className="text-xl">Stay Connected</span>

            <div className="flex gap-5">
              <div>
                <SocialLinks src="/images/x_twitter.png" href="/" />
              </div>

              <div>
                <SocialLinks src="/images/instagram_icon.png" href="/" />
              </div>

              <div>
                <SocialLinks src="/images/facebook_icon.png" href="/" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
