import React from "react";
import Hero from "./Hero";
import About from "./About";
import Products from "./Products";
import Members from "./Members";
import FormSection from "./form/Index";

const HomePage = ({ arabic }) => {
  return (
    <div className="overflow-hidden relative">
      <Hero arabic={arabic} />
      <div className="relative z-[2] overflow-hidden">
        <About arabic={arabic} />

        <Products arabic={arabic} />
      </div>
      <Members arabic={arabic} />
      <FormSection arabic={arabic} />
    </div>
  );
};

export default HomePage;
