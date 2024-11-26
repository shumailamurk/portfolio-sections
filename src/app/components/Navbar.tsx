import React from 'react'
import { TfiMenu } from "react-icons/tfi";


const Navbar = () => {
  return (
    <div id='container pt-8'>
    <div className='flex justify-between items-center'>
      <div className='text-xl font-medium mx-10'>Shumaila Murk</div>
   

<ul className='gap-12 mr-12 mt-10 lga:gap-16 hidden md:flex '>
                 <li className='manuLink'><a href="#home">HOME</a></li>
                 <li className='manuLink'><a href="#about">ABOUT</a></li>
                 <li className='manuLink'><a href="#projects">PROJECTS</a></li>
                 <li className='manuLink'><a href="#skills">SKILLS</a></li>
                 <li className='manuLink'><a href="#contacts">CONTACT</a></li>
</ul>


<TfiMenu className='md:hidden' size={30}/>
    </div>
    </div>
  )
}

export default Navbar