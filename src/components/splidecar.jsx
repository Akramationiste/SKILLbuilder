import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Imo from "./images/splider.webp";

// Default theme
import '@splidejs/react-splide/css';


// // or other themes
// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';


// // or only core styles
// import '@splidejs/react-splide/css/core';

function Splidecar() {
  return (
    <div className="flex gap-8 flex-col p-8 bg-bulea mt-6 mb-6" >
      <Splide aria-label="My Favorite Images" options={{}}>
        <SplideSlide>
          <img className= "rounded-3xl" src={Imo} alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img className= "rounded-3xl" src={Imo} alt="Image 2" />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Splidecar;
