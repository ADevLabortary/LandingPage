import "./App.css";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Sponsers from "./sections/Sponsers";
import Testimonials from "./sections/Testimonials";
import Tools from "./sections/Tools";
import Trusted from "./sections/Trusted";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import TrialSection from "./sections/TrialSection";
import Footer from "./sections/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate("/login-page");
    }
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Sponsers />
      <Tools />
      <Trusted />
      <Testimonials />
      <Pricing />
      <FAQ />
      <TrialSection />
      <Footer />
    </>
  );
}

export default App;
