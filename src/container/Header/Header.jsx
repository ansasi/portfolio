import { motion } from "framer-motion";

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

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info">
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">{Settings.greeting}</p>
            <h1 className="head-text">{Settings.name}</h1>
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

        <div className="tag-cmp app__flex">
          <a href={CV} download className="p-text">
            Download my CV
          </a>
        </div>

        <div className="tag-cmp app__flex">
          <a href="#contact" className="p-text">
            Let&apos;s talk
          </a>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img">
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.profileAnsasiBg}
        alt="profileAnsasiBg"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles">
      {[images.python, images.aws, images.react, images.sql].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

const WrappedHeader = AppWrap(Header, "home");
export default WrappedHeader;
