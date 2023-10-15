import React from 'react'
import './offer.css'
import {MdKingBed} from 'react-icons/md'
import {MdBathtub} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import {MdAirportShuttle} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'
import {BsArrowRightShort} from 'react-icons/bs'

import img6 from '../../Assets/image(6).jpg'
import img7 from '../../Assets/image(7).jpg'
import img8 from '../../Assets/image(8).jpg'
import { createRoot } from 'react-dom/client';



const Offers = [
  {
    id:1,
    imgSrc: img8,
    destTitle: 'Machu Pichu',
    location: 'Peru',
    price: '$90',
  },
  {
    id:2,
    imgSrc: img6,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    price: '$50',
  },
  {
    id:3,
    imgSrc: img7,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    price: '$90',
  },
  
]
const Offer = () => {
  return (
    <section className='offer container section'>
      <div className="secContainer">
        
        <div className="secIntro">
          <h2 className="secTitle">
            Ofertas Especiales
          </h2>
          <p>
            Ciudades con historias increibles y una flora espectacular, ven y mira lo mejor de Huánuco
          </p>
        </div>

        <div className="mainContent grid">

        {
  Offers.map((offer) => {
    const { id, imgSrc, destTitle, location, price } = offer;
    return (
      <div className="singleOffer" key={id}>
        <div className="destImage">
          <img src={imgSrc} alt={destTitle} />
          <span className="discount">30% Off</span>
        </div>
        <div className="offerBody">
          <div className="price flex">
            <h4>{price}</h4>
            <span className="status">For Rent</span>
          </div>
          <div className="amenities flex">
            <div className="singleAmenity flex">
              <MdKingBed className="icon" />
              <small>2 Camas</small>
            </div>
            <div className="singleAmenity flex">
              <MdBathtub className="icon" />
              <small>1 Baño</small>
            </div>
            <div className="singleAmenity flex">
              <FaWifi className="icon" />
              <small>Wi-Fi</small>
            </div>
            <div className="singleAmenity flex">
              <MdAirportShuttle className="icon" />
              <small>Transporte</small>
            </div>
          </div>
          <div className="location flex">
            <MdLocationOn className="icon" />
            <small>calle de ejemplo {location}</small>
          </div>
          <button className="btn flex">
            Ver Detalles
            <BsArrowRightShort className="icon" />
          </button>
        </div>
      </div>
    );
  })
}




        </div>
      </div>
    </section>
  )
}

export default Offer

if (document.getElementById('offer')) {
  const Index = createRoot(document.getElementById("offer"));

  Index.render(
      <React.StrictMode>
          <Offer/>
      </React.StrictMode>
  )
}