import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/Hero";
import CalenderConf from "../components/CalenderConf";
import Splidecar from "../components/Splidecar";
import Footer from "../components/footer/Footer.jsx";

function Events() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CalenderConf/>
      <Splidecar/>
      <Footer />
    </div>
  );
}

export default Events;
