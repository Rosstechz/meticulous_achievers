import { useState } from "react";

interface FormProps {
  firstName: string;
  lastName: string;
  email: string;
  mobile: number;
  companyName?: string;
  services: string;
}

const Form = () => {
  const [formData, setFormData] = useState<FormProps>({
    firstName: "",
    lastName: "",
    email: "",
    mobile: 0,
    companyName: "",
    services: "",
  });

  const servicesList = [
    "Digital Marketing",
    "Web App Development",
    "Ecommerce Development",
    "Branding",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "mobile" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-gradient-to-br from-gray-900 to-teal-800 rounded-xl shadow-lg p-8 space-y-6 border-2 border-teal-500 md:mt-20"
      >
        <div className="w-full flex items-center justify-center">
          <img src="/images/logo.png" className="size-20" alt="form logo" />
        </div>
        <p className="text-center text-white text-lg">
          We'd love to hear from you. Please fill out the form below.
        </p>

        {/* First Name */}
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm md:text-lg font-medium text-white"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="Enter your first name"
            className="mt-1 w-full border rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-teal-500 focus:outline-none"
          />
        </div>

        {/* Last Name */}
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm md:text-lg font-medium text-white"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Enter your last name"
            className="mt-1 w-full border rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-teal-500 focus:outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm md:text-lg font-medium text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="mt-1 w-full border rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-teal-500 focus:outline-none"
          />
        </div>

        {/* Mobile */}
        <div>
          <label
            htmlFor="mobile"
            className="block text-sm md:text-lg font-medium text-white"
          >
            Mobile
          </label>
          <input
            type="number"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            placeholder="Enter your mobile number"
            className="mt-1 w-full border rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-teal-500 focus:outline-none"
          />
        </div>

        {/* Company Name */}
        <div>
          <label
            htmlFor="companyName"
            className="block text-sm md:text-lg font-medium text-white"
          >
            Company Name (Optional)
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName || ""}
            onChange={handleChange}
            placeholder="Enter your company name"
            className="mt-1 w-full border rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-teal-500 focus:outline-none"
          />
        </div>

        {/* Services Dropdown */}
        <div>
          <label
            htmlFor="services"
            className="block text-sm md:text-lg font-medium text-white"
          >
            Select a Service
          </label>
          <select
            id="services"
            name="services"
            value={formData.services}
            onChange={handleChange}
            required
            className="mt-1 w-full border rounded-lg px-4 py-2 text-gray-700 bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
          >
            <option value="" disabled>
              Choose a service
            </option>
            {servicesList.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white font-semibold py-3 rounded-lg shadow hover:bg-teal-600 focus:ring-2 focus:ring-teal-500 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
