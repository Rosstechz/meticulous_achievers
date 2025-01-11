import { TypeAnimation } from "react-type-animation";
import Links from "../Navbar/Links";
import { MdArrowForward } from "react-icons/md";

const Hero = () => {
  return (
    <section className="relative border-b-2 border-teal-500">
      <video
        className="h-screen w-full object-cover z-10"
        src="/videos/hero_bg.mp4"
        autoPlay
        muted
        loop
      />

      <div className="absolute top-0 h-screen bg-black/90 z-20  w-full text-white flex items-center justify-center">
        <div className=" max-h-[600px] w-full mx-2 flex flex-col text-white items-center justify-start py-10 relative">
          <div className="text-3xl sm:text-5xl text-center ">
            Innovative Solutions for
          </div>

          <div className="text-3xl sm:text-5xl lg:text-7xl flex justify-start font-semibold absolute mt-[100px]">
            <TypeAnimation
              className="text-teal-500"
              sequence={[
                "Digital Marketing",
                2000,
                "Content Creation",
                2000,
                "Web App Development",
                2000,
              ]}
              repeat={Infinity}
              cursor={false}
            />
          </div>

          <div className="mt-[130px] md:mt-[150px] text-lg sm:text-2xl  max-w-[420px] sm:max-w-[500px] md:max-w-[700px] xl:max-w-[1000px] xl:text-4xl flex text-justify leading-7 mx-2 font-thin p-1 xl:p-5 ">
            <p>
              At Meticulous Achievers, we bring your vision to life with
              innovative solutions tailored to your needs. From cutting-edge
              digital services and captivating art & design to transformative
              social marketing strategies, we empower businesses to thrive in
              the modern world. Partner with us to achieve excellence, unlock
              new opportunities, and set the benchmark for success.
            </p>
          </div>

          <button className="bg-teal-800 hover:text-white py-3 px-3 rounded-xl  mt-10 flex items-center gap-2  text-lg md:text-xl xl:text-2xl ">
            <Links href="/" label="Projects" />
            <span>
              <MdArrowForward size={20} className="text-teal-500" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
