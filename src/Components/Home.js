import React, { useState , useEffect } from 'react'
import lampOff from "../Assets/Images/lamp-off.png";
import lampOn from "../Assets/Images/lamp-on.png";
import backdropWhite from "../Assets/Images/white-contour-c990a61f.svg";
import Info from './Info';
import Window from './Window';
import "../styles/Home.css"

const Home = () => {
    const [ darkMode , setDarkmode ] = useState(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
        return storedDarkMode ? JSON.parse(storedDarkMode) : true;
    });

    // Update localStorage whenever darkMode changes
    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);  

    const [ activeTab, setActiveTab ] = useState(1);
    console.log(activeTab)



    const handleDarkMode = () => {
        setDarkmode(prev => !prev)
    }

  return (
    <div className={ darkMode? "home dark" : "home"}>
    <img src={darkMode? "" : backdropWhite} alt='img' className={darkMode? "backdrop" : "backdrop light"}/>
        <img
            src={ darkMode? lampOff : lampOn }
            alt='lamp icon'
            className='lamp-icon'
            onClick={handleDarkMode}
        />
        <div className='left'>
            <Info 
                darkMode={darkMode}
                setActiveTab={setActiveTab}
            />
        </div>
        <div className='disp'>
            <Window 
                darkMode={darkMode} 
                activeTab={activeTab}
            />
        </div>
    </div>
  )
}

export default Home;
