import "./App.css";
import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Carousel from "./components/carousel/Carousel.jsx";
import "./App.css";
import Footer from "./components/footer/Footer.jsx";
import Stat from "./components/Stat";
import Cardaccueil from "./components/Cardaccueil";
import Hero from "./components/Hero";
import CalendrierTable from "./components/CalendrierTable";
import Cards from "./components/cards/cards";
import CalenderConf from "./components/CalenderConf";
import Splidecar from "./components/splidecar";
import OurTeam from "./components/Team";
import Cali from "./pages/Calendriern";
import Herocal from "./components/Herocal";
import Heroform from "./components/Heroform";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Cards />
      <Hero />
      <Stat />
      <Cardaccueil />
      <CalendrierTable />
      <CalenderConf />
      <OurTeam/>
      <Cali/>
      <Herocal/>
      <Heroform/>
      <Splidecar />
      <Footer />
    </div>
  );
}

export default App;
