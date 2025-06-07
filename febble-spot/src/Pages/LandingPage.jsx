import React from 'react'
import TestimonialCard from "../Components/TestimonialCard/TestimonialCard"
import Herosection from '../Components/Herosection/Herosection'
import Blog from "../Components/Blog/Blog"
import AnimatedHeading from "../Components/AnimatedHeading/AnimatedHeading"
import Ourteam from "../Components/Ourteam/Ourteam"
import FeatureCards from "../Components/FeatureCards/FeatureCards"
import FontCarousel from "../Components/FontCarousel/FontCarousel"
const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
    <FontCarousel />
   <FeatureCards />
    <Ourteam />
      <AnimatedHeading />
      <Herosection />
      <TestimonialCard />
      <Blog />
    
    </div>
  )
}
export default LandingPage