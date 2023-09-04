import React from 'react'
import "../styles/about.css"

const About = (props) => {
    const isDark = props.darkMode;

  return (
    <div className='about' id='about'>
        <div className={isDark? 'card' : 'card light'}>
            <h4 className='tag2'>{"<div id='About'>"}</h4>
            <p className='passage'>Tech enthusiast turned full stack developer. Passionate about creating seamless user experiences through clean and efficient code. Equipped with a diverse skill set in front-end and back-end technologies, I strive to bring innovative solutions to life. Ready to tackle challenges and make a positive impact in the digital world.</p>
            <h4 className='tag2'>{"</div>"}</h4>
        </div>
        <div className={isDark? 'card' : 'card light'}>
            <h4 className='tag2'>{"<div id='Currently Working at'>"}</h4>
            <h3 className='ans comp-name'>EiKomp</h3>
            <h4 className='ans profile'>-- Frontend Developer</h4>
            <p className='ans period'>Aug, 2021 -{">"} Current</p>
        <h4 className='tag2'>{"</div>"}</h4>
        </div>
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