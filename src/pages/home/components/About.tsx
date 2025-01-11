const About = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-teal-500 text-2xl lg:text-3xl font-medium">
            About Us
          </h3>
          <h1 className="text-4xl lg:text-5xl font-bold mt-2">Who We Are</h1>
          <p className="text-lg mt-4 max-w-4xl mx-auto">
            At <span className="text-teal-500">Meticulous Achievers</span>, we
            are a team of innovators, strategists, and creators dedicated to
            helping brands thrive in the digital age. We believe in crafting
            meaningful experiences and building lasting relationships with our
            clients.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="flex flex-col lg:flex-row gap-10 mb-16">
          {/* Mission */}
          <div className="flex-1 bg-gray-950 border-2 border-teal-500 text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-500 mb-4">
              Our Mission
            </h2>
            <p>
              To empower businesses with cutting-edge digital strategies and
              solutions that drive sustainable growth and meaningful engagement
              in an ever-evolving marketplace.
            </p>
          </div>
          {/* Vision */}
          <div className="flex-1 bg-gray-950 border-2 border-teal-500 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-500 mb-4">
              Our Vision
            </h2>
            <p>
              To become a global leader in the digital marketing space by
              fostering innovation, creativity, and client success at every
              step.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-teal-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-teal-500 font-bold text-xl mb-3">
                Innovation
              </h3>
              <p>
                We embrace creativity and cutting-edge technologies to deliver
                unmatched solutions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-teal-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-teal-500 font-bold text-xl mb-3">
                Transparency
              </h3>
              <p>
                Honesty and open communication are the foundation of our client
                relationships.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-teal-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-teal-500 font-bold text-xl mb-3">
                Collaboration
              </h3>
              <p>
                We work closely with clients to understand their unique needs
                and challenges.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-teal-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-teal-500 font-bold text-xl mb-3">
                Excellence
              </h3>
              <p>
                We strive for excellence in everything we do, delivering results
                that exceed expectations.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-teal-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-teal-500 font-bold text-xl mb-3">
                Customer-Centric
              </h3>
              <p>
                Our clients are at the heart of everything we do, and their
                success is our success.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-teal-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-teal-500 font-bold text-xl mb-3">
                Adaptability
              </h3>
              <p>
                We stay agile and adaptable, ensuring our strategies align with
                market trends.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Let’s Grow Together</h2>
          <p className="text-lg mb-6">
            Ready to take your brand to new heights? Let’s create something
            extraordinary together.
          </p>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
