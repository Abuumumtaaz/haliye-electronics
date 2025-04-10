import React from 'react'
import { GrDeliver } from "react-icons/gr"
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <section className="heroos">
      <div className='Hero<'>
      <div className="items">
      <span className="van"><GrDeliver /></span>
      <p>Free delivery when you spend £100</p>
      </div>

      <div className="image">
      <img src="hero.webp" alt="hero" />
      </div>

      
    </div>
    <div className="main-products">
      <div className="alls">
      <div className="mainy">
      <div className="imgy">
      <img src="fridge.webp" alt="fridege" />
      </div>
      <p>Fridges</p>
      </div>
     
    
      <div className="mainy">
      <div className="imgy">
      <Link to='/ShopingPage'><img src="Iphones.webp" alt="fridege" /></Link>
      </div>
      <p>Phones</p>
      </div>
     
      <div className="mainy">
      <div className="imgy">
      <img src="tv.webp" alt="fridege" />
     
    
      </div>
      <p>TV's</p>
      </div>
     
      <div className="mainy">
      <div className="imgy">
      <img src="washinMachine2.webp" alt="fridege" />
      </div>
      <p>Whashing Machines</p>
      </div>
      

     
      
      </div>
    </div>
    </section>

  )
}

export default Hero