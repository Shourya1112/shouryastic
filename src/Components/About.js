import React from 'react'
import "../styles/about.css"

const About = (props) => {
    const isDark = props.darkMode;

  return (
    <div className='about' id='about'>
            <h4 className='tag2'>{"<div id='About'>"}</h4>
            <p className='passage'>
                Hey there! 👋 I'm Shourya, your friendly neighborhood MERN Stack Developer, and I've got a knack for turning coffee into code ☕💻. With a solid foundation in JavaScript and 2 years of hands-on React.js experience, I'm all about crafting web applications that are not just user-friendly but also sprinkle a little magic 🪄 on the user experience.
            </p>
            <h4 className='tag2'>{"</div>"}</h4>
            <h4 className='tag2'>{"<div id='Currently Working at'>"}</h4>
            <div>
                <h3 className='ans comp-name'>EiKomp</h3>
                <h4 className='ans profile'>-- Frontend Developer</h4>
                <p className='ans period'>Aug, 2021 -{">"} Current</p>
            </div>
        <h4 className='tag2'>{"</div>"}</h4>
    </div>
  )
}

export default About;

// <div className={isDark? 'card' : 'card light'}>
//             <h4 className='tag2'>{"<div id='Tech Stack'>"}</h4>
//             <h2 className='ans tech-stack'>MERN</h2>
//             <h4 className='tag2'>{"</div>"}</h4>
//         </div>
//         <div className={isDark? 'card' : 'card light'}>
//             <h4 className='tag2'>{"<div id='Latest Qualification'>"}</h4>
//             <h3 className='ans'>Bachelor of Technology</h3>
//             <h4 className='tag2'>{"</div>"}</h4>
//         </div>