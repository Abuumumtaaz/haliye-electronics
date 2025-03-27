import React from 'react'

const Cards = () => {
  return (
    <div>
        <div className="cards">
        <div className="card-item">
            <img src="garden.webp" alt="jscn" />
            <h3>Spend & save on outdoor living and garden</h3>
            <p>Save £50 on £300 / Save £120 on £600 / Save £250 on £1000.</p>
            <a href="#">Shop now</a>
        </div>

        <div className="card-item">
            <img src="toy.webp" alt="jscn" />
            <h3>Save 20% on selected outdoor toys</h3>
            <p>Save £50 on £300 / Save £120 on £600 / Save £250 on £1000.</p>
            <a href="#">Shop now</a>
        </div>

        <div className="card-item">
            <img src="fadhiqado.webp" alt="jscn" />
            <h3>Save 20% on selected furniture with code FURN20</h3>
            <p>Save £50 on £300 / Save £120 on £600 / Save £250 on £1000.</p>
            <a href="#">Shop now</a>
        </div>
      </div>
    </div>
  )
}

export default Cards