import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
import { SkillsData } from "../../constants/defaultData";

const Skills = () => {
  const [skillsFrontend, setSkillsFrontend] = useState([]);
  const [skillsBackend, setSkillsBackend] = useState([]);
  const [skillsCloud, setSkillsCloud] = useState([]);
  const [skillsOther, setSkillsOther] = useState([]);

  useEffect(() => {
    setSkillsCloud(
      SkillsData.filter(
        (skill) =>
          skill.type.toLowerCase().includes("cloud") || skill.type.toLowerCase().includes("all")
      )
    );
    setSkillsFrontend(
      SkillsData.filter(
        (skill) =>
          skill.type.toLowerCase().includes("frontend") || skill.type.toLowerCase().includes("all")
      )
    );
    setSkillsBackend(
      SkillsData.filter(
        (skill) =>
          skill.type.toLowerCase().includes("backend") || skill.type.toLowerCase().includes("all")
      )
    );
    setSkillsOther(
      SkillsData.filter(
        (skill) =>
          skill.type.toLowerCase().includes("other") || skill.type.toLowerCase().includes("all")
      )
    );
  }, []);

  return (
    <>
      <h2 className="head-text">
        My <span>Skills</span>
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-category">
          <h3 className="app__skills-category-name">Cloud</h3>
          <div className="app__skills-skill-group">
            {skillsCloud.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-skill app__flex"
                key={skill.name}
              >
                <div className="app__flex">
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <p className="app__skills-skill-name">{skill.name}</p>
                <p className="app__skills-skill-level">{skill.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div className="app__skills-category">
          <div>
            <h3 className="app__skills-category-name">Frontend</h3>
          </div>
          <div className="app__skills-skill-group">
            {skillsFrontend.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-skill app__flex"
                key={skill.name}
              >
                <div className="app__flex">
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <p className="app__skills-skill-name">{skill.name}</p>
                <p className="app__skills-skill-level">{skill.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div className="app__skills-category">
          <h3 className="app__skills-category-name">Backend</h3>
          <div className="app__skills-skill-group">
            {skillsBackend.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-skill app__flex"
                key={skill.name}
              >
                <div className="app__flex">
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <p className="app__skills-skill-name">{skill.name}</p>
                <p className="app__skills-skill-level">{skill.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div className="app__skills-category">
          <h3 className="app__skills-category-name">Other</h3>
          <div className="app__skills-skill-group">
            {skillsOther.map((skill) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-skill app__flex"
                key={skill.name}
              >
                <div className="app__flex">
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <p className="app__skills-skill-name">{skill.name}</p>
                <p className="app__skills-skill-level">{skill.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

const WrappedSkills = AppWrap(MotionWrap(Skills, "app__skills"), "skills", "app__primarybg");
export default WrappedSkills;
