import { useEffect, useState } from "react";

import { BiHomeAlt, BiMessageDetail, BiBriefcaseAlt } from "react-icons/bi";
import { AiOutlineUser, AiOutlineAppstore } from "react-icons/ai";
import { GiStrong } from "react-icons/gi";
import "./FloatingNavbar.scss";

const NAV_ITEMS = [
  { id: "home", label: "Home", Icon: BiHomeAlt },
  { id: "about", label: "About", Icon: AiOutlineUser },
  { id: "skills", label: "Skills", Icon: GiStrong },
  { id: "portfolio", label: "Portfolio", Icon: AiOutlineAppstore },
  { id: "experience", label: "Experience", Icon: BiBriefcaseAlt },
  { id: "contact", label: "Contact", Icon: BiMessageDetail },
];

const FloatingNavbar = () => {
  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
    const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveNav(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="app__floatingnavbar-icon-links" aria-label="Quick section navigation">
      {NAV_ITEMS.map(({ id, label, Icon }) => {
        const isActive = activeNav === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            aria-label={`Go to ${label} section`}
            aria-current={isActive ? "page" : undefined}
            className={isActive ? "active" : ""}
          >
            <Icon aria-hidden="true" />
          </a>
        );
      })}
    </nav>
  );
};

export default FloatingNavbar;
