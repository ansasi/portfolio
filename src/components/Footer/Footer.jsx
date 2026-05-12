import "./Footer.scss";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";

import { Settings } from "../../constants/defaultData";

const FOOTER_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  return (
    <motion.footer
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__footer"
      aria-label="Site footer"
    >
      <a href="#home" className="app__footer-logo">
        {Settings.fullName}
      </a>

      <nav aria-label="Footer navigation">
        <ul className="app__footer-links">
          {FOOTER_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="app__footer-socials">
        <a
          href={Settings.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="Visit LinkedIn profile (opens in new tab)"
        >
          <BsLinkedin aria-hidden="true" />
        </a>
        <a
          href={Settings.github}
          target="_blank"
          rel="noreferrer"
          aria-label="Visit GitHub profile (opens in new tab)"
        >
          <FaGithub aria-hidden="true" />
        </a>
      </div>

      <div className="app__footer-copyright">
        <p>
          &copy; {new Date().getFullYear()} {Settings.fullName}
        </p>
        <p>All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
