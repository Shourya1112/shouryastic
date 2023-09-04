import React, { useState , useEffect } from 'react';
import mac from "../Assets/Images/macbookpro16.png";
import "../styles/projects.css"

const Projects = () => {
   const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = mac;
    img.onload = () => {
      // Image has finished loading, update the state
      setImageLoaded(true);
    };
  }, []);

  return (
    <div className='main' id='projects'>
      {imageLoaded && (
        <div className='carousel'>
          <img
            src={mac}
            alt="display"
            className='mac'
          />
          <div className='test'>hi</div>
        </div>
      )}
        <div className='description'>
          <h4 className='tag start'>{"<div id='projects'>"}</h4>
          <div className='text'>
            <h2 className='sample'>Random Words</h2>
            <h4 className='stack'>const techStack = {"[ ReactJS, javascript, material ui, mongodb, expressJS]"}</h4>
          </div>
          <h4 className='tag end'>{"</div>"}</h4>
        </div>
    </div>
    )
  }
  // <div className='main'>
  //     <div className='carousel'>
  //         <img src={mac} alt="display" className='mac' loading='eager' />
  //         <div className='test'>hi</div>
  //     </div>
  //     <div className='description'>
  //       <h4 className='tag start'>{"<div id='projects'>"}</h4>
  //         <div className='text'>
  //           <h2 className='sample'>Random Words</h2>
  //           <h4 className='stack'>const techStack = {"[ ReactJS, javascript, material ui, mongodb, expressJS]"}</h4>
  //         </div>
  //       <h4 className='tag end'>{"</div>"}</h4>
  //     </div>
  // </div>

export default Projects