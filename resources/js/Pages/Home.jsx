import React from 'react'
import Guest from '../Layouts/Guest'

export default function Home() {
  return (
    <>
      <div className="container my-5">
        <div className="card">
          <img src="/imagen-playa.jpg" className="card-img-top" alt="Playa Hermosa" />
          <div className="card-body">
            <h5 className="card-title">Playa Hermosa</h5>
            <p className="card-text">
              Disfruta de las aguas cristalinas y la arena suave en Playa Hermosa. ¡Un destino ideal para relajarte y disfrutar del sol!
            </p>
            <a href="/playa-hermosa" className="btn btn-primary">Más Información</a>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="card">
          <img src="/imagen-montaña.jpg" className="card-img-top" alt="Montañas Verdes" />
          <div className="card-body">
            <h5 className="card-title">Montañas Verdes</h5>
            <p className="card-text">
              Embárcate en una aventura por las impresionantes montañas verdes. Perfecto para los amantes del senderismo y la naturaleza.
            </p>
            <a href="/montañas-verdes" className="btn btn-primary">Más Información</a>
          </div>
        </div>
      </div>
    </>
  )
}



Home.layout = (page) => <Guest children={page} title={"Home"}/>
