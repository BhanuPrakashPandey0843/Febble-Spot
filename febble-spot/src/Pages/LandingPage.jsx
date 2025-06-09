import React from 'react'
import Hero from "../Components/Hero/Hero" 
import TestimonialCard from "../Components/TestimonialCard/TestimonialCard"
import Herosection from '../Components/Herosection/Herosection'
import Blog from "../Components/Blog/Blog"
import AnimatedHeading from "../Components/AnimatedHeading/AnimatedHeading"
import Ourteam from "../Components/Ourteam/Ourteam"
import FeatureCards from "../Components/FeatureCards/FeatureCards"
import FontCarousel from "../Components/FontCarousel/FontCarousel"
import About from "../Components/About/About" 
import Why from "../Components/Why/Why"
import ProjectShowcase from "../Components/ProjectShowcase/ProjectShowcase"
import AnimatedSplitSection from "../Components/AnimatedSplitSection/AnimatedSplitSection"

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
       <Hero />
      <About />
      <FontCarousel />
      <FeatureCards />
      <AnimatedSplitSection />
      <Why />

      {/* ⬇️ Space added here before ProjectShowcase */}
      <div className="my-16">
        <ProjectShowcase />
      </div>

      <Ourteam />
      <AnimatedHeading />
      <Herosection />
      <TestimonialCard />
      <Blog />

    </div>
  )
}

export default LandingPage
