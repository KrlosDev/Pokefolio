import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants/constants.ts";
import "./navbar.css";

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);

  const showNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };
  const [active, setActive] = useState("");

  return (
    <header>
      <Link
        to="/"
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}
      >
        <h2>Carlos | Software Engineer</h2>
      </Link>
      <nav ref={navRef}>
        {navLinks.map((link: { id: string; title: string }) => (
          <div key={link.id} className={`navbar-button ${active === link.title ? "active-btn":""}`}>
            <a onClick={() => { setActive(link.title); showNavbar(); }} href={`#${link.id}`}>{link.title}</a>
          </div>
        ))}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
