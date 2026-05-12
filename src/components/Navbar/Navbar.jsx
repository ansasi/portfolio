import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

import "./Navbar.scss";

const NAVBAR_LINKS = ["home", "about", "skills", "portfolio", "experience", "contact"];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = NAVBAR_LINKS.map((id) => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!toggle) return undefined;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [toggle]);

  return (
    <nav className="app__navbar" aria-label="Primary">
      <a className="app__navbar-logo" href="#home">
        ANGEL
      </a>
      <ul className="app__navbar-links">
        {NAVBAR_LINKS.map((link) => (
          <li className="app__flex p-text" key={`link-${link}`}>
            <div aria-hidden="true" />
            <a href={`#${link}`} aria-current={active === link ? "page" : undefined}>
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={toggle}
          aria-controls="mobile-menu"
          onClick={() => setToggle(true)}
        >
          <HiMenu aria-hidden="true" />
        </button>

        <AnimatePresence>
          {toggle && (
            <motion.div
              id="mobile-menu"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 200, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <button
                type="button"
                aria-label="Close menu"
                className="app__navbar-menu-close"
                onClick={() => setToggle(false)}
              >
                <HiX aria-hidden="true" />
              </button>
              <ul>
                {NAVBAR_LINKS.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link}`}
                      onClick={() => setToggle(false)}
                      aria-current={active === link ? "page" : undefined}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
