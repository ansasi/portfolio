import { BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

import { Settings } from "../constants/defaultData";

const SocialMedia = () => (
  <div className="app__social">
    <a href={Settings.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
      <BsLinkedin />
    </a>
    <a href={Settings.github} target="_blank" rel="noreferrer" aria-label="GitHub">
      <FaGithub />
    </a>
    <a href={`mailto:${Settings.email}`} aria-label="Email">
      <FiMail />
    </a>
  </div>
);

export default SocialMedia;
