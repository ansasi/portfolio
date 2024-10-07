import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
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
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Angel</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">
            <span className="bold-text">Cloud </span>Architect
          </p>
          <p className="p-text">
            <span className="bold-text">Web </span>Developer
          </p>
          <p className="p-text">
            <span className="bold-text">Data </span>Engineer
          </p>
          <p className="p-text">
            <span className="bold-text">Business </span>Intelligence
          </p>
          <p className="p-text">Freelancer</p>
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
      {/* <img src={images.profile} alt="profile_bg" /> */}
      <img src={images.profileAnsasiNoBg} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
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
