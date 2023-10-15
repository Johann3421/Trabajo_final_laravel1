import React from 'react'
import './about.css'

import img from '../../Assets/customer.png'
import img2 from '../../Assets/mountain.jpg'
import img3 from '../../Assets/climbing.png'

import video from '../../Assets/video.mp4'
import { createRoot } from 'react-dom/client';


const About = () => {
  return (
    <section className='about section'>
      <div className="secContainer">
        <h2 className="title">
          Por que viajas?
        </h2>

        <div className="mainContent container grid">
          <div className="singleItem">
            <img src={img2} alt="Image Name" />

            <h3>100+ Montañas</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, numquam.
            </p>


          </div>
          <div className="singleItem">
            <img src={img3} alt="Image Name" />

            <h3>100+ Montañas</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, numquam.
            </p>

            
          </div>
          <div className="singleItem">
            <img src={img} alt="Image Name" />

            <h3>100+ Montañas</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, numquam.
            </p>

            
          </div>

        </div>

        <div className="videoCard container">
          <div className="cardContent grid">

            <div className="cardText">
              <h2>
                Lorem ipsum dolor sit amet.
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet vitae eius magnam?
              </p>
            </div>

            <div className="cardVideo">
              <video src={video} autoPlay loop muted type="video/mp4"></video>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About

if (document.getElementById('about')) {
  const Index = createRoot(document.getElementById("about"));

  Index.render(
      <React.StrictMode>
          <About/>
      </React.StrictMode>
  )
}