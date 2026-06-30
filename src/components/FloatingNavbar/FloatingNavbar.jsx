import { useState } from "react";

import { BiHomeAlt, BiMessageDetail, BiBriefcaseAlt } from "react-icons/bi";
import { AiOutlineUser, AiOutlineAppstore } from "react-icons/ai";
import { GiStrong } from "react-icons/gi";
import "./FloatingNavbar.scss";

const FloatingNavbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav className="app__floatingnavbar-icon-links" aria-label="Primary">
      <a
        href="#home"
        aria-label="Home"
        aria-current={activeNav === "#" ? "page" : undefined}
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}>
        <BiHomeAlt />
      </a>
      <a
        href="#about"
        aria-label="About"
        aria-current={activeNav === "#about" ? "page" : undefined}
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}>
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        aria-label="Skills"
        aria-current={activeNav === "#skills" ? "page" : undefined}
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}>
        <GiStrong />
      </a>
      <a
        href="#portfolio"
        aria-label="Portfolio"
        aria-current={activeNav === "#portfolio" ? "page" : undefined}
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}>
        <AiOutlineAppstore />
      </a>
      <a
        href="#experience"
        aria-label="Experience"
        aria-current={activeNav === "#experience" ? "page" : undefined}
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}>
        <BiBriefcaseAlt />
      </a>
      <a
        href="#contact"
        aria-label="Contact"
        aria-current={activeNav === "#contact" ? "page" : undefined}
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}>
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default FloatingNavbar;
