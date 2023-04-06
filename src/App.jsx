
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Carousel from './components/carousel/Carousel.jsx';
import "./App.css";
import Footer from "./components/footer/Footer.jsx";
import Stat from "./components/Stat";
import Cardaccueil from "./components/Cardaccueil";
import Hero from "./components/Hero";
import CalendrierTable from "./components/CalendrierTable";
import Cards from './components/cards/cards';


function App() {
  return (
    <div className="App">
   
  
    
      <Navbar />
      <Carousel/>
      <Cards/>
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
