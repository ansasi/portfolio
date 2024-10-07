import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navbarLinks = ["home", "about", "skills", "portfolio", "experience", "contact"];

  return (
    <nav className="app__navbar">
      <a className="app__navbar-logo" href={"#home"}>
        ANGEL
      </a>
      <ul className="app__navbar-links">
        {navbarLinks.map((link) => (
          <li className="app__flex p-text" key={`link-${link}`}>
            <div />
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenu onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}>
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navbarLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link}`} onClick={() => setToggle(false)}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
