import {
  concordia,
  opentracks,
  antrix,
  portfolio,
  ukg,
  warzone,
  sorting,
  career,
  battleship,
  food,
  gym,
  accolite,
  manav,
  dance,
  travel,
  chitkara,
  quickheal1,
  quickheal2,
  randstad1,
  randstad2,
  garbage,
  jobseekr,
  rdf,
  sparql,
  suricata,
  mediapipe,
  chatbot,
  tvm,
  hand
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillHtml5,
} from "react-icons/ai";

import {
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiTypescript,
  SiAngular,
  SiJunit5,
  SiSelenium,
  SiNgrx,
  SiSpring,
  SiNumpy,
  SiScikitlearn,
  SiPostgresql,
  SiMongodb,
  SiNpm,
  SiJira,
  SiJenkins,
  SiIntellijidea,
  SiTestrail,
  SiPandas,
  SiHtml5,
  SiCss3,
  SiApachetomcat,

  SiMicrosoftazure,
  SiDjango,
  SiGraphql,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiFirebase,
  SiGithub,
  SiRasa,
  SiPytorch,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiMicrosoftpowerpoint,
  SiPowerbi,
  SiKnowledgebase,
  SiElasticstack
} from "react-icons/si";

import { BsFiletypeSql } from "react-icons/bs";
import { LiaNode } from "react-icons/lia";
import { GiNetworkBars } from "react-icons/gi";


import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/10UsjZ4Edsf08gw_tg_4Yvw0cmxaXJ5Nx/view?usp=sharing";
export const repoLink = "https://github.com/mittal-parth/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/saurabh-sharma1/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "openSource",
    title: "Open Source",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: concordia,
    title: "Concordia University, Montreal, Quebec",
    degree: "Master of Engineering - Software Engineering",
    duration: "Sep 2022 - Jun 2024",
    content1:"GPA: 3.2",
    content2:"Core Courses: Programming and Problem Solving, Advanced Programming Practices, Software Design Methodologies, Software Comprehension and Maintenance, Software Project Management"
  },
  {
    id: "education-2",
    icon: chitkara,
    title: "Chitkara University, Chandigarh, India",
    degree: "Bachelor of Engineering - Computer Science",
    duration: "Aug 2016 - Jun 2020",
    content1: "Core Courses: Data structures and Algorithms, Java, Python, C, OOPS, DBMS, Operating Systems",
  },
];

export const achievements = [
  {
    id: "a-1",
    icon: quickheal2,
    event: "Ideathon'22",
    position: "1st Runner up",
    content1: "Developed a project leveraging the ELK stack and Suricata IDS to detect anomalies in system network traffic. Created a Kibana dashboard for visualizing these anomalies, enabling in-depth analysis and actionable insights into network behavior.",
    content3: "",
  }, 
  {
    id: "a-2",
    icon: accolite,
    event: "Spot Award",
    position: "Winner",
    content1: "For exemplary work and outstanding contribution to the organisation ",
  }
];


export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-3",
        icon: SiCplusplus,
        name: "C++",
      },
     
      {
        id: "pl-4",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-5",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-6",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-7",
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        id: "pl-8",
        icon: BsFiletypeSql,
        name: "SQL",
      },
      
      
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      
      {
        id: "f-1",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-2",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-9",
        icon: SiScikitlearn,
        name: "ScikitLearn",
      }
    ],
  },
  {
    title: "Tools & Databases",
    items: [
      
      {
        id: "t-1",
        icon: SiPostgresql,
        name: "PostgreSQL",
      },
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-3",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "t-4",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-5",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-6",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-7",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-8",
        icon: LiaNode,
        name: "Node.js",
      },
      {
        id: "t-9",
        icon: SiJira,
        name: "Jira",
      },
      {
        id: "t-10",
        icon: SiMicrosoftazure,
        name: "Azure",
      },
      {
        id: "t-1",
        icon: SiPowerbi,
        name: "Power BI",
      },
    ],
  },
];

export const experiences = [
  {
    organisation: "Randstad, Montreal, Canada",
    logo: randstad1,
    link: "https://www.randstad.ca/about/",
    positions: [
      {
        title: "Data Migration Specialist",
        duration: "Apr 2023 - Nov 2023",
        content: [
          {
            text: "Extracted data from a legacy ERP system and imported 35K customer/item records into Oracle NetSuite.",
            link: "",
          },
          {
            text: "Implemented robust data cleansing, deduplication, missing data handling, error correction, and formatting to ensure a consistent data structure.",
            link: ""
          },
          {
            text: "Created NetSuite templates for importing data into NetSuite.",
            link: ""
          }
        ],
      },
    ],
  },

  {
    organisation: "Quick Heal Technologies",
    logo: quickheal2,
    link: "https://www.quickheal.com/quick-heal-security-solutions",
    positions: [
      {
        title: "Security Researcher",
        duration: "Apr 2020 - Aug 2022",
        content: [
          {
            text: "Analysed and reverse-engineered malicious files to identify hidden code and phishing URLs, added over 2200 detections.",
            link: "",
          },
          {
            text: "Developed Python and BAT scripts to integrate emerging threat public rules into the Quick Heal detection signatures database and automate team tasks, enhancing workflow efficiency.",
            link: "",
          },
          {
            text: "Executed API testing using Postman and SOAP UI, verifying the reliability and accuracy of signature tracking server responses.",
            link: "",
          },
          {
            text: "Created Power BI / Kibana dashboards to visualize top detection performances across various metrics and generated reports for higher management.",
            link: "",
          },

        ],
      },
      {
        title: "Research and Development Intern",
        duration: "Apr 2019 - Mar 2020",
        content: [
          {
            text: "Contributed to projects following Agile methodology, participating in iterative development, daily standups, and sprint planning to ensure timely delivery of features.",
            link: "",
          },
          {
            text: "Gained proficiency in various network protocols like HTTP, TCP, UDP, and OLE file structures (DOCX, PDF, RTF, XLS).",
            link: "",
          },
        ],
      },
    ],
  }
];

export const openSourceContributions = [
  {
    id: "os-1",
    organisation: "OpenTracks App",
    logo: opentracks,
    title:
      "Removed Technical debts and fixed the issue with elevation gain/loss calculation function",
    link: "",
    number: "#4",
    date: "Mar 24 2023",
    linesAdded: "72",
    linesDeleted: "14",
  },
  
];

export const projects = [
  {
    id: "project-1",
    title: "Jobseekr- A job application portal",
    github: "https://github.com/saurabhs679/AgileMinds-Soen6011summer2023/",
    link: "",
    image: jobseekr,
    content:
      "Developed “Jobseekr”, an online job application portal for candidates and recruiters by using React, NodeJS, Firebase, and GitHub.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: LiaNode,
        name: "NodeJS"
      },
      {
        id: "icon-3",
        icon: SiFirebase,
        name: "Firebase"
      },
      {
        id: "icon-4",
        icon: SiGithub,
        name: "GitHub"
      },
    ],
  },
  {
    id: "project-2",
    title: "Roboprof Chatbot",
    github: "https://github.com/saurabhs679/Roboprof-Chatbot-COMP-6741-Project",
    link: "",
    image: chatbot,
    content:
      "Developed 'Roboprof' an intelligent agent for university and student inquiries using Knowledge Graphs and NLP. Built a Knowledge Base with RDFLib in Turtle format from an open dataset and integrated Rasa with Hugging Face to enhance conversational capabilities.",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-2",
        icon: SiRasa,
        name: "Rasa"
      },
      {
        id: "icon-3",
        icon: SiKnowledgebase,
        name: "Knowledge Base"
      },
    
    ],
  },
  {
    id: "project-3",
    title: "Hand Gesture recognition using Mediapipe",
    github: "https://github.com/saurabhs679/SOEN-6751-Project/",
    link: "",
    image: hand,
    content: "Created a hand gesture recognition system using Mediapipe to control Spotify, enabling hands-free play, pause, volume adjustment, and track navigation.",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
    ],
  },
  {
    id: "project-4",
    title: "Garbage Detection",
    github: "https://github.com/saurabhs679/Garbage-Detection",
    link: "",
    image: garbage,
    content:
      "Enhanced the VGG16 model’s accuracy by training it on three datasets and fine-tuning hyperparameters. Implementation utilized Python libraries like NumPy, scikit-learn, Matplotlib, and PyTorch for effective model performance.",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-2",
        icon: SiNumpy,
        name: "Numpy"
      },
      {
        id: "icon-3",
        icon: SiScikitlearn,
        name: "Scikitlearn"
      },
      {
        id: "icon-4",
        icon: SiPytorch,
        name: "Pytorch"
      },
    ],
  },
  {
    id: "project-5",
    title: "Ticket Vending Machine",
    github: "https://github.com/saurabhs679/SOEN-6461-Project-TVM",
    link: "",
    image: tvm,
    content:
      "Created a UI prototype for a ticket vending machine, simulating the functionality of the Presto card fare service used in Toronto's TTC transit system. This interface allows users to select ticket types and payment methods, emulating a seamless transit fare experience.",
    stack: [
      {
        id: "icon-1",
        icon: SiPython,
        name: "Python"
      },

    ],
  },
  {
    id: "project-6",
    title: "Cohort Watch, Quick Heal Technologies",
    github: "",
    link: "",
    image: quickheal2,
    content:
      "Worked on a project employing the ELK stack and Suricata IDS to identify anomalies in system network traffic.",
    stack: [
      {
        id: "icon-1",
        icon: SiElasticstack,
        name: "Elastic Stack"
      },
      {
        id: "icon-2",
        icon: GiNetworkBars,   
        name: "Suricata"
      },      
    ],
  }

];

export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

export const extraCurricular = [
  {
    organisation: "Active and Fit",
    title: "",
    duration: "",
    content: [
      {
        text: "I work out 4-5 times a week, always make time for badminton.",
        link: "",
      },
      
    ],
    logo: gym,
  },
  {
    organisation: "Travel",
    title: "",
    duration: "",
    content: [
      {
        text: "I love exploring new places and enjoy traveling with friends. In India, I've lived in various regions and explored many destinations. Currently, I'm exploring Quebec, Canada.",
        link: "",
      },
      
    ],
    logo: travel,
  },
  {
    organisation: "Food",
    title: "",
    duration: "",
    content: [
      {
        text: "I love cooking and strive to eat healthy most of the time. I've been preparing my own meals for over a year now." ,
        link: "",
      },
      
    ],
    logo: food,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/saurabh-sharma1/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/saurabhs679",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:saurabhsharma.can@gmail.com",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/saurabh_shharma",
  },
];

export const aboutMe = {
    name: "Saurabh Sharma",
    tagLine: "Software Engineering graduate (spring 2024) from Concordia University | ex-Randstad | ex-Security Reseacher @Quick Heal Technologies",
    intro: "Software Engineer with experience in Cybersecurity and Data Analysis, dedicated to building secure, data-driven solutions."
}