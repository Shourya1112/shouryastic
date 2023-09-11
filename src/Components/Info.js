import React from 'react';
import Socials from './Socials';
import plane from "../Assets/Images/paperplane.png"
import resume from "../Assets/Images/resume.png"
import "../styles/info.css";

const Info = (props) => {
    const darkMode = props.darkMode;
    const setActiveTab = props.setActiveTab;

    function handleAbout () {
        setActiveTab(0);
    }
    
    function handleProjects () {
        setActiveTab(1);
    }
    function handleSkills () {
        setActiveTab(2);
    }


  return (
    <div className='info'>
        <span className='hi'>Hi,</span>
        <span className="me">I Am</span>
        <h1 className='name'>
            Shourya<br/>Mishra
        </h1>
        <h2 className='kaam'>
            Full Stack Dev..
        </h2>
        <ul className='nav'>
            <li className='nav-items' onClick={handleAbout}><span>-- Know Me</span></li>
            <li className='nav-items'  onClick={handleProjects}><span>-- Projects</span></li>
            <li className='nav-items' onClick={handleSkills}><span>-- Skills</span></li>
        </ul>
        <h3 className='buttons'>
            if ( You = Like my Work ) {"{"} <br/>
            <a href='https://forms.gle/1YG5Kbc9gjcv1HAS7'>
                <button className='btn'>
                    <img src={plane} alt='icon' className='btn-icon' />
                    Contact Me
                    </button> 
                </a>
            {"}"} else {"{"} 
                <a
                    href='https://drive.google.com/file/d/1JbyVNQ_kB9opZ_whDfU-_yBwYGQsbaGN/view?usp=drive_link'
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className='btn resume'>
                        <img src={resume} alt='icon' className='btn-icon' />
                        Resume
                    </button> 
                </a>
            {"}"};
        </h3>
        <Socials darkMode={darkMode}/>
    </div>
  )
}

export default Info