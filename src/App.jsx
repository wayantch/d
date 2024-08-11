import About from "./assets/components/About/About";
import Hero from "./assets/components/Hero/Hero";
import Navbar from "./assets/components/Navbar/Navbar";
import Project from "./assets/components/Project/Project";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./assets/components/Contact/Contact";
import Footer from "./assets/components/Footer/Footer";

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      offset: 100,
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
