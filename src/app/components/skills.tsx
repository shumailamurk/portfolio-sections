import React from 'react'

const Skills = () => {
  return ( 
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div className='mx-10' data-aos="zoom-out-right">
          <h2 className='text-4xl font-serif md:text-5xl data-aos="zoom-out-right"'>Technologies I work with</h2>
        <br />
        <p className='text-gray-400 pt-2' data-aos="zoom-out-right">I possess strong expertise in HTML, CSS, and JavaScript, enabling me to build responsive and visually appealing web interfaces. My knowledge extends to TypeScript, ensuring robust and type-safe application development. I am proficient in Next.js, leveraging its features for server-side rendering, API integration, and scalable projects. With a focus on clean and efficient code, I create seamless user experiences. My skills allow me to deliver modern and high-performing web solutions.</p>
        </div>
    <div>
      <div className='grid grid-cols-2 text-[#47d8d6] text-3xl sm:text-4xl data-aos="zoom-out-right"'>
<div className='space-y-2'> 
<h1 data-aos="zoom-out-right">Typescript</h1>
<h1 data-aos="zoom-out-right">React</h1>
<h1 data-aos="zoom-out-right">Nextjs</h1>
</div>

      <div className='space-y-2'>
      <h1 data-aos="zoom-out-right">Tailwind</h1>
      <h1 data-aos="zoom-out-right">CSS</h1>
      <h1 data-aos="zoom-out-right">Node.js</h1>
      </div>
      </div>
    </div>


      </div>
    </div>
  )
}

export default Skills