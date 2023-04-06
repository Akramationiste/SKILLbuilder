import "./App.css";
import Carousel from "./components/carousel/Carousel.jsx";

import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Stat from "./components/Stat";
import Cardaccueil from "./components/Cardaccueil";
import Hero from "./components/Hero";
import CalendrierTable from "./components/CalendrierTable";
import CalenderConf from "./components/CalenderConf";

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Carousel />
      <Hero />
      <Stat />
      <Cardaccueil />
      <div>
        <CalendrierTable />
        <CalenderConf/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
