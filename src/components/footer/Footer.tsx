import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoYoutube,
} from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Verify", key: "/varify" },
  { label: "About Us", key: "/about" },
];

const legalItems = [
  { label: "Privacy Policy", key: "/privacy" },
  { label: "Terms & Condition", key: "/terms" },
  { label: "Refund Policy", key: "/refund" },
];

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#0a0a0a]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="w-full px-4 py-4 bg-white dark:bg-[#0a0a0a]">
          <div className="max-w-screen-xl mx-auto md:flex md:justify-between md:items-start">
            {/* Logo Section */}
            <div className="mb-10 md:mb-0 md:w-1/4 px-4 -mt-2">
              <a href="/" className="flex items-center">
                <img
                  src="../image/variation.png"
                  className="h-8 me-3"
                  alt="Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white mb-3">
                  MyTicketBD
                </span>
              </a>
              <p className="text-justify">
                MytikitBD is a smart, fast, and user-friendly online ticketing
                platform designed to make ticket purchasing easier than ever for
                people across Bangladesh.
              </p>
            </div>

            {/* Links and Newsletter */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:w-3/4 md:pl-40">
              {/* Resources */}
              <div className="items-center">
                <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white items-center">
                  Resources
                </h2>
                <nav className="flex flex-col sm:flex-col space-x-6 text-base space-y-2">
                  {navItems.map(({ label, key }) => (
                    <NavLink
                      to={key}
                      className={({ isActive }) =>
                        `relative font-medium transition hover:text-gray-900 dark:hover:text-gray-400 ${
                          isActive
                            ? "text-black dark:text-white"
                            : "text-gray-600 dark:text-white "
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  ))}
                </nav>
              </div>

              {/* Legal */}
              <div>
                <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>

                <nav className="flex flex-col space-x-6 text-base space-y-2">
                  {legalItems.map(({ label, key }) => (
                    <NavLink
                      to={key}
                      className={({ isActive }) =>
                        `relative font-medium transition hover:text-gray-900 dark:hover:text-gray-400 ${
                          isActive
                            ? "text-black dark:text-white"
                            : "text-gray-600 dark:text-white "
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  ))}
                </nav>
              </div>

              {/* Newsletter */}
              <div>
                <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Newsletter
                </h2>
                <form className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    autoComplete="email"
                    className="w-full flex-auto rounded-md border border-gray-300 bg-white px-3.5 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto rounded-md bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Subscribe
                  </button>
                </form>
                <p>BIN: 002322637-0208</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="https://variationbd.com/" className="hover:underline">
              Powered by- Variation Communications Ltd.
            </a>
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 items-center gap-2">
            <Link to="">
              <BiLogoFacebook className="w-6 h-6 text-gray-600 hover:text-blue-800" />
            </Link>

            <Link to="">
              <BiLogoInstagram className="w-6 h-6 text-gray-600 hover:text-orange-500" />
            </Link>
            {/* <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a> */}
            <Link to="">
              <BiLogoLinkedin className="w-6 h-6 text-gray-600 hover:text-blue-500" />
            </Link>

            <Link to="">
              <BiLogoYoutube className="w-6 h-6 mt-1 text-gray-600 hover:text-red-500" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
