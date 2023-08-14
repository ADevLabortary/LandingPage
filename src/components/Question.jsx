import React from "react";
import { useState } from "react";
import { IoIosArrowUp,IoIosArrowDown } from "react-icons/io";

const Question = ({ question, answer }) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div onClick={handleClick}>
      {" "}
      <h3 id="accordion-flush-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          data-accordion-target="#accordion-flush-body-1"
          aria-expanded="true"
          aria-controls="accordion-flush-body-1"
        >
          <span>{question}</span>
          {!active ? (
            
              <IoIosArrowDown className="text-center justify-center items-center text-xl" />
          ) :  ( <IoIosArrowUp className="text-center justify-center items-center text-xl" />)}
        </button>
      </h3>
      <div
        id="accordion-flush-body-1"
        className=""
        aria-labelledby="accordion-flush-heading-1"
      >
        <div
          className={`py-5 border-b border-gray-200 dark:border-gray-700 ${
            !active ? "hidden" : ""
          }`}
        >
          <p className="mb-2 text-gray-500 dark:text-gray-400 ">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Question;
