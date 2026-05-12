import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";
import { SkillsData } from "../../constants/defaultData";

const SKILL_CATEGORIES = [
  { key: "cloud", label: "Cloud" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "other", label: "Other" },
];

const skillsByType = (type) =>
  SkillsData.filter(
    (skill) =>
      skill.type.toLowerCase().includes(type) || skill.type.toLowerCase().includes("all")
  );

const levelClass = (level = "") =>
  `level-${level.toLowerCase().replace(/[^a-z]/g, "") || "intermediate"}`;

/* eslint-disable react/prop-types */
const SkillCard = ({ skill }) => (
  <motion.div
    whileInView={{ opacity: [0, 1], y: [12, 0] }}
    whileHover={{ y: -4 }}
    transition={{ duration: 0.4 }}
    className="app__skills-skill"
  >
    <div className="app__skills-skill-icon app__flex">
      <img
        src={skill.icon}
        alt={`${skill.name} logo`}
        loading="lazy"
        width="48"
        height="48"
      />
    </div>
    <p className="app__skills-skill-name">{skill.name}</p>
    <p className={`app__skills-skill-level ${levelClass(skill.level)}`}>
      {skill.level}
    </p>
  </motion.div>
);
/* eslint-enable react/prop-types */

const Skills = () => (
  <>
    <h2 className="head-text">
      My <span>skills</span>
    </h2>

    <div className="app__skills-container">
      {SKILL_CATEGORIES.map(({ key, label }) => (
        <section className="app__skills-category" key={key} aria-label={`${label} skills`}>
          <h3 className="app__skills-category-name">{label}</h3>
          <div className="app__skills-skill-group">
            {skillsByType(key).map((skill) => (
              <SkillCard skill={skill} key={skill.name} />
            ))}
          </div>
        </section>
      ))}
    </div>
  </>
);

const WrappedSkills = AppWrap(MotionWrap(Skills, "app__skills"), "skills", "app__primarybg");
export default WrappedSkills;
