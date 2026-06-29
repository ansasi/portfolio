import "./Footer.scss";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";

import { Settings } from "../../constants/defaultData";

const Footer = () => {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__footer">

      <a href="#home" className="app__footer-logo">
        {Settings.fullName}
      </a>

      <ul className="app__footer-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="app__footer-socials">
        <a href={Settings.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <BsLinkedin />
        </a>
        <a href={Settings.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
      </div>

      <div className="app__footer-copyright">
        <p>&copy;{new Date().getFullYear()} {Settings.fullName}</p>
        <p>All rights reserved</p>
      </div>
    </motion.div>
  );
};

export default Footer;
