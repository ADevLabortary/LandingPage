import React from "react";
import { BsFacebook } from "react-icons/bs";
import logoPng from "../assets/logos/logo.svg";
import { footerLinks, footerSocialIcons } from "../constants/constants";
const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className=" max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
        <div className=" grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 text-center">
          {footerLinks.map((linkStack, index) => (
            <div key={index}>
              <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {linkStack.name}
              </h3>
              <ul className="text-black-500 dark:text-gray-400">
                {linkStack.links.map((link, index) => (
                  <li key={index} className="mb-4">
                    <a href={link.href} className=" hover:underline">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="text-center">
          <a
            href="#"
            className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              src={logoPng}
              className="h-6 mr-3 sm:h-9"
              alt="Landwind Logo"
            />
            Landwind
          </a>
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
            © 2021-2022 Landwind™. All Rights Reserved. Built by{" "}
            <a
              href="https://www.instagram.com/alrianvoice/"
              className="text-purple-600 hover:underline dark:text-purple-500"
              target="_blank"
            >
              Alrian
            </a>{" "}
            and{" "}
            <a
              href="https://www.instagram.com/syntaxhomeofficial/"
              className="text-purple-600 hover:underline dark:text-purple-500"
              target="_blank"
            >
              Syntax Home Technologies
            </a>
            .
          </span>
          <ul className="flex justify-center mt-5 space-x-5">
            {footerSocialIcons.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target="_blank"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
