import React from 'react'
import Hero from '../Components/Hero'
import Second from '../Components/SubComponents/Second'
import About from '../Components/About'
import Portfolio from '../Components/Portfolio'
import Services from '../Components/Services'
import Testimonials from '../Components/Testimonials'
import Team from '../Components/Team'
import Blogs from '../Components/Blogs'
import gsap from 'gsap'

function Homep() {

 

  return (
    <div>
        <Hero />
        <Second />
        <About />
        <Portfolio />
        <Services />
        <Testimonials />
        <Team />
        <Blogs />
    </div>
  )
}

export default Homep