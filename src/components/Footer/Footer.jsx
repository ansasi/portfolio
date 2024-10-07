import "./Footer.scss";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__footer">

      <a href="#home" className="app__footer-logo">
        Angel Sanchez
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
        <a href="https://www.linkedin.com/in/angelsanchezsierra" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
        <a href="https://github.com/ansasi" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>

      <div className="app__footer-copyright">
        <p>&copy;2022 Ansasi</p>
        <p>All rights reserved</p>
      </div>
    </motion.div>
  );
};

export default Footer;
