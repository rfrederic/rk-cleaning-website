import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/rklogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="nav__logo" />
      </Link>

      <button className="nav__toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <ul className={`nav__links ${isOpen ? "nav__links--open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
