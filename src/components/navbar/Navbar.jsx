import { Link } from "react-router-dom";
import OffreFormations from "../../pages/OffreFormations"

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-bulea text-white">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">SkillsBuilders</a>
  </div>
  <div className="flex-none">
  <ul className="menu menu-horizontal px-1">
  <li><Link to={"./OffreFormations"}>Formations</Link></li>
  <li><Link to="./Events">Evènements</Link></li>
  <li><Link to="./Calendriern">Calendrier</Link></li>
</ul>
  </div>
</div>
    </>
  )
}
