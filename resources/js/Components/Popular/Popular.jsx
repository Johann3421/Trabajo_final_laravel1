import React from 'react'
import './popular.css'

import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'

import img2 from '../../Assets/image(2).jpg'
import img5 from '../../Assets/image(5).jpg'
import img7 from '../../Assets/image(7).jpg'
import img9 from '../../Assets/image(9).jpg'

import { createRoot } from 'react-dom/client';

const Data = [
  {
      id:1,
      imgSrc: img2,
      destTitle: 'Machu Pichu',
      location: 'Peru',
      grade: 'Cultural Relax',
    },
    {
      id:2,
      imgSrc: img5,
      destTitle: 'Guanajuato',
      location: 'Mexico',
      grade: 'Cultural Relax',
    },
    {
      id:3,
      imgSrc: img7,
      destTitle: 'Angkor Wat',
      location: 'Cambodia',
      grade: 'Cultural Relax',
    },
    {
      id:4,
      imgSrc: img9,
      destTitle: 'Taj Mahal',
      location: 'India',
      grade: 'Cultural Relax',
    },
]

const Popular = () => {
  return (
    <section className='popular section container'>
      <div className="secContainer">

        <div className="secHeader flex">

            <div className="textDiv">
                <h2 className="secTitle">
                  Destinos Populares
                </h2>
                <p>
                  Historicas ciudades y naturaleza espectacular, mira lo mejor de Huánuco
                </p>
            </div>

            <div className="iconsDiv flex">
              <BsArrowLeftShort className="icon leftIcon"/>
              <BsArrowRightShort className="icon rightIcon"/>
            </div>

        </div>

        <div className="mainContent grid">
          {
            Data.map(({id,imgSrc,destTitle,location,grade})=>{
              return(
                <div className="singleDestination" key={id}>
                  <div className="destImage">

                    <img src={imgSrc} alt="Image title" />
            
                    <div className="overlayInfo">
                      <h3>{destTitle}</h3>
                      <p>
                        {location}
                      </p>
                

                      <BsArrowRightShort className='icon'/>

                    </div>


                </div>

                <div className="destFooter">
              <div className="number">
                0{id}
              </div>

              <div className="destText flex">
                  <h6>
                    {location}
                  </h6>
                  <span className='flex'>
                    <span className="dot">
                      <BsDot className="icon"/>
                    </span>
                    Hco
                  </span>
              </div>
                </div>
          </div>
              )
            })
          }

        </div>

      </div>
      
    </section>
  )
}

export default Popular

if (document.getElementById('popular')) {
  const Index = createRoot(document.getElementById("popular"));

  Index.render(
      <React.StrictMode>
          <Popular/>
      </React.StrictMode>
  )
}