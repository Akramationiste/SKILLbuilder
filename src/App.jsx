import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Accueil from "./pages/Accueil";
import Calendriern from "./pages/Calendriern";
import OffreFormations from "./pages/OffreFormations";
import Events from "./pages/Events";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar/>}>
        <Route index element={<Accueil/>}/>
      <Route path="/OffreFormations" element={<OffreFormations />} />
      <Route path="/Events" element={<Events />} />
      <Route path="/Calendriern" element={<Calendriern />} />
    </Route>
  )
);

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

// import Navbar from "./components/navbar/Navbar.jsx";
// import Carousel from "./components/carousel/Carousel.jsx";
// import Footer from "./components/footer/Footer.jsx";
// import Stat from "./components/Stat";
// import Cardaccueil from "./components/Cardaccueil";
// import Hero from "./components/Hero";
// import CalendrierTable from "./components/CalendrierTable";
// import Cards from "./components/cards/cards";
// import CalenderConf from "./components/CalenderConf";
// import Splidecar from "./components/splidecar";
// import OurTeam from "./components/Team";
// import Cali from "./pages/Calendriern";
// import Herocal from "./components/Herocal";
// import Heroform from "./components/Heroform";
// import Event from "./components/event";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Carousel/>
//       <Cards/>
//       <Event/>
//       <Hero />
//       <Stat />
//       <Cardaccueil />
//       <CalendrierTable />
//       <CalenderConf />
//       <OurTeam/>
//       <Cali/>
//       <Herocal/>
//       <Heroform/>
//       <Splidecar />
//       <Footer />
//     </div>
//   );
// }

// export default App;
