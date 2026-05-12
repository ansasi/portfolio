import { motion } from "framer-motion";
import { HiArrowDownTray, HiArrowRight } from "react-icons/hi2";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import { Settings } from "../../constants/defaultData";
import CV from "../../assets/CV.pdf";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const HEADER_CIRCLES = [
  { src: "python", alt: "Python" },
  { src: "aws", alt: "AWS" },
  { src: "react", alt: "React" },
  { src: "sql", alt: "SQL" },
];

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span aria-hidden="true">👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">{Settings.greeting}</p>
            <h1 className="head-text" translate="no">
              {Settings.name}
            </h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          {Settings.taglines.map((tag) => (
            <p className="p-text" key={`${tag.prefix}-${tag.suffix}`}>
              <span className="bold-text">{tag.prefix} </span>
              {tag.suffix}
            </p>
          ))}
          {Settings.extraTag && <p className="p-text">{Settings.extraTag}</p>}
        </div>

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
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.profileAnsasiBg}
        alt={`Portrait of ${Settings.fullName}`}
        className="overlay_circle"
        width="480"
        height="540"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
      aria-label="Selected technologies"
    >
      {HEADER_CIRCLES.map(({ src, alt }) => (
        <div className="circle-cmp app__flex" key={src}>
          <img src={images[src]} alt={`${alt} logo`} width="80" height="80" />
        </div>
      ))}
    </motion.div>
  </div>
);

const WrappedHeader = AppWrap(Header, "home");
export default WrappedHeader;
