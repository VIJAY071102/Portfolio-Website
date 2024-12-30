import frontend from "../../assets/images/fr.png";
import backend from "../../assets/images/backend.png";
import Tools from "../../assets/images/tools-icon.png";
import softskills from "../../assets/images/soft-skills-icon.png";

export const SKILLS = [
  {
    title: "Frontend",
    icon: frontend,
    skills: [
      { skill: "HTML", percentage: "80%" },
      { skill: "CSS3", percentage: "80%" },
      { skill: "JavaScript", percentage: "90%" },
      { skill: "React.js", percentage: "80%" },
    ],
  },
  {
    title: "Backend",
    icon: backend,
    skills: [
      { skill: "Node.js", percentage: "80%" },
      { skill: "Express.js", percentage: "70%" },
    ],
  },
  {
    title: "Tools",
    icon: Tools,
    skills: [
      { skill: "Git & GitHub", percentage: "70%" },
      { skill: "Visual Studio Code", percentage: "80%" },
      { skill: "Webpack", percentage: "60%" },
      { skill: "Responsive Design", percentage: "70%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: softskills,
    skills: [
      { skill: "Problem-Solving", percentage: "80%" },
      { skill: "Collabaration", percentage: "85%" },
      { skill: "Attention to Detail", percentage: "75%" },
    ],
  },
];

export const PROJECTS = [
  {
    title: "To-Do-List",
    date: " 12",
    description: ["first-project"],
  },
  {
    title: "To-Do-List",
    date: "13",
    description: ["second-project"],
  },
  {
    title: "To-Do-List",
    date: "14",
    description: ["third-project"],
  },
];
