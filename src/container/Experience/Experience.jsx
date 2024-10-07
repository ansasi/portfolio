import { useState, useEffect } from "react";
import { MdWorkOutline } from "react-icons/md";
import { FaAmazon, FaMountain } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Experience.scss";
import { ExperienceData } from "../../constants/defaultData";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    setExperiences(ExperienceData);
  }, []);

  const getIcon = (company) => {
    switch (company) {
      case "Amazon":
        return <FaAmazon />;
      case "DataCentric":
        return <GiBrain />;
      case "Alpiq":
        return <FaMountain />;
      default:
        return <MdWorkOutline />;
    }
  };

  return (
    <>
      <h2 className="head-text">
        My work <span>Experience</span>
      </h2>
      <br />
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#ffffff", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date={experience.date}
            iconStyle={{ background: "#ffffff", color: "#000" }}
            icon={getIcon(experience.company)}
          >
            <h3 className="vertical-timeline-element-title">{experience.name}</h3>
            <h4 className="vertical-timeline-element-subtitle">{experience.company}</h4>
            <p className="p-text">{experience.desc}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
};

const WrappedExperience = AppWrap(MotionWrap(Experience, "app__experience"), "experience", "app__primarybg");
export default WrappedExperience;
