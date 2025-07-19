import React from 'react'
import  DestinationCard  from './DestinationCard';

const Destinations = () => {
  return (
    <div className="py-8 px-4" id='Destinations'>
      <h1 className="text-xl sm:text-2xl md:text-3xl text-center mb-8 ">
        Trending Destinations and Adventures
      </h1>
      <DestinationCard/>
    </div>
  )
}

export default Destinations;

