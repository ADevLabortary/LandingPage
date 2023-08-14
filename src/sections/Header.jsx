import React from "react";
import navBarLogo from "../assets/logos/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { downloadLink, navLinks } from "../constants/constants";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate()
  const [active, setActive] = useState(false);
  const handleHamburgerClick = () => {
    setActive(!active);
  };
const handleLogOut =()=> {
  localStorage.removeItem('token')
  navigate('/login-page')
}

  return (
    <header className="fixed w-full">
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a href="#" className="flex items-center">
            <img
              src={navBarLogo}
              className="h-6 mr-3 sm:h-9"
              alt="Landwind Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Landwind
            </span>
          </a>
          <div className="flex items-center lg:order-2">
           {!localStorage.getItem('token') ? (<Link
              to="/login-page"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Log in
            </Link>):(<button
              onClick={handleLogOut}
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Log out
            </button>) }
            <a
              href={downloadLink}
              className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
            >
              Download
            </a>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={handleHamburgerClick}
            >
              <GiHamburgerMenu className="w-6 h-6" />
            </button>
          </div>
          <div
            className={`items-center justify-between 
              ${!active ? "hidden" : ""}
             w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <a
                      href="#"
                      className="flex my-1 py-2 pl-3 pr-4 text-black bg-purple-100 rounded-lg lg:bg-transparent hover:text-yellow-500 lg:text-black lg:p-0"
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
