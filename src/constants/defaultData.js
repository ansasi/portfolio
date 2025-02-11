import { images } from "../constants";

export const AboutData = [
  {
    title: "Profile",
    description:
      "Cloud Data engineer. Having studied a double master's degree in Industrial Engineering and Smart Industry has made me a person with great adaptability and problem solving skills, and has also awakened in me a great passion for Big Data, the Cloud and the Web.",
    image: images.about02,
  },
  {
    title: "Technologies and tools",
    description:
      "My main field of knowledge is cloud and data. Thanks to that I have been able to expand my knowledge to other areas such as web development, CI/CD integration or IAC (Terraform). My best friends are AWS, Python and Terraform.",
    image: images.tools,
  },
  {
    title: "Background",
    description:
      "My experience as a Cloud Data Engineer, Data Engineer, Data Scientist and Fullstack Developer has given me the knowledge and skills to be part of all kinds of projects. From the development of SQL data models to the design and deployment of cloud architectures, through Fullstack web development.",
    image: images.about04,
  },
  {
    title: "Awards and Achievements",
    description:
      "AWS Certified Solutions Architect, AWS Certified Cloud Practitioner and winner of the IV Hackathon in collaboration with Prosegur and ICAI.",
    image: images.about03,
  },
];

export const ExperienceData = [
  {
    name: "Cloud Data Engineer",
    company: "Alpiq",
    date: "MAY 2023 - PRESENT",
    desc: "Cloud Data Engineer at Alpiq working for IT Data & Analytics department, I maintain and improve business projects by ensuring high availability, resilience, and cost-effectiveness on the AWS platform. I achieve this by leveraging tools such as Terraform for infrastructure deployment, GitLab CI/CD for continuous integration and delivery, Docker for containerization, and Kubernetes (EKS) for container orchestration, consistently aligning with the latest technological advancements to support various business units.",
    order: 1,
  },
  {
    name: "Data Engineer",
    company: "DataCentric",
    date: "DEC 2022 - MAY 2023",
    desc: "Responsible for designing, deploying, and maintaining the AWS infrastructure for the company and its clients using Terraform and Python. I worked daily with various tools such as Dockers, EC2, VPCs, and others, to improve automation and standardization of data processes. My focus was on utilizing Terraform to deploy the infrastructure and Python to program the Spark code of the ETLs, ensuring that the company's and its clients' data processes are efficient, reliable and up-to-date with the latest technologies.",
    order: 2,
  },
  {
    name: "Business Intelligence Engineer",
    company: "Amazon",
    date: "MAR 2022 - SEP 2022",
    desc: "While working at Amazon's EU headquarters in Luxembourg, I developed SQL models to optimize warehouse operations, automated ETL pipelines using Python and AWS, built full-stack websites, and designed and deployed cloud architectures for the Logistics Department.",
    order: 3,
  },
  {
    name: "Data Scientist",
    company: "CIC Lab",
    date: "JUN 2021 - DEC 2021",
    desc: "I led a project at Saargummi's factory to optimize their data processing workflows using Python and R. I developed a predictive maintenance model leveraging Python libraries such as Pandas and Keras, enabling the factory to proactively address potential production line failures. This initiative successfully reduced production line downtime by 7%.",
    order: 4,
  },
];

export const PortfolioData = [
  {
    title: "SheetGenius AI",
    description:
      "SheetGenius AI is a web app that creates Excel formulas using natural language.",
    codeLink: "https://github.com/ansasi/sheetgenius",
    projectLink: "https://sheetgenius.ai/",
    image: images.sheetgenius,
    tags: ["AI", "Mobile App", "Web App", "Next JS", "React JS", "Stripe"],
  },
  {
    title: "E-commerce Website",
    description:
      "A website created with Next.JS, Stripe and Sanity. It simulates an e-commerce store in which you can validate payments with Stripe.",
    codeLink: "https://github.com/ansasi/ecommerce-stripe-sanity",
    projectLink: "https://ecommerce-ansasi.vercel.app/",
    image: images.ecommerce,
    tags: ["E-commerce", "Mobile App", "Web App", "Next JS", "React JS", "Stripe", "Sanity"],
  },
  {
    title: "Gym App",
    description:
      "This is a gym app with a variety of exercise. It uses Rapid to get the exercise and YouTube videos related to them.",
    codeLink: "https://github.com/ansasi/fitness-react-app",
    projectLink: "https://ansasi.github.io/fitness-react-app/",
    image: images.gym,
    tags: ["Sports", "Mobile App", "Web App", "React JS"],
  },
  {
    title: "Event App",
    description:
      "Event app, powered by Next.js and TypeScript, streamlines creating and attending events with a user-friendly interface, secure authentication, seamless payment integration, and fast server-side rendering. Ideal for both organizers and attendees, it offers an efficient and enjoyable event experience.",
    codeLink: "https://github.com/ansasi/event-webapp",
    projectLink: "https://event-webapp-ansasi.vercel.app/",
    image: images.event_app,
    tags: ["NextJS", "Web App", "TypeScript", "Auth", "Stripe"],
  },
  {
    title: "Social Media Website",
    description:
      "A website to post, save and comment pictures, just like Pinterest. It uses React JS, Google Auth and Sanity. You can register and post pictures or use it anonymously and just see the pictures.",
    codeLink: "https://github.com/ansasi/connected-social-media",
    projectLink: "https://connected-app.netlify.app/",
    image: images.social_media,
    tags: ["Social Media", "Mobile App", "Web App", "React JS", "Sanity", "User Auth"],
  },
  {
    title: "Open AI Chat",
    description:
    '"A GPT-3-powered chatbot developed for my personal portfolio, showcasing my skills in creating conversational AI that can handle a wide range of queries and integrate with multiple platforms." Description provided by this AI.',
    codeLink: "https://github.com/ansasi/open_ai_vanilla",
    projectLink: "https://open-ai-vanilla.vercel.app/",
    image: images.open_ai,
    tags: ["AI", "Chatbot", "Web App", "Vanilla JS", "Open AI"],
  },
  {
    title: "Core Construcciones Website",
    description:
      "A website for a construction company. It uses React JS and Vite.",
    codeLink: "https://github.com/ansasi/core_construcciones",
    projectLink: "https://ansasi.github.io/core_construcciones/",
    image: images.core_construcciones,
    tags: ["Mobile App", "Web App", "React JS", "Vite"],
  },
];

export const SkillsData = [
  {
    name: "AWS",
    level: "Professional",
    type: "cloud",
    icon: images.aws,
  },
  {
    name: "Docker",
    level: "Advanced",
    type: "other, cloud",
    icon: images.docker,
  },
  {
    name: "Firebase",
    level: "Intermediate",
    type: "cloud",
    icon: images.firebase,
  },
  {
    name: "GitLab (CICD)",
    level: "Professional",
    type: "cloud, other",
    icon: images.gitlab,
  },
  {
    name: "Linux",
    level: "Advanced",
    type: "cloud, other",
    icon: images.linux,
  },
  {
    name: "Kubernetes",
    level: "Intermediate",
    type: "cloud, other",
    icon: images.kubernetes,
  },
  {
    name: "Terraform",
    level: "Professional",
    type: "cloud, other",
    icon: images.terraform,
  },
  {
    name: "CSS",
    level: "Intermediate",
    type: "frontend",
    icon: images.css,
  },
  {
    name: "HTML",
    level: "Advanced",
    type: "frontend",
    icon: images.html,
  },
  {
    name: "JavaScript",
    level: "Advanced",
    type: "frontend",
    icon: images.javascript,
  },
  {
    name: "React",
    level: "Advanced",
    type: "frontend",
    icon: images.react,
  },
  {
    name: "Sass",
    level: "Intermediate",
    type: "frontend",
    icon: images.sass,
  },
  {
    name: "Django",
    level: "Advanced",
    type: "backend",
    icon: images.django,
  },
  {
    name: "Python",
    level: "Professional",
    type: "backend",
    icon: images.python,
  },
  {
    name: "SQL",
    level: "Professional",
    type: "backend",
    icon: images.sql,
  },
  {
    name: "C++",
    level: "Intermediate",
    type: "backend",
    icon: images.cpp,
  },
  {
    name: "Git",
    level: "Professional",
    type: "other",
    icon: images.git,
  },
  {
    name: "R",
    level: "Intermediate",
    type: "other",
    icon: images.r,
  },
];

