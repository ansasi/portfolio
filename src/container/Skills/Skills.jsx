import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
import { SkillsData } from "../../constants/defaultData";

const skillsByType = (type) =>
  SkillsData.filter(
    (skill) =>
      skill.type.toLowerCase().includes(type) || skill.type.toLowerCase().includes("all")
  );

const skillCategories = [
  { name: "Cloud", skills: skillsByType("cloud") },
  { name: "Frontend", skills: skillsByType("frontend") },
  { name: "Backend", skills: skillsByType("backend") },
  { name: "Other", skills: skillsByType("other") },
];

const Skills = () => {
  return (
    <>
      <h2 className="head-text">
        My <span>Skills</span>
      </h2>

      <div className="app__skills-container">
        {skillCategories.map((category) => (
          <motion.div className="app__skills-category" key={category.name}>
            <h3 className="app__skills-category-name">{category.name}</h3>
            <div className="app__skills-skill-group">
              {category.skills.map((skill) => (
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-skill"
                  key={skill.name}
                >
                  <div className="app__skills-skill-icon app__flex">
                    <img src={skill.icon} alt={skill.name} />
                  </div>
                  <div className="app__skills-skill-info">
                    <p className="app__skills-skill-name">{skill.name}</p>
                    <p className="app__skills-skill-level">{skill.level}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

const WrappedSkills = AppWrap(MotionWrap(Skills, "app__skills"), "skills", "app__primarybg");
export default WrappedSkills;
