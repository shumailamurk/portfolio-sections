import React from 'react'

interface propsType{
    tilte:string;
}
const Heading: React.FC<propsType> = ({tilte}) => {
  return (
    <div className='text-center text-4xl pb-8'>
        <p className='border-b-4 inline-block pb-2'>{tilte}</p>
    </div>
  )
}

export default Heading