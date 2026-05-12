import { useMemo, useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Portfolio.scss";
import { PortfolioData } from "../../constants/defaultData";

const FILTERS = ["All", "Web App", "Mobile App", "React JS", "Next JS"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const filterProject = useMemo(() => {
    if (activeFilter === "All") return PortfolioData;
    return PortfolioData.filter((project) => project.tags.includes(activeFilter));
  }, [activeFilter]);

  const handleProjectFilter = (item) => {
    if (item === activeFilter) return;
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setActiveFilter(item);
      setAnimateCard({ y: 0, opacity: 1 });
    }, 250);
  };

  return (
    <>
      <h2 className="head-text">
        My creative <span>portfolio</span>
      </h2>

      <div
        className="app__portfolio-filter"
        role="tablist"
        aria-label="Filter projects by category"
      >
        {FILTERS.map((item) => {
          const isActive = activeFilter === item;
          return (
            <button
              type="button"
              key={item}
              role="tab"
              aria-selected={isActive}
              onClick={() => handleProjectFilter(item)}
              className={`app__portfolio-filter-item p-text ${isActive ? "item-active" : ""}`}
            >
              {item}
            </button>
          );
        })}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__portfolio-portfolio"
        role="tabpanel"
        aria-label={`${activeFilter} projects`}
      >
        {filterProject.length === 0 ? (
          <p className="p-text app__portfolio-empty">No projects match this filter yet.</p>
        ) : (
          filterProject.map((project) => (
            <article className="app__portfolio-item" key={project.title}>
              <div className="app__portfolio-img app__flex">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  width="640"
                  height="360"
                />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: "easeInOut", staggerChildren: 0.5 }}
                  className="app__portfolio-hover app__flex"
                >
                  {project.projectLink && (
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View live demo of ${project.title} (opens in new tab)`}
                    >
                      <motion.span
                        whileInView={{ scale: [0.5, 1] }}
                        whileHover={{ scale: [1, 1.2] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex"
                      >
                        <AiFillEye aria-hidden="true" />
                      </motion.span>
                    </a>
                  )}
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} source on GitHub (opens in new tab)`}
                    >
                      <motion.span
                        whileInView={{ scale: [0.5, 1] }}
                        whileHover={{ scale: [1, 1.2] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex"
                      >
                        <AiFillGithub aria-hidden="true" />
                      </motion.span>
                    </a>
                  )}
                </motion.div>
              </div>

              <div className="app__portfolio-content app__flex">
                <h3 className="bold-text">{project.title}</h3>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {project.description}
                </p>

                <div className="app__portfolio-tag app__flex">
                  <p className="p-text">{project.tags[0]}</p>
                </div>
              </div>
            </article>
          ))
        )}
      </motion.div>
    </>
  );
};

const WrappedPortfolio = AppWrap(MotionWrap(Portfolio, "app__portfolio"), "portfolio", "app__whitebg");
export default WrappedPortfolio;
