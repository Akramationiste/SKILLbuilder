import React from "react";
import Eventspic from "./images/Rectangle5.png";
import Caloun from "./images/Rectangle6.png";
import Form from "./images/Rectangle3.png";
import Carr from "./images/Rectangle4.png";

function Cardaccueil() {
  return (
    <div className="flex gap-8 flex-col p-24">
      <div className="card lg:card-side bg-base-100 shadow-xl object-contain">
        <figure>
          <img src={Eventspic} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Des ateliers et de workshops enrichissants</h2>
          <p>Click the button to listen on Spotiwhy<br/> app. Click the button to listen on <br/> Spotiwhy app. 
            Click the button to listen on Spotiwhy app.<br/> app. Click the button to listen on <br/> Spotiwhy app. 
            Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primar bg-bulea hover:bg-bluea hover:text-bulea">Découvrir nos évènnements</button>
          </div>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl object-contain">
        <figure>
          <img src={Caloun} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Des évènements et des conférences variriées</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
          <button className="btn btn-primar bg-bulea hover:bg-bluea hover:text-bulea">Voir le Calendrier</button>
          </div>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={Form} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Des formations dans tous les domaines</h2>
          <p>Click the button to listen on Spotiwhy<br/> app. Click the button to listen on <br/> Spotiwhy app. 
            Click the button to listen on Spotiwhy app.<br/> app. Click the button to listen on <br/> Spotiwhy app. 
            Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
          <button className="btn btn-primar bg-bulea hover:bg-bluea hover:text-bulea">S'inscrire dans une formation</button>
          </div>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={Carr} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Construire un chemin de  !</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
          <button className="btn btn-primar bg-bulea hover:bg-bluea hover:text-bulea">Commencer une carrière</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardaccueil;
