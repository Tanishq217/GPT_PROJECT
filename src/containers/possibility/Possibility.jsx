import React from 'react'
import './possibility.css'
import PossibilityImage from '../../assets/possibility.png'
const Possibility = () => {
  return (
  <div className="section__container">
  <div className="section__image">
    <img src= {PossibilityImage} alt="illustration" />
  </div>
  <div className="section__text">
    <h1 className="gradient__text1">The possibilities are beyond your imagination</h1>
  </div>
</div>

  )
}

export default Possibility