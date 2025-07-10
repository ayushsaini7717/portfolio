const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Projects",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/reactlogo.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Innovative Thinking",
    desc: "Bringing fresh ideas and creative problem-solving to every project I work on.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Developer Mindset",
    desc: "Combining curiosity, logic, and consistency to build smart, scalable solutions.",
  },
  {
    imgPath: "/images/time.png",
    title: "Always Improving",
    desc: "Continuously learning and evolving to stay ahead in a fast-moving tech world.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "DSA(C++)",
    modelPath: "/models/c.glb",
    scale: 0.08,
    rotation: [0, 0, 0],
  },
  {
    name: "Typescript",
    modelPath: "/models/ts.glb",
    scale: 1.6,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "During internship Ayush has been very sincere and hardworking. I wish him all success in the future endeavours.",
    imgPath: "/images/vlabs.png",
    logoPath: "/images/iitrLogo.png",
    title: "Web development intern",
    date: "January 2025 - March 2025",
    responsibilities: [
      "Developed interactive web-based simulations for the COA Virtual Lab at IIT.",
      "Collaborated with professors and researchers to translate complex concepts into user-friendly interfaces.",
      "Improved performance and usability of lab modules to enhance student learning experience.",
    ],
  },
  {
    review: "During internship Ayush has been very sincere and hardworking. I wish him all success in the future endeavours.",
    imgPath: "/images/vlabs.png",
    logoPath: "/images/iitrLogo.png",
    title: "Python developer intern",
    date: "July 2023 - August 2023",
    responsibilities: [
      "Designed and developed an interactive simulator for the MPTT theorem in Basic Electrical Engineering using Streamlit.",
      "Leveraged NumPy for numerical computations and Plotly for dynamic visualizations.",
      "Collaborated with mentors to ensure the tool was educational, accurate, and user-friendly for students.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Chat-app",
    mentions: "React,Ws,Node.js,Tailwind CSS",
    review:
      "Built a real-time messaging app with authentication, typing indicators, and delivery receipts. Focused on seamless UX and data sync across clients.",
  },
  {
    name: "Web Simulator",
    mentions: "Python,Numpy,Plotly,Streamlit",
    review:
    "Developed an interactive simulator for MPTT Theorem to simulate the experiment, perform tests and visualization through graphs.",
  },
  {
    name: "CarePulse",
    mentions: "Next.js,Postgresql,Prisma ORM,Tailwind CSS,Nodemailer",
    review:
    "Developed a complete system to manage hospital operations including patient records, doctor scheduling, and admin workflows.",
  },
  {
    name: "Application Management System",
    mentions: "Next.js,Oauth,Postgresql,Prisma ORM,Tailwind CSS,APIs",
    review:
    "Designed and developed a platform to streamline the application intake and review process for organizations. Included admin controls, status tracking, and dynamic form creation.",
  },
  {
    name: "VideoKit",
    mentions: "Next.js,Imagekit.io,Tailwind CSS,Oauth,Mongodb",
    review:
    "A platform in which users can share video and get access to other creators videos.",
  },
  {
    name: "Restaurant UI",
    mentions: "React.js,Recoil.js,Tailwind CSS",
    review:
      "Designed and built a modern, responsive restaurant interface using Recoil.js for state management.",
  },
];

const socialImgs = [
  {
    name: "Github",
    imgPath: "/images/git.png",
    link: "https://github.com/ayushsaini7717"
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link: "https://www.linkedin.com/in/ayush-saini-85295b22a/"
  },{
    name: "Mail",
    imgPath: "/images/gmail.png",
    link: "mailto:ayushsaini7717@gmail.com"
  }
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
