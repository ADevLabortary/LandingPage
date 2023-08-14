import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const FeatureCard = ({
  heading,
  paragraph1,
  paragraph2,
  features,
  img,
  direction,
}) => {
  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
      {/* <!-- Row --> */}
      <div className={`items-center ${direction==="left"? "flex-row-reverse": ""} gap-8 lg:flex xl:gap-16`}>
        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {heading}
          </h2>
          <p className="mb-8 font-light lg:text-xl">{paragraph1}</p>
          {/* <!-- List --> */}
          <ul
            role="list"
            className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
          >
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center text-green-600 space-x-3"
              >
                {/* <!-- Icon --> */}

                <BsFillCheckCircleFill />
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
          <p className="mb-8 font-light lg:text-xl">{paragraph2}</p>
        </div>
        <img
          className="hidden w-full max-w-[650px] mb-4 rounded-lg lg:mb-0 lg:flex"
          src={img}
          alt="dashboard feature image"
        />
      </div>
    </div>
  );
};

export default FeatureCard;
