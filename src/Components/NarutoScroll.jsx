import React from "react";

const NarutoScroll = () => {
  return (
    <div className="w-full bg-gray-900 py-12 relative overflow-hidden"> 
      {/* Outer container with dark ninja background */}
      
      {/* Decorative blurred circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto">
        {/* Top border and corner dots */}
        <div className="absolute -top-4 left-8 right-8 pointer-events-none">
          <div className="h-2 rounded-full bg-neutral-800 shadow-lg" />
        </div>
        <div className="absolute -top-5 left-0 h-5 w-5 rounded-full border-2 border-neutral-800 bg-red-700 shadow-lg pointer-events-none" />
        <div className="absolute -top-5 right-0 h-5 w-5 rounded-full border-2 border-neutral-800 bg-red-700 shadow-lg pointer-events-none" />

        {/* Scroll content */}
        <div className="relative w-full rounded-[20px] border-8 border-amber-800/70 bg-amber-100 py-6 px-8 shadow-[inset_0_0_15px_rgba(0,0,0,0.25)]">
          <div
            className="text-center text-lg md:text-2xl font-bold uppercase tracking-wider text-neutral-900 space-y-3"
            style={{ fontFamily: "NarutoFont" }}
          >
            <p>Rasengan – 螺旋丸</p>
            <p>Chidori – 千鳥</p>
            <p>Shadow Clone Jutsu – 影分身の術</p>
            <p>Fireball Jutsu – 火遁・豪火球の術</p>
          </div>
        </div>

        {/* Bottom border and corner dots */}
        <div className="absolute -bottom-4 left-8 right-8 pointer-events-none">
          <div className="h-2 rounded-full bg-neutral-800 shadow-lg" />
        </div>
        <div className="absolute -bottom-5 left-0 h-5 w-5 rounded-full border-2 border-neutral-800 bg-red-700 shadow-lg pointer-events-none" />
        <div className="absolute -bottom-5 right-0 h-5 w-5 rounded-full border-2 border-neutral-800 bg-red-700 shadow-lg pointer-events-none" />
      </div>
    </div>
  );
};

export default NarutoScroll;
