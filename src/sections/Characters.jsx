import React, { useEffect, useRef, useState } from "react"
import gif1 from "../gifs/naruto GIF.gif"
import gif2 from "../gifs/naruto shippuden fighting GIF.gif"
import gif3 from "../gifs/naruto shippuden japan GIF.gif"
import gif4 from "../gifs/naruto shippuuden GIF (1).gif"
import gif5 from "../gifs/naruto shippuuden GIF.gif"
import gif6 from "../gifs/naruto shippuden GIF.gif"
import gif7 from "../gifs/Sad Black And White GIF.gif"
import gif8 from "../gifs/naruto shippuden GIF (3).gif"
import gif9 from "../gifs/naruto e GIF.gif"

const Characters = () => {
  const gifs = [gif1, gif2, gif3, gif4, gif5, gif6, gif7, gif8, gif9]
  const refs = useRef([]) // store refs to each card
  const [visible, setVisible] = useState([])

  useEffect(() => {
    setVisible(Array(gifs.length).fill(false)) // initialize visibility

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index)
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
          } else {
            setVisible((prev) => {
              const newState = [...prev]
              newState[index] = false
              return newState
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    refs.current.forEach((ref) => ref && observer.observe(ref))
    return () => refs.current.forEach((ref) => ref && observer.unobserve(ref))
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 py-24 px-4 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Title */}
      <div className="max-w-6xl mx-auto text-center relative z-10 mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-orange-500 font-cinzel mb-4">
          Naruto Moments
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
          Iconic scenes that capture the spirit of the ninja way
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="gif-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {gifs.map((gif, idx) => (
          <div
            key={idx}
            ref={(el) => (refs.current[idx] = el)}
            data-index={idx}
            className={`gif-card relative overflow-hidden  border border-gray-700 shadow-lg group hover:border-orange-500 transition-all duration-500 origin-top ${
              visible[idx] ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
            }`}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Gif */}
            <img
              src={gif}
              alt={`Naruto Gif ${idx}`}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Characters
