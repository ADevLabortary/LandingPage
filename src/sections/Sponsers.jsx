import React from "react";
import { sponsers } from "../constants/constants";

const Sponsers = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl py-3 px-4 pb-8 mx-auto lg:pb-16">
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          {sponsers.map((sponser, index) => (
            <div className="text-[100px] flex justify-center flex-col items-center" key={index}>
              {sponser.icon}
              <h3 className="text-lg text-center font-bold py-4 " >{sponser.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsers;
