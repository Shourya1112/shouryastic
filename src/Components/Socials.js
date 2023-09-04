import React from 'react';
import githubBlack from "../Assets/Images/github-d.png";
import linkedinBlack from "../Assets/Images/linkedin-d.png";
import githubWhite from "../Assets/Images/gihub-w.svg";
import linkedinWhite from "../Assets/Images/linkedin-w.png";
import "../styles/socials.css";

const Socials = (props) => {
    const isDark = props.darkMode;

    const lightModeIcons = [
        {
            icon: githubBlack,
            link: "https://github.com/Shourya1112"
        },
        {
            icon: linkedinBlack,
            link: "https://www.linkedin.com/in/shourya-mishra-6b730322b/"
        }
    ]

    const darkModeIcons = [
        {
            icon: githubWhite,
            link: "https://github.com/Shourya1112"
        },
        {
            icon: linkedinWhite,
            link: "https://www.linkedin.com/in/shourya-mishra-6b730322b/"
        }
    ]

  return (
    <div className='socials'>
        {/* Render icons with links based on the current mode */}
            {isDark ? (
                darkModeIcons.map((icon, index) => (
                    <a
                        href={icon.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                        className='links'
                    >
                        <img
                            src={icon.icon}
                            alt={`Dark Mode Icon ${index}`}
                            className='social-icons'
                        />
                    </a>
                ))
            ) : (
                lightModeIcons.map((icon, index) => (
                    <a
                        href={icon.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                        className='links'
                    >
                        <img
                            src={icon.icon}
                            alt={`Light Mode Icon ${index}`}
                            className='social-icons'
                        />
                    </a>
                ))
            )}
    </div>
  )
}

export default Socials