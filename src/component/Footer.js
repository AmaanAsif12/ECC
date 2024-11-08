import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-300 via-zinc-300 to-gray-400 text-black py-12">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-12">
          {/* Logo and Branding */}
          <div className="mb-6 lg:mb-0">
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3"
            >
              <span className="text-4xl font-bold uppercase tracking-wide">ecommerce</span>
            </a>
            <p className="mt-2 text-lg text-gray-800">
              Innovative solutions for modern problems.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="mb-6 lg:mb-0">
              <h3 className="text-2xl font-semibold mb-4">Company</h3>
              <ul>
                <li>
                  {" "}
                  <Link
                    to="/"
                    className="text-white hover:text-gray-300 py-2 lg:py-0"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="text-white hover:text-gray-300 py-2 lg:py-0"
                  >
                    SignUp
                  </Link>
                </li>
                <li>
                  <Link
                    to="/addproduct"
                    className="text-white hover:text-gray-300 py-2 lg:py-0"
                  >
                    AddProduct
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signin"
                    className="text-white hover:text-gray-300 py-2 lg:py-0"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-6 lg:mb-0">
              <h3 className="text-2xl font-semibold mb-4">Support</h3>
              <ul>
                <li>
                  <a href="#" className="hover:underline text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section with Navbar Links */}
        <div className="border-t border-gray-400 pt-6 flex flex-col lg:flex-row lg:justify-between lg:items-center">
        </div>
      </div>
    </footer>
  );
};

export default Footer;
