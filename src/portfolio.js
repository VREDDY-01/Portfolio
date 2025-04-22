/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vishnu Teja",
  title: "Hello I am Vishnu Teja!",
  subTitle: emoji(
    "A passionate Programmer, AWS Developer, Full Stack Web Developer and Devops Enthusiast."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ziZLqbV3x5bNrX1rFUtuBQJBK0XGsb1E/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/VREDDY-01",
  linkedin: "https://www.linkedin.com/in/kvishnuteja/",
  gmail: "vreddy2300@gmail.com",
  facebook: "https://www.facebook.com/VishnuTeja01/",
  instagram: "https://www.instagram.com/vishnuteja1910/",
  twitter: "https://twitter.com/VishnuTeja1910",

  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle:
    "PASSIONATE LEARNER, INNOVATIVE THINKER, AND CREATIVE PROBLEM SOLVER.",
  skills: [
    emoji("⚡ Proficient in Development, Deployments and managing Infrastructure."),
    emoji(
      "⚡ Hands-on experience in building web applications with diverse technology stacks and deploying the apps to the public facing on AWS Cloud"
    ),
    emoji(
      "⚡ Possesses a strong grasp of fundamental principles in Computer Networks and Infra side knowledge on Cloud."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "Jenkins",
    fontAwesomeClassname: "fab fa-jenkins"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fa-brands fa-docker"
  },
  {
    skillName: "Terraform",
    fontAwesomeClassname: "fa-solid fa-cloud"
  },
  {
    skillName: "Kubernetes",
    fontAwesomeClassname: "fa-solid fa-dharmachakra"
  },
  {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nextjs",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "KLE Technological University,Hubbali",
      logo: require("./assets/images/klelogo.png"),
      subHeader: "Bachelors of Technology in Mechanical",
      duration: "September 2019 - December 2023",
      desc: "CGPA:-6.9/10",
      descBullets: [
        "Part of Aero-KLE Team.",
        "Part of College Volley Ball and Kabaddi Team."
      ]
    },
    {
      schoolName: "Nandi Pre-University College",
      logo: require("./assets/images/nandilogo.jpg"),
      subHeader: "Senior Secondary Education",
      duration: "July 2017- July 2019",
      desc: "86.6%",
      descBullets: [
        "Part of College Volley Ball Team.",
        "Represented College in various olympiads."
      ]
    },
    {
      schoolName: "Montessori Residential High School",
      logo: require("./assets/images/montessorilogo.png"),
      subHeader: "Secondary Education",
      duration: "April 2007- July 2017",
      desc: "CGPA:-9.8/10",
      descBullets: [
        "Member of School Dance Club.",
        "Part of School Volley Ball Team.",
        "Represented School in various Co-Curricular activities."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Deployment",
      progressPercentage: "95%"
    },
    {
      Stack: "Devops",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    ],
    displayCodersrank: false // Set true to display codersrank badges section
  };

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Cloud Operations Support Engineer",
      company: "Operisoft Technologies Ltd",
      companylogo: require("./assets/images/operisoftlogo.png"),
      date: "Sep 2023 – Present",
      desc: "Achieved Expertise in cloud infrastructure, automation, DevOps, and security with hands-on experience in AWS, Kubernetes, and CI/CD.",
      descBullets: [
        "Set up and managed AWS EKS clusters, EC2 SUSE servers with Samba, and automated CloudWatch alarm configurations using Python for efficient monitoring.",
        "Implemented CloudWatch alarms for CPU, memory, and disk utilization, tracked AWS access key usage, and restricted key access based on IP ranges for security for over 50 accounts of our customers.",
        "Built and optimized CI/CD pipelines using Jenkins, Docker, and Kubernetes, ensuring seamless deployment and scalability of cloud applications.",
        "Deployed Prometheus and Grafana for AWS EKS node monitoring, enabling real-time performance insights and proactive issue resolution.",
        "Set up AWS Lambda and CloudWatch log-based monitoring to track AWS events, access key usage, and automate responses for security and operational efficiency.",
        "Worked on integrating AWS services with on-premises environments and hybrid cloud solutions for seamless workload migration and interoperability.",
        "and Much More.."
      ]
    },
    {
      role: "Apprentice",
      company: "Geekster",
      companylogo: require("./assets/images/geeksterlogo.jpg"),
      date: "Jan 2023 – Aug 2024",
      desc: "Achieved expertise in DSA & Development skills by successfully solving over 300 coding questions on the Geekster platform.",
      descBullets: [
        "Achieved expertise in DSA by successfully solving over 300 coding questions on the Geekster platform.",
        "Developed functional APIs such as Doctor-Appointment App and Food-Delivery Application during project work.",
        "Completed certification programs in SQL and Git organized by Geekster, demonstrating a commitment to continuous learning and professional development."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements🏆 "),
  subtitle:"",

  achievementsCards: [
    {
      title: "AWS Certified Developer Associate",
      subtitle:
        "Achieved AWS Certified Developer – Associate, demonstrating expertise in building, deploying, and optimizing cloud-native applications on AWS with a strong focus on scalability and security.",
      image: require("./assets/images/AWSCerified.png"),
      imageAlt: "AWS Developers Certificate Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.credly.com/badges/8be88ea5-67aa-40d2-81a3-8b3756ae7527/public_url"
        }
      ]
    },
    {
      title: "Web Development Bootcamp by London App Brevery",
      subtitle:
        "Successfully completed a MERN stack web development bootcamp, showcasing proficiency in MongoDB, Express.js, React, and Node.js for building full-stack web applications.",
      image: require("./assets/images/appbreverylogo.png"),
      imageAlt: "APP Brevery Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.udemy.com/certificate/UC-a8345f86-04d7-486b-a867-2a6ffc74f354/"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "google.com",
      title: "Hello",
      description:
        "how are you"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};


// Contact Section

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to hire me, discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8431439396",
  email_address: "vreddy2300@gmail.com"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  isHireable
};
