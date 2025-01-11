const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-teal-500 to-gray-900 text-white py-4 mt-56">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        <p className="text-sm sm:text-base text-center sm:text-left">
          &copy; {currentYear} Meticulous Achivevers Pvt Ltd. All rights
          reserved.
        </p>
        <ul className="flex gap-4 mt-2 sm:mt-0">
          <li>
            <a
              href="/"
              className="text-teal-300 hover:underline text-sm sm:text-base"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-teal-300 hover:underline text-sm sm:text-base"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-teal-300 hover:underline text-sm sm:text-base"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Copyright;
