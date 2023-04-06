import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Stat from "./components/Stat";
import Cardaccueil from "./components/Cardaccueil";
import Hero from "./components/Hero";
import CalendrierTable from "./components/CalendrierTable";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stat />
      <Cardaccueil />
      <div>
        <CalendrierTable />

      </div>
      <Footer />
    </div>
  );
}

export default App;
