import React from 'react'
import Heading from './Heading'
import Cards from './cards'

const data =[
    {
        id:0,
        title:"Resume Builder",
        desc :'To Build Resume',
        img :"/project/resumebuilder.jpg",
        tags:["HTML","CSS","TYPESCRIPT","JAVASCRIPT"]


    }, 
 
    {
        id:1,
        title:"Responsive Webpage",
        desc :'A responsive Webpage of perfume',
        img :"/project/responsive.jpg.jpg",
        tags:["HTML", "CSS", "Nextjs"]
    
    
    },
    {
        id:2,
        title:"NASA's Clone",
        desc :'A Clone of Nasa, excited to share this with everyone to shre my skills.',
        img :"/project/nasa.jpg",
        tags:["HTML", "CSS","Javascript"]


    }, 
    
    {
    
        id:3,
        title:"Pakistan Day",
        desc :'Special page on Independence Day',
        img :"/project/indpendence.jpg",
        tags:["HTML","CSS","JAVASCRIPT"]


    }, 
  
         {
        id:4,
        title:"Digital Marketing",
        desc :'The website of Digital Marketing',
        img :"/project/digital.jpg",
        tags:["HTML","CSS"]


    },
]




const Projects = () => {
  return (
    <div id='projects' className=' container pt-32'>
        <Heading tilte='My Projects'/>
        <div className='grid gap-10 xl:gap-0 xl:gap-y-0 md:grid-cols-3 place-items-center' data-aos="zoom-out-right">
            {data.map((el) => (<Cards
            
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}

            />))}
        </div>
        </div>
  )
}

export default Projects