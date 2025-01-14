import { BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://www.linkedin.com/in/angelsanchezsierra" target="_blank" rel="noreferrer">
      <BsLinkedin />
    </a>
    <a href="https://github.com/ansasi" target="_blank" rel="noreferrer">
      <FaGithub />
    </a>
    <a href="mailto:angel.sanchez.sierra@proton.me">
      <FiMail />
    </a>
  </div>
);

export default SocialMedia;
