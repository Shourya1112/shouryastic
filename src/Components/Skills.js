import React from 'react'
import mongoDbIcon from '../Assets/Images/mongodb.png'
import expressJsIcon from '../Assets/Images/expressjs.png'
import reactJsIcon from '../Assets/Images/reactjs.png'
import nodeJsIcon from '../Assets/Images/nodejs.png'
import pythonIcon from '../Assets/Images/python.png'
import nextJsIcon from '../Assets/Images/nextjs.png'
import javascriptIcon from '../Assets/Images/js.png'
import sassIcon from '../Assets/Images/sass.png'
import gitIcon from '../Assets/Images/git.png'
import htmlIcon from '../Assets/Images/html.png'
import cssIcon from '../Assets/Images/css-3.png'
import "../styles/skills.css"

const Skills = () => {
    const frontendSkills = [
        { name: 'React', icon: reactJsIcon },
        { name: 'Next.js', icon: nextJsIcon },
        { name: 'JavaScript', icon: javascriptIcon },
        { name: 'Sass', icon: sassIcon },
        { name: 'HTML', icon: htmlIcon },
        { name: 'CSS', icon: cssIcon },
    ];

    const backendSkills = [
        { name: 'MongoDB', icon: mongoDbIcon },
        { name: 'Express.js', icon: expressJsIcon },
        { name: 'Node.js', icon: nodeJsIcon },
        { name: 'Python', icon: pythonIcon },
    ]

  return (
    <div id='skills-main'>
        <h4 className='tag start'>{"<div id='Frontend Skills'>"}</h4>
        <div className='skills'>
            {frontendSkills.map((skill, index) => (
            <div key={index} className='skills-item'>
                <img src={skill.icon} alt='icons' className='skills-icons' />
                <span className='skills-name'>{skill.name}</span>
            </div>
            ))}
        </div>
        <h4 className='tag end'>{"</div>"}</h4>
        {// backend skills 
        }
        <h4 className='tag start'>{"<div id='Backend Skills'>"}</h4>
        <div className='skills'>
            {backendSkills.map((skill, index) => (
            <div key={index} className='skills-item'>
                <img src={skill.icon} alt='icons' className='skills-icons' />
                <span className='skills-name'>{skill.name}</span>
            </div>
            ))}
        </div>
        <h4 className='tag end'>{"</div>"}</h4>
    </div>
  )
}

export default Skills
        //   {frontendSkillsIcons.map((image, index) => (
        //       <img 
        //           key={index} 
        //           src={image} 
        //           alt='icons' 
        //           className='skills-icons' 
        //       />
        //   ))}