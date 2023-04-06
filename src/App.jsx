<<<<<<< HEAD
import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Stat from './components/Stat'
import Carousel from './components/carousel/Carousel.jsx';
=======
import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Stat from "./components/Stat";
import Cardaccueil from "./components/Cardaccueil";
import Hero from "./components/Hero";
import CalendrierTable from "./components/CalendrierTable";
>>>>>>> 03e2b4c02fde0783c8d49a76346ef6a99867c2ad


function App() {
  return (
    <div className="App">
<<<<<<< HEAD
    <Navbar/>
    <Carousel/>
    <Stat/>
=======
      <Navbar />
      <Hero />
      <Stat />
      <Cardaccueil />
      <div>
        <CalendrierTable />

      </div>
      <Footer />
>>>>>>> 03e2b4c02fde0783c8d49a76346ef6a99867c2ad
    </div>
  );
}

export default App;
