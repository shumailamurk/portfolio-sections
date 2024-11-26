"use client"
import React from 'react'
import Hero from './components/hero'
import About from './components/About'

import Projects from './components/projects'
import Skills from './components/skills'
import Contact from './components/contacts'
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

const Page = () => {
  useEffect(()=>{
    AOS.init({
      easing:"ease-out-back",
      duration:1200,
      delay:100,
      mirror:true,
      anchorPlacement:"bottom-bottom",
      offset:160,
    })
    AOS.refresh();
  },[]
  )
  return (
    <div>
  
    {/* */}

    <Hero/>
   
 <Projects />
<Skills/>
<Contact/>
<About/>

    </div>
  )
}

export default Page
