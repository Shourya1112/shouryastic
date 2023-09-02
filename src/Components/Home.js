import React, { useState } from 'react'
import lamp from "../Assets/Images/lamp.png";
import lampOn from "../Assets/Images/lamp-on.png";
import "../styles/Home.css"

const Home = () => {
    const [ darkMode , setDarkmode ] = useState(true);

    const handleDarkMode = () => {
        setDarkmode(prev => !prev)
    }

  return (
    <div className={ darkMode? "home" : "home-light"}>
        <img
            src={ darkMode? lamp : lampOn }
            alt='lamp icon'
            className='lamp-icon'
            onClick={handleDarkMode}
        />
        <div className='left'>
            <div className='info'>
            <h3 className='hi'>Hi,<span className={ darkMode? "me" : "me-light"}>I Am</span></h3>
            <h1 className='name'>Shourya<br/>Mishra</h1>
                <h2 className='kaam'>Full Stack Dev..</h2>
                <ul className='nav'>
                    <li className='nav-items'><span>Work</span></li>
                    <li className='nav-items'><span>Skills</span></li>
                    <li className='nav-items'><span>Projects</span></li>
                    <li className='nav-items'><span>Know Me</span></li>
                </ul>
                <h2 className='int'>
                if ( Recruiter === Interested ) {"{"} <br/> <button className='hire-btn'>Contact Me</button> <br/> {"}"} <br/> else {"{"} <br/> <button className='resume-btn'>Resume</button> <br/> {"}"};
                </h2>
            </div>
        </div>
        <div className='disp'>

        </div>
    </div>
  )
}

export default Home