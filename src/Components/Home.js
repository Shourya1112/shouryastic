import React, { useState , useEffect } from 'react'
import lampOff from "../Assets/Images/lamp-off.png";
import lampOn from "../Assets/Images/lamp-on.png";
import backdropWhite from "../Assets/Images/white-contour-c990a61f.svg";
import Info from './Info';
import Window from './Window';
import Footer from './Footer';
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

    const [ activeTab, setActiveTab ] = useState(() => {
    const storedActiveTab = localStorage.getItem('activeTab');
        return storedActiveTab ? JSON.parse(storedActiveTab) : 1;
    });

    useEffect(() => {
        localStorage.setItem('activeTab', JSON.stringify(activeTab));
    }, [activeTab]);

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
            <div className='tab'>
                <Info 
                    darkMode={darkMode}
                    setActiveTab={setActiveTab}
                />
                <div className='tab-footer'>
                    <Footer />
                </div>
            </div>
        </div>
        <div className='disp'>
            <div className='active-comp'>
                <Window 
                    darkMode={darkMode} 
                    activeTab={activeTab}
                />
            </div>
            <div className="tab-footer-mobile">
                <Footer />
            </div>
            </div>
    </div>
  )
}

export default Home;
