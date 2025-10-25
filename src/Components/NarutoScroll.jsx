import React from "react";

const jutsus = [
  { name: "螺旋丸", romaji: "Rasengan", description: "Spiraling Sphere" },
  { name: "千鳥", romaji: "Chidori", description: "One Thousand Birds" },
  { name: "影分身の術", romaji: "Kage Bunshin no Jutsu", description: "Shadow Clone Technique" },
  { name: "火遁・豪火球の術", romaji: "Katon: Gōkakyū no Jutsu", description: "Fire Style: Fireball Jutsu" },
  { name: "封印術", romaji: "Fūinjutsu", description: "Sealing Technique" },
  { name: "水遁・水龍弾の術", romaji: "Suiton: Suiryūdan no Jutsu", description: "Water Style: Water Dragon Bullet Technique" },
  { name: "風遁・螺旋手裏剣", romaji: "Fūton: Rasenshuriken", description: "Wind Style: Spiraling Shuriken" },
  { name: "幻術・砂牢", romaji: "Genjutsu: Suna Rō", description: "Illusion: Sand Prison" }
];

const NarutoScroll = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-40 animate-float"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto px-8 py-16 z-0">
        <div className="text-center mb-12 animate-ink-drip">
          <div className="inline-block bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full shadow-lg mb-4">
            <h1 className="text-3xl md:text-4xl font-bold">古忍術書</h1>
          </div>
          <p className="text-amber-700 text-lg font-medium">Ancient Ninja Techniques</p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative bg-gradient-to-b from-amber-100 to-yellow-100 rounded-2xl shadow-2xl border-4 border-amber-300 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400"></div>
          
          <div className="absolute top-8 left-8 w-8 h-8 bg-amber-600 rounded-full shadow-inner z-20"></div>
          <div className="absolute top-8 right-8 w-8 h-8 bg-amber-600 rounded-full shadow-inner z-20"></div>
          <div className="absolute bottom-8 left-8 w-8 h-8 bg-amber-600 rounded-full shadow-inner z-20"></div>
          <div className="absolute bottom-8 right-8 w-8 h-8 bg-amber-600 rounded-full shadow-inner z-20"></div>

          <div className="relative overflow-hidden h-[60vh] z-0">
            <div 
              className="animate-scroll-credits" 
              style={{ 
                animationPlayState: 'running',
                animationDelay: '0s',
                animationDuration: '40s'
              }}
            >
              {jutsus.concat(jutsus).map((jutsu, index) => (
                <div
                  key={index}
                  className="text-center space-y-3 mb-8 p-6 bg-white/50 rounded-lg shadow-lg border border-amber-200 mx-8"
                >
                  <h2 className="text-orange-600 font-bold text-2xl md:text-3xl drop-shadow-sm">{jutsu.name}</h2>
                  <p className="text-amber-700 text-lg font-medium">{jutsu.romaji}</p>
                  <p className="text-gray-600 text-sm italic">{jutsu.description}</p>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-orange-400 to-amber-400 mx-auto rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-xl animate-glow border-4 border-amber-300">
            <span className="text-white text-2xl font-bold">忍</span>
          </div>
          <p className="text-amber-700 text-sm mt-3 font-medium">Hidden Leaf Village</p>
          <div className="flex space-x-2 mt-4">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NarutoScroll;
