import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="navbar bg-base-200 shadow-md">
      <div className="flex-1">
        <NavLink className="nav-style text-2xl" to={"/"}>
          🛫 Travel Agency
        </NavLink>
      </div>

      <div className="flex-none md:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            ☰
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-200 rounded-box shadow p-2 w-40"
          >
            <li>
              <NavLink className="nav-style" to={"/"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-style" to={"/about"}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-style" to={"/destinations"}>
                Destinations
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-style" to={"/contact"}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <nav className="hidden md:flex flex-1 justify-end">
        <ul className="gap-5 flex">
          <NavLink className="nav-style" to={"/"}>
            Home
          </NavLink>
          <NavLink className="nav-style" to={"/about"}>
            About
          </NavLink>
          <NavLink className="nav-style" to={"/destinations"}>
            Destinations
          </NavLink>
          <NavLink className="nav-style" to={"/contact"}>
            Contact
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
