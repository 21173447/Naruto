import React from 'react'
import gif1 from '../gifs/naruto GIF.gif'
import gif2 from '../gifs/naruto shippuden fighting GIF.gif'
import gif3 from '../gifs/naruto shippuden japan GIF.gif'
import gif4 from '../gifs/naruto shippuuden GIF (1).gif'
import gif5 from '../gifs/naruto shippuuden GIF.gif'
import gif6 from '../gifs/naruto shippuden GIF.gif'
import gif7 from '../gifs/Sad Black And White GIF.gif'
import gif8 from '../gifs/naruto shippuden GIF (3).gif'
import gif9 from '../gifs/naruto e GIF.gif'

const Characters = () => {
  return (
    
    <div className="p-4">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
        Moments
      </h1>

      {/* Masonry Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-2">
        <img src={gif1} alt="Naruto Gif" className="mb-2 w-full shadow" />
        <img src={gif2} alt="Naruto Shippuden Fighting Gif" className="mb-2 w-full shadow" />
        <img src={gif3} alt="Naruto Shippuden Japan Gif" className="mb-2 w-full shadow" />
        <img src={gif4} alt="Naruto Shippuuden Gif" className="mb-2 w-full shadow" />
        <img src={gif5} alt="Naruto Shippuuden Gif" className="mb-2 w-full shadow" />
        <img src={gif6} alt="Naruto Shippuuden Gif" className="mb-2 w-full shadow" />
        <img src={gif7} alt="Naruto Shippuuden Gif" className="mb-2 w-full shadow" />
        <img src={gif8} alt="Naruto Shippuuden Gif" className="mb-2 w-full shadow" />
        <img src={gif9} alt="Naruto Gif" className="mb-2 w-full shadow" />
      </div>
    </div>
  )
}

export default Characters
