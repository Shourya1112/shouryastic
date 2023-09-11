import React, { useState , useEffect } from 'react';
import mac from "../Assets/Images/macbookpro16.png";
import reactDashboardImg from "../Assets/Images/reactDashboard.png";
import notesAppImg from "../Assets/Images/notesApp.png";
import jewelStoreImg from "../Assets/Images/jewellaryStoreMockup.png";
import aicansellImg from "../Assets/Images/aicansell.png";
import memeGeneratorImg from "../Assets/Images/memeGenerator.png";
import prevPortfolioImg from "../Assets/Images/pastPortfolio.png";
import underWorkImg from "../Assets/Images/underWorks.jpg";
import leftIcon from "../Assets/Images/left-chevron.png";
import rightIcon from "../Assets/Images/right-chevron.png"
import "../styles/projects.css";

const projectData = [
  {
    id: 1,
    name: "React Dashboard",
    image: reactDashboardImg,
    description: "I completed this dynamic ReactJS dashboard with ChartJs integration in just three days. It offers an engaging way to explore data insights.",
    webLink: "https://react-dashboard-xi-sandy.vercel.app/",
    githubLink: "https://github.com/Shourya1112/react-dashboard",
    techUsed: ["ReactJS", "JavaScript", "ChartJs", "SASS/SCSS"],
  },
  {
    id: 2,
    name: "Markdown Notes App",
    image: notesAppImg,
    description: "A note-taking app developed with ReactJS for easy organization and editing of markdown notes.",
    githubLink: "https://github.com/Shourya1112/Markdown-Notes-App",
    techUsed: ["ReactJS", "JavaScript" , "React-MDE" , "CSS"],
  },
  {
    id: 3,
    name: "My Previous Portfolio",
    image: prevPortfolioImg,
    description: "My previous web development portfolio showcasing projects and skills. It was just a weekend project but needed a new one for expandability",
    webLink: "https://shouryastic.vercel.app/",
    githubLink: "https://github.com/Shourya1112/portfolio",
    techUsed: ["ReactJS" , "Javascript" , "MaterialUI" , "EmailJS" , "Figma"],
  },
  {
    id: 4,
    name: "Jewelry Store Mockup",
    image: jewelStoreImg,
    description: "A work-in-progress mockup of an online jewelry store, featuring a frontend built with ReactJS.",
    webLink: "https://jewellery-ecommerce-store.vercel.app/",
    githubLink: "https://github.com/Shourya1112/jewellery-Ecommerce-store",
    techUsed: ["ReactJS" , "Javascript" , "CSS" ],
  },
  {
    id: 5,
    name: "Mockup Website - AiCanSell",
    image: aicansellImg,
    description: "I crafted this website for AiCanSell under a deadline, presenting it with a clean and attractive design.",
    webLink: "https://aicansell.vercel.app/",
    githubLink: "https://github.com/Shourya1112/mock-website",
    techUsed: ["ReactJS" , "Javascript" , "CSS" ],
  },
  {
    id: 6,
    name: "Meme Generator",
    image: memeGeneratorImg,
    description: "I developed this mobile app using the Imgflip API, allowing users to easily add top and bottom text to create humorous memes.",
    webLink: "https://meme-generator-sm.netlify.app/",
    githubLink: "https://github.com/Shourya1112/Meme-Generator",
    techUsed: ["ReactJS" , "Javascript" , "CSS" ],
  },
  {
    id: 7,
    name: "Data Organizing App using AI (Work in Progress)",
    image: underWorkImg,
    description: "An ongoing project to develop an AI-powered data organizing app using ReactJS and OpenAI's chatGPT API",
    techUsed: ["NextJS" , "Javascript" , "Tailwind" , "MongoDB" , "ExpressJS" ],
  },
];




const Projects = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTimeoutAlert, setShowTimeoutAlert] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = projectData[currentIndex].image;
    img.onload = () => {
      // Image has finished loading, update the state
      setImageLoaded(true);

      // Show the timeout alert after component has loaded
      setTimeout(() => {
      setShowTimeoutAlert(true);
      // Hide the timeout alert after 5 seconds
      setTimeout(() => {
        setShowTimeoutAlert(false);
      }, 5000);
    }, 100);

    };
  }, [window.reload]);

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projectData.length - 1 : prevIndex - 1));
  };

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projectData.length - 1 ? 0 : prevIndex + 1));
  };

  const currentProject = projectData[currentIndex];

  const handleImageClick = () => {
    if (currentProject.webLink) {
      window.open(currentProject.webLink, "_blank");
    }
  };

  return (
    <div className='main' id='projects'>
    <div className='timeout-alert'>
      Click on project image to view live preview
    </div>
      {imageLoaded && (
        <div className='carousel'>
          <img
            src={mac}
            alt="display"
            className='mac'
          />
          <img
            src={currentProject.image}
            alt={currentProject.name}
            className='project-image'
            onClick={handleImageClick}
          />
        </div>
      )}
      
      
      <div className='description'>
        <div className='carousel-nav-btns'>
          <button className='prev' onClick={prevProject}>
            <img src={leftIcon} alt='prev' className='nav-btn' />
          </button>
          <button className='next' onClick={nextProject}>
            <img src={rightIcon} alt='next' className='nav-btn' />
          </button>
        </div>
        <h4 className='tag start'>{"<div id='projects'>"}</h4>
        <div className='project-info'>
            <h3 className='id'>
              Id='{currentProject.id}'
            </h3>
            <h2 className='project-name'>
              {currentProject.name}
            </h2>
            <p className='project-description'>
              {currentProject.description}
            </p>
            <h4 className='project-techstack'>
              const techStack = {JSON.stringify(currentProject.techUsed)}
            </h4>
            <a 
              href={currentProject.githubLink} 
              className='link' 
              target="_blank" 
              rel="noopener noreferrer"
            >
                {"</>"} Code
            </a>
        </div>
        <h4 className='tag end'>{"</div>"}</h4>
      </div>
    </div>
  );
};

export default Projects;


      // {showTimeoutAlert? (
      //   ) : ""}