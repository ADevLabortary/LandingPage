import React from "react";
import Question from "../components/Question";
const FAQ = () => {
  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
          Frequently asked questions
        </h2>
        <div className="max-w-screen-md mx-auto">
          <div
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400"
          >
            <Question
              question="Can I use Landwind in open-source projects?"
              answer=" Landwind is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
            Get started and start developing websites even faster with components on top of
            Tailwind CSS."
            />
            <Question
              question="Is there a Figma file available?"
              answer=" Landwind is first conceptualized and designed using the
                Figma software so everything you see in the library has a
                design equivalent in our Figma file.
                based on the utility classes from Tailwind CSS and
                components from Landwind."
            />
            <Question
              question="What are the differences between Landwind and Tailwind UI?"
              answer=" Landwind is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
            Get started and start developing websites even faster with components on top of
            Tailwind CSS."
            />
            <Question
              question="What about browser support?"
              answer="The main difference is that the core components from
                Landwind are open source under the MIT license, whereas
                Tailwind UI is a paid product. Another difference is that
                Landwind relies on smaller and standalone components,
                whereas Tailwind UI offers sections of pages."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
