 // Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's
import stack from './assets/company_logo/Stack.png';
import ML from './assets/company_logo/ML.jpg';
import Problem from './assets/company_logo/Problem.png';
import mern from './assets/company_logo/Mern-Stack.png';

// Education Section Logo's
import gju from './assets/education_logo/gju.png';
import bseb from './assets/education_logo/bseb.jpg';
import cbse from './assets/education_logo/cbse.png';

// Project Section Logo's
import github from './assets/work_logo/github.png';
import whatsapp from './assets/work_logo/whatsapp.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import Ecart from "./assets/work_logo/Ecart.png";

import Ipl from './assets/work_logo/ipl.png';

import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
     
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: stack,
      role: "Fullstack Developer",
      company: "Personal Projects-Ecart",
      date: "dec 2025 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development.Built multiple projects including portfolio websites and dynamic interfaces, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "Responsive Design",
        "MongoDb",
        "Redux",
        "Next Js",
      ],
    },
    {
      id: 1,
      img: ML,
      role: "Machine Learning Developer",
      company: "Academic Projects",
      date: "2023 - Present",
      desc: "Built and trained machine learning models using Python for data analysis and prediction tasks. Worked with datasets to perform data cleaning, visualization, and model evaluation, gaining hands-on experience in real-world problem solving using ML techniques.",
      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Data Analysis",
        "Data Visualization",
      ],
    },
    {
      id: 2,
      img: Problem,
      role: "Problem Solver (DSA-Java)",
      company: "Self Practice",
      date: "2023 - Present",
      desc: "Regularly solving Data Structures and Algorithms problems to improve problem-solving skills and coding efficiency. Practicing topics such as arrays, linked lists, trees, graphs, and dynamic programming with a focus on writing optimized and clean code.",
      skills: [
        "Java",
        "Oops",
        "Data Structures",
        "Algorithms",
        "Problem Solving",
        "Time Complexity",
        "LeetCode",
      ],
    },
    {
      id:3,
      img: mern,
      role: "MERN Developer",
      company: "Smart India Hackathon (SIH)",
      date: "2025",
      desc: "Participated in Smart India Hackathon (SIH), where our team developed a centralized alumni data management and engagement platform to streamline communication between institutions and alumni. Contributed to designing and building the website interface, ensuring a responsive and user-friendly experience. Successfully advanced to the university-level round, demonstrating strong teamwork and problem-solving capabilities.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Tailwind CSS",
        "Web Development",
        "Team Collaboration",
        "Problem Solving",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: gju,
      school:
        "Guru Jambheshwar University of Science & Technology,Hisar,Haryana",
      date: "Sept 2023 - July 2027",
      grade: "7.03 SGPA",
      desc: "Pursuing a Bachelor of Technology (B.Tech) in Computer Science Engineering with a specialization in Artificial Intelligence and Machine Learning , building a strong foundation in Machine Learning.Along with developing practical skills in Web Development and consistently practicing Data Structures & Algorithms (DSA) to enhance problem-solving and coding efficiency",
      degree: "Bachelor of Technology -B.Tech ",
      certificate: "/certificates/12th.pdf",
    },
    {
      id: 1,
      img: bseb,
      school: "Inter Mathurasini Mahavidyalaya,Rajauli,Nawada",
      date: "Sept 2020 - march 2022",
      grade: "87.2%",
      desc: "Completed 12th (Intermediate) from Mathurashram College under the Bihar School Examination Board (BSEB), with a focus on core subjects including Physics, Chemistry, and Mathematics. Gained a strong academic foundation through the BSEB curriculum, covering fundamental concepts in science, analytical reasoning, and problem-solving skills essential for higher technical education",
      degree: "Intermediate(12th)",
      certificate: "/12th.jpeg",
    },
    {
      id: 2,
      img: cbse,
      school: "Saraswati Vidya Mandir,Rajauli,Nawada,Bihar",
      date: "March 2020",
      grade: "90%",
      desc: "Completed 10th (Matriculation) from Saraswati Vidya Mandir, building a strong academic foundation in core subjects such as Mathematics, Science, and English. Developed essential analytical, problem-solving, and communication skills, which laid the groundwork for higher education and technical studies.",
      degree: "Matriculation (10th)",
      certificate: "/10th.jpeg",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "E-Commerce Website:Ecart",
      description:
        "Developed a full-featured e-commerce web application using the MERN stack with secure authentication, payment processing, and admin management functionality. The platform allows users to browse products, search and filter items, manage cart operations, place secure orders through Razorpay, track purchases, and manage profiles.The admin dashboard provides complete control over product management, order processing, user management, and status updates.",
      image: Ecart,
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "API",
        "Redux Toolkit",
        "JWT",
        "Razorpay",
        "Cloudinary",
        "Render",
        "Vercel",
      ],
      github: "https://github.com/Satyahost/MERN-Ecommerce",
      webapp: "https://mern-ecommerce-henna-seven.vercel.app/",
    },
    {
      id: 1,
      title: "GitHub Profile Detective",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: github,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/Satyahost/github-profile-search",
      webapp: "https://github-profile-search-k2ar.vercel.app/",
    },
    {
      id: 2,
      title: "WhatsApp Chat Analyzer",
      description:
        "A data science and machine learning web application that analyzes exported WhatsApp chat history to extract meaningful insights. Users can upload their chat .txt file to explore message statistics, sentiment analysis, most active users, emoji usage, word frequency, and activity heatmaps. Built with Python and Streamlit, deployed on Streamlit Cloud.",
      image: whatsapp,
      tags: [
        "Python",
        "Streamlit",
        "Pandas",
        "NLP",
        "NLTK",
        "Matplotlib",
        "Seaborn",
        "WordCloud",
      ],
      github: "https://github.com/Satyahost/whatsapp-chat-Analyzer",
      webapp: "https://satyahost-whatsapp-chat-analyzer-app.streamlit.app/",
    },
    {
      id: 3,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Satyahost/github-profile-search",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },

    {
      id: 4,
      title: "IPL Win Predictor",
      description:
        "A machine learning web application that predicts the winning probability of IPL teams in real-time during a match. Users can input match details such as batting team, bowling team, target score, current score, overs completed, and wickets fallen to get an instant win probability prediction. Built using a Logistic Regression model trained on historical IPL match data and deployed with Streamlit.",
      image: Ipl,
      tags: [
        "Python",
        "Streamlit",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Logistic Regression",
        "Machine Learning",
        "Pickle",
      ],
      github: "https://github.com/Satyahost/ml_project-ipl",
      webapp: "https://ml-project-ipl-1.onrender.com/",
    },

    ,
    {
      id: 5,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/Satyahost",
      webapp: "https://imagsearch.netlify.app/",
    },
    {
      id: 6,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: [
        "React JS",
        "API",
        "Image Processing",
        "HTML",
        "CSS",
        "Javascript",
      ],
      github: "https://github.com/Satyahost",
      webapp: "https://removeyourbg.netlify.app/",
    },
  ];  