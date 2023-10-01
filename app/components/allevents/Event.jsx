import React from 'react'
import Image from "next/image";

const Event = ( {event} ) => {
  return (
    <div className='grid grid-cols-5 gap-4 ml-[10%] mr-[10%] mt-10 mb-10'>
    <div className="w-60 bg-base-100 shadow-xl basis-1/4 ">
        <figure>
        <Image className='hover:scale-110 transition duration-500 cursor-pointer' src={event.images[2].url} alt="Event" width={300} height={300}/>
        </figure>
        <div className="card-actions justify-center"><h3 className="card-title mt-3">{event.name}</h3></div>
    </div>
  </div>
    )
}

export default Event

