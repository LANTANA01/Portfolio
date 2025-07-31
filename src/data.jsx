import { FaPaintBrush } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { GiIdea } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import {
  figma,
  sketch,
  xd,
  css,
  html,
  javascript,
  tailwind,
  bootstrap,
  react,
  reactnative,
  emailicon,
  messengericon,
  whatsappicon,
} from "./assets";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import elocate2 from "./assets/elocate2.png";
import travel from "./assets/travel.png";
import realestate from "./assets/realestate.png";
import dsa from "./assets/dsa.png";
import blood from "./assets/blood.png";
import airesume2 from "./assets/airesume2.png";

export const menu = [
  { name: "About" },
  { name: "Services" },
  { name: "Skills" },
  { name: "Projects" },
  { name: "Contact" },
];

export const services = [
  {
    title: " Full-Stack Web Development",
    icon: <FaPaintBrush />,
    description: `I specialize in building responsive, scalable web applications using modern technologies like React.js, Next.js, Node.js, and MongoDB. From frontend to backend, I deliver seamless user experiences and efficient system architectures.`,
  },
  {
    title: " AI Solutions",
    icon: <FaCodeCompare />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `I leverage AI to develop data-driven applications. My experience includes projects like sentiment analysis, blood group detection using fingerprints, and AI-powered tools, delivering impactful insights and automating processes.`,
  },
  {
    title: " Cloud Integration & Optimization",
    icon: <GiIdea />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `I have hands-on experience with cloud platforms,that enables me to build secure, scalable applications. I optimize app performance and enhance user engagement through cloud-based solutions, ensuring fast load times and high efficiency.`,
  },
];

export const projects = [
  {
    title: "AI Resume & Cover Letter Builder",
    image: airesume2,
    // category: "AI based Web App",
    // description: `The AI Resume & Cover Letter Builder is a web app that helps users generate professional, ATS-friendly resumes and cover letters effortlessly using Gemini API. Built with ReactJS, TailwindCSS, and Firebase Authentication, it offers AI-powered content generation, customizable templates, and secure user authentication. Users can edit, preview, and download their documents seamlessly. 🚀`,
    // demoLink: "https://github.com/Tushar-Shinde31/AI-Resume-and-Cover-Letter-Builder",
    stacks: [
      {
        name: "XD",
        logo: xd,
      },
    ],
  },
  {
    title: "Elocate",
    image: elocate2,
    // category: "Next.js Web App",
    // description: `ELocate is an eco-friendly platform built with Next.js, Express, and MongoDB that connects users with e-waste recycling facilities, offering booking options, user authentication, educational content, and data analytics to promote sustainable e-waste management.`,
    // demoLink: "https://github.com/Tushar-Shinde31/Elocate",
    stacks: [
      {
        name: "ReactJs",
        logo: react,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
    ],
  },
  {
    title: "TravelWorld",
    image: travel,
    // category: "MERN Stack Web App",
    // description: `Created Travel-World, a MERN-based Tours & Travels web app. Designed a user-friendly interface for seamless tour booking and hotel selection, improving user experience and conversion rates. Improved load speed to 1.1-second by optimizing Express.js API and MongoDB, increasing user retention by 20%.`,
    // demoLink: "https://github.com/Tushar-Shinde31/TravelWorld",
    stacks: [
      {
        name: "ReactJs",
        logo: react,
      },
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "Tailwind",
        logo: tailwind,
      },
    ],
  },
  {
    title: "Real Estate App",
    image: realestate,
    // category: "React Native App",
    // description: `Developed a real estate app with React Native, Expo, and Firebase. Implemented a user-friendly interface for property search, user authentication, and secure transactions. The app provides real-time property listings, user reviews, and location-based search functionality.`,
    // demoLink: "https://github.com/Tushar-Shinde31/Real_Estate_App_React_Native-",
    stacks: [
      {
        name: "React Native",
        logo: reactnative,
      },
      {
        name: "XD",
        logo: xd,
      },
      {
        name: "CSS",
        logo: css,
      },
    ],
  },
  {
    title: "Blood Group Detection using Fingerprints",
    image: blood,
    // category: "Machine Learning Model and Flask Web App",
    // description: `The Blood Group Detection Using Fingerprint (BGDUF) project is an AI-powered system that predicts blood groups based on fingerprint patterns. It features a Flask-based frontend and integrates a machine learning model trained on multiple datasets, with the best-performing model achieving 89% accuracy.`,
    // demoLink: "https://github.com/Tushar-Shinde31/Blood_Group_Detection_Using_Fingerprint-Flask-",
    stacks: [
      {
        name: "Figma",
        logo: figma,
      },
    ],
  },
  {
    title: "DSA based Melody Manager",
    image: dsa,
    // category: "C++ based Console App",
    // description: `Designed and implemented a dynamic Playlist Management System using doubly linked lists, enabling song addition, deletion, searching, and playback. Integrated file I/O for persistent data storage and implemented a stack-based history for recently played songs, along with sorting for better playlist organization.`,
    // demoLink: "https://github.com/Tushar-Shinde31/Music-Player-in-DSA",
    stacks: [
      {
        name: "React Native",
        logo: reactnative,
      },
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "XD",
        logo: xd,
      },
      {
        name: "Bootstrap",
        logo: bootstrap,
      },
    ],
  },
];

export const skills = [
  {
    title: "Programming Languages",
    data: [
      {
        skill: "C++",
        logo: figma,
      },
      {
        skill: "Sketch",
        level: "Intermediate",
        logo: sketch,
      },
      {
        skill: "XD",
        level: "Intermediate",
        logo: xd,
      },
    ],
  },
  {
    title: "Lib/Frameworks",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
        logo: html,
      },
      {
        skill: "CSS",
        level: "Experienced",
        logo: css,
      },
      {
        skill: "JavaScript",
        level: "Experienced",
        logo: javascript,
      },
      {
        skill: "Tailwind",
        level: "Intermediate",
        logo: tailwind,
      },
      {
        skill: "Bootstrap",
        level: "Experienced",
        logo: bootstrap,
      },
      {
        skill: "React",
        level: "Experienced",
        logo: react,
      },
      {
        skill: "React Native",
        level: "Experienced",
        logo: reactnative,
      },
    ],
  },
];   

export const contactInfo = [
  {
    name: "Email",
    value: "lantanat62@gmail.com",
    link: "lantanat62@gmail.com",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(56,115,205)",
  },
  {
    name: "WhatsApp",
    value: "+2348132370551",
    link: "https://api.whatsapp.com/send?phone=+2348132370551",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(38,234,112)",
  },
];
export const socialHandles = [
  {
    name: "GitHub",
    icon: <FaGithub size={24} />,
    link: "https://github.com/LANTANA01",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={24} />,
    link: "linkedin.com/in/lantana-tijani-405328200/",
  }
 
];
