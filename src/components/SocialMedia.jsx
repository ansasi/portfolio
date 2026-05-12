import { BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

import { Settings } from "../constants/defaultData";

const SocialMedia = () => (
  <div className="app__social">
    <a
      href={Settings.linkedin}
      target="_blank"
      rel="noreferrer"
      aria-label="Visit LinkedIn profile (opens in new tab)"
    >
      <BsLinkedin aria-hidden="true" />
    </a>
    <a
      href={Settings.github}
      target="_blank"
      rel="noreferrer"
      aria-label="Visit GitHub profile (opens in new tab)"
    >
      <FaGithub aria-hidden="true" />
    </a>
    <a href={`mailto:${Settings.email}`} aria-label={`Send an email to ${Settings.email}`}>
      <FiMail aria-hidden="true" />
    </a>
  </div>
);

export default SocialMedia;
