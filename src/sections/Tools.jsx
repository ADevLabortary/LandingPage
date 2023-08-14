import React from "react";
import dashboardPng1 from "../assets/images/feature-1.png";
import dashboardPng2 from "../assets/images/feature-2.png";
import { firstFeatures, secondFeatures } from "../constants/constants";
import FeatureCard from "../components/FeatureCard";
const Tools = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <FeatureCard
        heading="Work with tools you already use"
        paragraph1="Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease."
        paragraph2="Deliver great service experiences fast - without the complexity of traditional ITSM solutions."
        features={firstFeatures}
        img={dashboardPng1}
        direction="right"
      />
      <FeatureCard
        heading="We invest in the world’s potential"
        paragraph1="Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions. Accelerate critical development
                work, eliminate toil, and deploy changes with ease."
        paragraph2="Deliver great service experiences fast - without the complexity of traditional ITSM solutions."
        features={secondFeatures}
        img={dashboardPng2}
        direction="left"
      />
    </section>
  );
};

export default Tools;
