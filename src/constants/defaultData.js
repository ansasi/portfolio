import images from "./images";
import aboutContent from "../../content/about.json";
import experienceContent from "../../content/experience.json";
import portfolioContent from "../../content/portfolio.json";
import skillsContent from "../../content/skills.json";
import settingsContent from "../../content/settings.json";

export const Settings = settingsContent;

export const AboutData = aboutContent.items.map((item) => ({
  ...item,
  image: images[item.image] ?? images.about01,
}));

export const ExperienceData = [...experienceContent.items].sort(
  (a, b) => (a.order ?? 0) - (b.order ?? 0)
);

export const PortfolioData = portfolioContent.items;

export const SkillsData = skillsContent.items.map((skill) => ({
  ...skill,
  icon: images[skill.icon],
}));
