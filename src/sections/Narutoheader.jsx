import React from 'react'
import vid1 from "../Videos/THIS IS 4K ANIME (Naruto).mp4"

const Narutoheader = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        src={vid1}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Text at bottom-right */}
      <div className="absolute bottom-10 right-10 px-4 py-2 rounded">
        <h1 
          className="text-white font-inter text-6xl md:text-8xl uppercase" 
          
        >
          Naruto Uzumaki
        </h1>
      </div>
    </div>
  )
}

export default Narutoheader
