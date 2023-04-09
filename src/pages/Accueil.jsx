import React from 'react'
// import Navbar from "../components/navbar/Navbar";
import Carousel from "../components/carousel/Carousel"
import Stat from "../components/Stat";
import Cardaccueil from "../components/Cardaccueil";
import Footer from "../components/footer/Footer.jsx";
import OurTeam from '../components/Team';




function Accueil () {
  return (
    <div>
        {/* <Navbar/> */}
        <Carousel/>
        <Stat/>
        <Cardaccueil/>
        <OurTeam/>
        <Footer/>
    </div>
  )
}

export default Accueil;