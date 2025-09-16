import React from 'react';
import sasukeVid from '../Videos/Clips of  Sasuke  For Editing 4K CC (twixtor).mp4';

const SasukeHeader = ({ videoSrc }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden ">
      <video
        src={videoSrc || sasukeVid}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />


      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-700 rounded-full opacity-60 animate-bounce-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>


      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30" />


      <div className="absolute top-10 left-10 hidden md:block">
        <div className="w-20 h-20 border-2 border-purple-800 rounded-full animate-pulse-glow opacity-50" />
      </div>
      <div className="absolute bottom-20 right-20 hidden lg:block">
        <div className="w-16 h-16 border-2 border-blue-900 rounded-full animate-float opacity-40" />
      </div>


      <div className="absolute inset-0 flex flex-col justify-end items-center md:items-end md:justify-center px-6 md:px-20 pb-20 md:pb-0">
  
        <div className="mb-8 animate-slide-up-fade">
          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto md:mx-0 md:ml-auto relative">
            <div className="absolute inset-0 bg-red-700 rounded-full animate-pulse-glow opacity-80" />
            <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
              <div className="text-red-600 text-2xl md:text-3xl font-bold">う</div>
            </div>
          </div>
        </div>


        <div className="text-center md:text-right animate-slide-up-fade">
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tight mb-4">
            <span className="block text-purple-950">Sasuke</span>
            <span className="block text-white hero-text-shadow -mt-4">Uchiha</span>
          </h1>
        </div>


        <div className="animate-slide-up-fade-delay text-center md:text-right">
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium mb-6 hero-text-shadow">
            The Path of the Avenger
          </p>
          <div className="flex flex-col md:flex-row items-center md:justify-end gap-4 text-red-600">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-red-600 hidden md:block" />
            <p className="text-lg font-medium uppercase tracking-widest">Sharingan</p>
          </div>
        </div>


        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 md:hidden">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>


      <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-purple-700 to-transparent opacity-60 hidden lg:block" />
    </div>
  );
};

export default SasukeHeader;
