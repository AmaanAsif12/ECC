import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddCart from "./AddCart";
import { logout } from "../config/firebase";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full h-[80px] bg-white text-gray-800 flex items-center justify-between px-4 md:px-8 shadow-lg z-50">
      <div className="text-3xl uppercase font-bold tracking-tight text-gray-900">
      ecommerce
      </div>

      <button
        className="block lg:hidden px-4 py-2 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-gray-900 transition-transform transform hover:scale-110"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <nav
        className={`lg:flex lg:items-center lg:space-x-8 fixed lg:relative top-0 left-0 w-full h-full lg:h-auto bg-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:flex-row lg:justify-between lg:space-x-6 z-40`}
      >
        <button
          className="lg:hidden absolute top-5 right-6 p-2 text-gray-900 hover:text-gray-600"
          onClick={closeMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <ul className="flex flex-col lg:flex-row lg:items-center justify-center lg:space-x-8 mt-20 lg:mt-0 lg:flex-grow">
          <li>
            <Link
              to="/"
              className="flex justify-center gap-1 items-center px-5 py-3 text-gray-900 bg-gray-200 hover:bg-gray-300 hover:text-black font-semibold rounded-lg shadow-sm transition duration-300 m-2"
              onClick={closeMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h18M3 6h18M3 14h18M3 18h18"
                />
              </svg>
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="flex justify-center gap-3 items-center px-5 py-3 text-gray-900 bg-gray-200 hover:bg-gray-300 hover:text-black font-semibold rounded-lg shadow-sm transition duration-300 m-2"
              onClick={closeMenu}
            >
              <svg
                class="h-6 w-6 text-black"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="7" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
              SignUp
            </Link>
          </li>
          <li>
            <Link
              to="/addproduct"
              className="flex justify-center gap-1 items-center px-5 py-2 text-gray-900 bg-gray-200 hover:bg-gray-300 hover:text-black font-semibold rounded-lg shadow-sm transition duration-300 m-2"
              onClick={closeMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v8m4-4H8"
                />
              </svg>
              AddProduct
            </Link>
          </li>
          <li>
            <Link
              to="/signin"
              className="flex justify-center gap-3 items-center px-5 py-3 text-gray-900 bg-gray-200 hover:bg-gray-300 hover:text-black font-semibold rounded-lg shadow-sm transition duration-300 m-2"
              onClick={closeMenu}
            >
              <svg
                class="h-6 w-6 text-black"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="7" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="flex justify-center gap-3 items-center px-5 py-3 text-gray-900 bg-gray-200 hover:bg-gray-300 hover:text-black font-semibold rounded-lg shadow-sm transition duration-300 m-2"
              onClick={()=>logout()}
            >
              <svg
                class="h-6 w-6 text-black"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="7" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
              Logout
            </Link>
          </li>
        </ul>

        <div className="mt-4 lg:mt-0 flex justify-center">
          <AddCart />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
