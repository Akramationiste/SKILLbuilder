import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div>
        <div className="navbar bg-bulea text-white">
          <div className="flex-1">
          <NavLink to="/" className="btn btn-ghost normal-case text-xl">SkillBulider</NavLink>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink to="/OffreFormations">Formations</NavLink>
              </li>
              <li>
                <NavLink to="/Events">Evènements</NavLink>
              </li>
              <li>
                <NavLink to="/Calendriern">Calendrier</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <main className="">
          <Outlet />
        </main>
      </div>
    </>
  );
}
