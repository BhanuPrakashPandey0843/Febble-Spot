import React from 'react'

import Herosection from '../Components/Herosection/Herosection'
import Blog from "../Components/Blog/Blog"
import AnimatedHeading from "../Components/AnimatedHeading/AnimatedHeading"
const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedHeading />
      <Herosection />
      <Blog />
    
    </div>
  )
}
export default LandingPage