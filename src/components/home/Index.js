import React from "react";
import Hero from "./Hero";
import About from "./About";
import Products from "./Products";
import Members from "./Members";
import FormSection from "./form/Index";

const HomePage = () => {
  return (
    <div className="overflow-hidden relative">
      <Hero />
      <About />
      <Products />
      <Members />
      <FormSection />
    </div>
  );
};

export default HomePage;
