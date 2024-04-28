"use client";
import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
const Layout = ({ children, arabic }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);
  return (
    <div className={arabic ? "rtl" : "ltr"}>
      <Header arabic={arabic} />
      <main>{children}</main>
      <Footer arabic={arabic} />
    </div>
  );
};

export default Layout;
