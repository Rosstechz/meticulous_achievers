import { RiSettings2Fill } from "react-icons/ri";
import Links from "../../../components/Navbar/Links";
import Banner from "./Banner";
import { MdArrowForward } from "react-icons/md";
import Card from "../../../components/Card";
import { SiAntdesign, SiCoinmarketcap } from "react-icons/si";

const Services = () => {
  return (
    <section>
      {/* banner */}
      <Banner />

      <div className="h-3/4 flex flex-col gap-20 mt-10">
        <div className="pt-10 flex flex-col sm:items-center gap-5">
          <h3 className="flex items-center gap-1 text-xl lg:text-2xl  ">
            <RiSettings2Fill size={20} className="text-teal-500" />
            <span>OUR SERVICES</span>
          </h3>
          <h1 className="text-3xl mt-10 lg:text-5xl">
            Our <span className="text-teal-500">Digital Services</span> to grow
            your brand
          </h1>
        </div>

        <div className="flex flex-col gap-5 max-w-[500px] lg:max-w-[600px] mx-auto sm:items-center">
          <p className="text-lg lg:text-xl ">
            Our digital services empower brands with innovative strategies and
            solutions for sustainable growth and engagement.
          </p>

          <div className="flex justify-center mt-10">
            <button className="bg-teal-700 px-5 py-3 rounded-xl flex items-center gap-2 text-lg">
              <Links href="/services" label="Services" />
              <MdArrowForward size={20} className="text-teal-500" />
            </button>
          </div>
        </div>

        <div className="w-full  h-full flex items-center justify-center mb-10">
          <div className="w-full flex flex-wrap justify-evenly mb-16 gap-10 ">
            <Card
              title="Web Design"
              description="Stunning and responsive websites to boost your brand's digital presence."
              icon={SiAntdesign}
            />
            <Card
              title="Digital Marketing"
              description="Effective strategies to improve your brand's online visibility and reach."
              icon={SiCoinmarketcap}
            />
            <Card
              title="SEO Optimization"
              description="Enhance your website's search engine ranking to attract more customers."
              icon={RiSettings2Fill}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
