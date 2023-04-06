import React from "react";
import fom from "./images/fromat.jpg";

function Heroform() {
  return (
    <div>
      <div className="hero min-h-screen hero-overlay  bg-bulea">
        <img className="w-screen" src={fom}></img>
        <div className="hero-overlay "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primar bg-bulea hover:bg-bluea hover:text-bulea">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heroform;
