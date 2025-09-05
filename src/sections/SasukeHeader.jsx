import React from 'react'
import sasukeVid from '../Videos/Clips of  Sasuke  For Editing 4K CC (twixtor).mp4'

const SasukeHeader = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        src={sasukeVid}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Text at bottom-left */}
      <div className="relative z-10 flex items-end h-full bg-black/40">
        <h1 
          className="text-white fon  font-inter text-6xl md:text-8xl uppercase mb-10 ml-10"
         
        >
          Sasuke Uchiha
        </h1>
      </div>
    </div>
  )
}

export default SasukeHeader
