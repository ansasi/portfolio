import { MdWorkOutline } from "react-icons/md";
import { FaAmazon, FaMountain } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Experience.scss";
import { ExperienceData } from "../../constants/defaultData";

const Experience = () => {
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
        {ExperienceData.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "var(--white-color)",
              color: "var(--black-color)",
              border: "1px solid var(--lightGray-color)",
              boxShadow: "var(--card-shadow)",
              borderRadius: "var(--card-radius)",
            }}
            contentArrowStyle={{ borderRight: "7px solid var(--white-color)" }}
            date={experience.date}
            iconStyle={{ background: "var(--secondary-color)", color: "var(--white-color)" }}
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
