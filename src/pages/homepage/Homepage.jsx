import React from "react";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/Herosection/Hero";
import Navbar from "../../components/Navbar/Navbar";
import OurServices from "../../components/OurServicesSection/OurServices";

function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurServices />
      <Footer />
    </>
  );
}

export default Homepage;
