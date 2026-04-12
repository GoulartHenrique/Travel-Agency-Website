import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="navbar bg-base-200 shadow-md">
      <NavLink className="nav-style text-2xl" to={"/"}>
        🛫 Travel Agency
      </NavLink>
      <nav className="flex flex-1 justify-end">
        <ul className=" gap-5 flex flex-wrap">
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
