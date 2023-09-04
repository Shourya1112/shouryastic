import React, { useEffect , useState } from 'react';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import "../styles/window.css"

const Window = (props) => {
    const darkMode = props.darkMode;
    const activeTab = props.activeTab;

  return (
    <div className='window'>
        {activeTab === 0? <About darkMode={darkMode}/> : ""}
        {activeTab === 1? <Projects darkMode={darkMode}/> : ""}
        {activeTab === 2? <Skills/> : ""}
    </div>
  )
}

export default Window