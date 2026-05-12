import { motion } from "framer-motion";
import { HiArrowDownTray, HiArrowRight } from "react-icons/hi2";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import { Settings, ExperienceData } from "../../constants/defaultData";
import CV from "../../assets/CV.pdf";
import "./Header.scss";

/* Order matters: each entry maps to a pos1..pos8 slot, walking
   clockwise around the portrait starting at 12 o'clock. */
const HEADER_CIRCLES = [
  { src: "python", alt: "Python" },         // 12 o'clock
  { src: "aws", alt: "AWS" },               // 1:30
  { src: "javascript", alt: "JavaScript" }, // 3
  { src: "sql", alt: "SQL" },               // 4:30
  { src: "terraform", alt: "Terraform" },   // 6
  { src: "linux", alt: "Linux" },           // 7:30
  { src: "react", alt: "React" },           // 9
  { src: "docker", alt: "Docker" },         // 10:30
];

const yearsOfExperience = () => {
  const start = new Date("2019-09-01");
  const diff = (Date.now() - start.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  return Math.max(1, Math.floor(diff));
};

const Header = () => {
  const stats = [
    { value: `${yearsOfExperience()}+`, label: "Years building" },
    { value: `${ExperienceData.length}`, label: "Companies" },
    { value: "AWS", label: "Cloud focus" },
  ];

  return (
    <div className="app__header">
      <motion.div
        whileInView={{ y: [40, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="app__header-info"
      >
        <span className="eyebrow" aria-label="Status">
          Open to new projects
        </span>

        <h1 className="app__header-title" translate="no">
          <span className="app__header-greeting" aria-hidden="true">
            <span className="app__header-wave" role="img" aria-label="waving hand">
              👋
            </span>
            {Settings.greeting}
          </span>
          <span className="app__header-name">{Settings.name}</span>
          <span className="app__header-tagline">
            <span>{Settings.taglines[0].prefix}</span>{" "}
            <em>{Settings.taglines[0].suffix}</em>
          </span>
        </h1>

        <ul className="app__header-roles" aria-label="What I do">
          {Settings.taglines.slice(1).map((tag) => (
            <li key={`${tag.prefix}-${tag.suffix}`}>
              <span>{tag.prefix}</span> {tag.suffix}
            </li>
          ))}
          {Settings.extraTag && (
            <li>
              <span>&amp;</span> {Settings.extraTag}
            </li>
          )}
        </ul>

        <div className="app__header-cta">
          <a href={CV} download className="app__header-cta-primary">
            Download CV
            <HiArrowDownTray aria-hidden="true" />
          </a>
          <a href="#contact" className="app__header-cta-secondary">
            Let&rsquo;s talk
            <HiArrowRight aria-hidden="true" />
          </a>
        </div>

        <dl className="app__header-stats" aria-label="At a glance">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1], scale: [0.92, 1] }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="app__header-visual"
      >
        <div className="app__header-portrait">
          <span className="app__header-portrait-ring" aria-hidden="true" />
          <img
            src={images.profileAnsasiBg}
            alt={`Portrait of ${Settings.fullName}`}
            width="480"
            height="540"
          />
        </div>

        <ul className="app__header-chips" aria-label="Selected technologies">
          {HEADER_CIRCLES.map(({ src, alt }, idx) => (
            <motion.li
              key={src}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.5, delay: 0.15 + idx * 0.08, ease: "easeOut" }}
              className={`app__header-chip app__header-chip--pos${idx + 1}`}
            >
              <img src={images[src]} alt={`${alt} logo`} width="48" height="48" />
              <span>{alt}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

const WrappedHeader = AppWrap(Header, "home");
export default WrappedHeader;
