import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/rklogo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="nav__logo" />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
