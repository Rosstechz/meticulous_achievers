import Copyright from "../../components/Footer";
import Form from "../../components/Form";
import Map from "../../components/Map";

const Contact = () => {
  return (
    <>
      <section>
        <div className="h-[500px] border-b-2 border-teal-500 relative ">
          {/* Video Background */}
          <video
            src="/videos/earth_bg.mp4"
            loop
            autoPlay
            muted
            className="w-full h-full object-cover opacity-75"
          />

          {/* Teal Overlay */}
          <div className="absolute inset-0 bg-teal-500 opacity-50 mix-blend-hue" />

          {/* Title */}
          <div className="absolute text-white top-56 flex items-center justify-center w-full">
            <span className="text-7xl">
              Contact{" "}
              <span className="font-semibold text-teal-500 shadow-2xl">Us</span>
            </span>
          </div>
        </div>

        {/* Content Section */}
        <Form />

        {/* Map Section */}

        <Map />
      </section>

      <Copyright />
    </>
  );
};

export default Contact;
