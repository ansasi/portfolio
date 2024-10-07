import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { AboutData } from "../../constants/defaultData";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    setAbouts(AboutData);
  }, []);

  return (
    <>
      <h2 className="head-text">
        <span>About</span> me
      </h2>

      <p className="app__about-comment">
        <br />I know that <span className="bold-text">Good Quality</span> means{" "}
        <span className="bold-text">Good Business</span>
      </p>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.image} alt={about.title} />
            {/* <img src={urlFor(about.imgUrl)} alt={about.title} /> */}
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

const WrappedAbout = AppWrap(MotionWrap(About, "app__about"), "about", "app__whitebg");

export default WrappedAbout;
