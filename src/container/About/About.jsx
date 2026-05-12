import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { AboutData, Settings } from "../../constants/defaultData";

const About = () => {
  return (
    <>
      <h2 className="head-text">
        <span>About</span> me
      </h2>

      <p className="app__about-comment">{Settings.aboutComment}</p>

      <div className="app__profiles">
        {AboutData.map((about, index) => (
          <motion.article
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4, type: "tween", delay: index * 0.05 }}
            className="app__profile-item"
            key={about.title}
          >
            <img
              src={about.image}
              alt={about.title}
              loading="lazy"
              width="320"
              height="170"
            />
            <h3 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h3>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.article>
        ))}
      </div>
    </>
  );
};

const WrappedAbout = AppWrap(MotionWrap(About, "app__about"), "about", "app__whitebg");

export default WrappedAbout;
