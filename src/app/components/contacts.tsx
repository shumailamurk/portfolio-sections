import React from 'react'
import { MdMarkEmailRead } from "react-icons/md";
import { BsFillTelephoneInboundFill } from "react-icons/bs";


// Get in touch throuh below detail 


const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10 '>
            <div className='space-y-8 mx-10'data-aos="zoom-out-right">
                <h2 className='text-5xl font-sans'>Get in touch</h2>
                <p className='text-gray-400 text-[18px] pt-2'>
                    Drop me a line, give me a call or send me message by submitting the form.
                </p>
                <div className='flex gap-3 items-center'>
                <MdMarkEmailRead  size={30} />  xyz@gmail.com

                </div>
                <div className='flex gap-3 items-center'data-aos="zoom-out-right">
                <BsFillTelephoneInboundFill size={30} />  (021) 000-000

                </div>
            </div>
    

{/* Inputs  */}

    <div className='space-y-8 '>
        <div className='flex flex-col gap-1'data-aos="zoom-out-right">
            <label htmlFor="name">Name</label>
            <input type="text"
            className='h-[40px]  bg-transparent border border-accent'
            id='name' />
        </div>

        <div className='flex flex-col gap-1' data-aos="zoom-out-right">
            <label htmlFor="email">Email</label>
            <input type="text"
            className='h-[30px] bg-transparent border border-accent'
            id='email' />


        </div>


        <div className='flex flex-col gap-1 'data-aos="zoom-out-right">
            <label htmlFor="msg" >Message</label>
            <textarea
            className='has-[40px] bg-transparent border border-accent'
            id='msg' rows={5}>
        </textarea>
        </div>

<button className='bg-accent p-2 px-6 '>Submit</button>

    </div>


        </div>
    </div>
  )
}

export default Contact