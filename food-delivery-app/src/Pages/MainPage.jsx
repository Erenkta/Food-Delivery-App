import React from 'react'
import "./MainPage.css"
import HeroSection from "../Components/HeroSection/HeroSection"
import FoodSection from '../Components/FoodSection/FoodSection'

export default function MainPage() {
  return (
    <div className='main-container'>
      <div>
        <HeroSection/>
      </div>
        <FoodSection/>
    </div>
  )
}
