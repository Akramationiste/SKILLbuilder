import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Stat from './components/Stat'
import Carousel from './components/carousel/Carousel.jsx';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Carousel/>
    <Stat/>
    </div>
      
      
  )
}

export default App
