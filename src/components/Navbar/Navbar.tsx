import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants/constants.ts";
import { motion } from "framer-motion";
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
      <Link to="/" onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
        <motion.h2 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.5, type:"smooth" }}>
          Carlos | Software Engineer
        </motion.h2>
      </Link>
      <nav ref={navRef}>
        {navLinks.map((link: { id: string; title: string }, index: number) => (
          <motion.div key={link.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 + index * 0.2 , duration: 0.5, type:"smooth"}}>
            <div className={`navbar-button ${active === link.title ? "active-btn" : ""}`}>
              <a onClick={() => { setActive(link.title); showNavbar(); }} href={`#${link.id}`}>{link.title}</a>
            </div>
          </motion.div>
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
