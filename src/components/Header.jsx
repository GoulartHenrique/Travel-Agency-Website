import { NavLink } from "react-router";
import { useState } from "react";
import { useTheme } from "../components/context/ThemeContext.jsx";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="navbar bg-base-200 shadow-md relative">
      <div className="flex-1">
        <NavLink className="nav-style text-2xl" to={"/"}>
          🛫 Travel Agency
        </NavLink>
      </div>

      <div className="flex-none md:hidden">
        <button className="btn btn-ghost" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        {isOpen && (
          <ul className="absolute right-0 top-16 z-10 bg-base-200 rounded-box shadow p-2 w-40">
            <li>
              <NavLink
                className="nav-style block"
                to={"/"}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-style block"
                to={"/about"}
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-style block"
                to={"/destinations"}
                onClick={() => setIsOpen(false)}
              >
                Destinations
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-style block"
                to={"/contact"}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        )}
        <button onClick={toggleTheme} className="btn btn-ghost text-xl">
          {isDark ? "☀️" : "🌙"}
        </button>
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
        <button onClick={toggleTheme} className="btn btn-ghost text-xl">
          {isDark ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
}
