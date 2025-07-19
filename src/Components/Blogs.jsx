import React from 'react'
import Carousel, { Card } from './AnimatedCarousel'
import perahara from '../assets/sigiriya.jpg'

const CulturalThings = () => {
const data = [
    {
    title: "The Nallur Festival",
    category: "A Sacred Celebration of Devotion and Color",
    src:perahara,
    content: <p>Ella is a beautiful hill country village...</p>,
  },
   {
    title: "The Nallur Festival",
    category: "A Sacred Celebration of Devotion and Color",
    src:perahara,
    content: <p>Ella is a beautiful hill country village...</p>,
  },
   {
    title: "The Nallur Festival",
    category: "A Sacred Celebration of Devotion and Color",
    src:perahara,
    content: <p>Ella is a beautiful hill country village...</p>,
  },
   {
    title: "The Nallur Festival",
    category: "A Sacred Celebration of Devotion and Color",
    src:perahara,
    content: <p>Ella is a beautiful hill country village...</p>,
  },
   {
    title: "The Nallur Festival",
    category: "A Sacred Celebration of Devotion and Color",
    src:perahara,
    content: <p>Ella is a beautiful hill country village...</p>,
  },
];
  return (
    <div id='Blogs'>
      <h1 className="text-xl sm:text-2xl md:text-3xl text-center mt-10 ">
        Tales from the Trail
      </h1>
        <Carousel
  items={data.map((card, idx) => (
    <Card key={idx} index={idx} card={card} layout />
  ))}
/>
    </div>
  )
}

export default CulturalThings;
