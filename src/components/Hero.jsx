import React from 'react'
import { GrDeliver } from "react-icons/gr"


const Hero = () => {
  return (
    <div className='Hero<'>
      <div className="items">
      <span className="van"><GrDeliver /></span>
      <p>Free delivery when you spend £100</p>
      </div>

      <div className="image">
      <img src="hero.webp" alt="hero" />
      </div>

      
    </div>

  )
}

export default Hero