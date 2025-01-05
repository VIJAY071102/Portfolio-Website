import frontend from "../../assets/images/fr.png";
import backend from "../../assets/images/backend.png";
import Tools from "../../assets/images/tools-icon.png";
import softskills from "../../assets/images/soft-skills-icon.png";
// import project1_img from "../../assets/images/project_1.svg";
// import project2_img from "../../assets/images/project_2.svg";
// import project3_img from "../../assets/images/project_3.svg";
// import project4_img from "../../assets/images/project_4.svg";
import project5_img from "../../assets/images/project_5.svg";
import project6_img from "../../assets/images/project_6.svg";
import project1 from "../../assets/images/project_1.png";
import project2 from "../../assets/images/project_2.png";
import project3 from "../../assets/images/project_3.png";
import project4 from "../../assets/images/project_4.png";
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
    title: "School management system",
    date: "JAN-2025",
    description: [
      "Designed a responsive School Management System frontend with three modules: Admin, Teacher, and Student, ensuring smooth navigation and user experience.",
    ],
  },
  {
    title: "To-Do-List",
    date: "OCT-2024",
    description: [
      "Built a responsive To-Do List app using React.js and CSS with features to add, complete, and delete tasks, demonstrating state management and user interaction skills.",
    ],
  },

  {
    title: "Portfolio",
    date: "DEC-2024",
    description: [
      "Developed a fully responsive portfolio website using React.js and classical CSS, showcasing my projects, skills, and contact details.",
    ],
  },
];

export const project = [
  {
    w_no: 1,
    w_name: "school-management-system",
    w_img: project1,
  },
  {
    w_no: 2,
    w_name: "to-do-list",
    w_img: project2,
  },
  {
    w_no: 3,
    w_name: "portfolio-website",
    w_img: project3,
  },
  {
    w_no: 4,
    w_name: "ecommerce-website",
    w_img: project4,
  },
  // {
  //   w_no: 5,
  //   w_name: "to-do-list",
  //   w_img: project5_img,
  // },
  // {
  //   w_no: 6,
  //   w_name: "to-do-list",
  //   w_img: project6_img,
  // },
];
