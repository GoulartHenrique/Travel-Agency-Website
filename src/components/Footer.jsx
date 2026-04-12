import { NavLink } from "react-router";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" mt-10 footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
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
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            className="border-style p-1"
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter size={24} />
          </a>
          <a
            className="border-style p-1"
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube size={24} />
          </a>
          <a
            className="border-style p-1"
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook size={24} />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <NavLink to={"/"}>Travel Agency</NavLink>
        </p>
      </aside>
    </footer>
  );
}
