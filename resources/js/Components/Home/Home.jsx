import React from 'react';
import './home.css';
import { createRoot } from 'react-dom/client';

const Home = () => {
  return (
    <section className='home'>
      <div className="secContainer container">
        <div className="homeText">
          <h1 className="title">
            Planea tu viaje con Viajes Hco
          </h1>
          <p className="subTitle">
            Viaja por tus lugares favoritos mientras disfrutas de los paisajes
          </p>
          <button className='btn'>
            <a href="#">Explora Ahora</a>
          </button>
        </div>

        <div className="homeCard grid">
          <div className="locationDiv">
            <label htmlFor="location">Lugar</label>
            <input type="text" placeholder='Destino De tus Sueños'/>
          
          
          <div className="distDiv">
            <label htmlFor="location">Distancia</label>
            <input type="text" placeholder='1/Km'/>
          </div>

          <div className="priceDiv">
            <label htmlFor="location">Precio</label>
            <input type="text" placeholder='$30-$90'/>
          </div>
          
          <button className='btn'> 
            Buscar
          </button>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Home;

if (document.getElementById('home')) {
  const Index = createRoot(document.getElementById("home"));

  Index.render(
      <React.StrictMode>
          <Home/>
      </React.StrictMode>
  )
}