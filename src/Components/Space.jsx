import React from 'react'

const NarutoScroll = () => {
  return (
    <div className="relative overflow-hidden whitespace-nowrap bg-white py-4 border-y-4 border-gradient-to-r from-red-500 via-black to-blue-600">
      <div className="flex animate-scroll">
        {/* First loop */}
        <div className="text-2xl md:text-2xl font-extrabold tracking-[2rem] text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-blue-600 drop-shadow-[0_0_6px_rgba(0,0,0,0.3)]">
          💪 STRENGTH ⚡ POWER 🔥 COURAGE 🌟 HOPE 🌙 DESTINY 🤝 BONDS 🛡️ SACRIFICE 🕊️ FREEDOM 🌍 UNITY 🌀 LEGACY
        </div>
        {/* Second loop (duplicate for seamless effect) */}
        <div className="text-2xl md:text-2xl font-extrabold tracking-[2rem] text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-blue-600 drop-shadow-[0_0_6px_rgba(0,0,0,0.3)]">
          💪 STRENGTH ⚡ POWER 🔥 COURAGE 🌟 HOPE 🌙 DESTINY 🤝 BONDS 🛡️ SACRIFICE 🕊️ FREEDOM 🌍 UNITY 🌀 LEGACY
        </div>
      </div>
    </div>
  )
}

export default NarutoScroll
