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
        My work <span>experience</span>
      </h2>
      <VerticalTimeline lineColor="rgba(49, 59, 172, 0.25)">
        {ExperienceData.map((experience) => (
          <VerticalTimelineElement
            key={`${experience.company}-${experience.name}-${experience.date}`}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "var(--white-color)",
              color: "var(--black-color)",
              boxShadow: "var(--shadow-sm)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--lightGray-color)",
            }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            date={experience.date}
            iconStyle={{
              background: "var(--white-color)",
              color: "var(--secondary-color)",
              boxShadow:
                "0 0 0 4px rgba(49,59,172,0.18), 0 4px 14px rgba(15,23,42,0.08)",
            }}
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
