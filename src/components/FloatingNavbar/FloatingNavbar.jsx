import { useState } from "react";

import { BiHomeAlt, BiMessageDetail, BiBriefcaseAlt } from "react-icons/bi";
import { AiOutlineUser, AiOutlineAppstore } from "react-icons/ai";
import { GiStrong } from "react-icons/gi";
import "./FloatingNavbar.scss";

const FloatingNavbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <div className="app__floatingnavbar-icon-links">
      <a
        href="#home"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}>
        <BiHomeAlt />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}>
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}>
        <GiStrong />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}>
        <AiOutlineAppstore />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}>
        <BiBriefcaseAlt />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}>
        <BiMessageDetail />
      </a>
    </div>
  );
};

export default FloatingNavbar;
