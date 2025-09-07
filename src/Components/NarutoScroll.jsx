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
    <div className="min-h-screen bg-ninja-night relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-32 h-32 rounded-full opacity-60 ${i % 2 === 0 ? "ember-glow" : "flame-glow"} animate-float`}
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

   
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-ninja-ember/5 to-ninja-purple/5 pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto px-8">

        <div className="text-center mb-8 animate-ink-drip">
          <h1 className="font-ninja text-4xl md:text-5xl text-ninja-gold text-shadow mb-2">
            古忍術書
          </h1>
          <p className="font-japanese text-lg text-ninja-parchment/80">Ancient Ninja Techniques</p>
        </div>

     
        <div className="relative overflow-hidden h-[70vh]">
          <div className="animate-scroll-credits">
            {jutsus.concat(jutsus).map((jutsu, index) => (
              <div
                key={index}
                className="text-center space-y-2 mb-6"
              >
                <h2 className="text-ninja-ember font-bold text-2xl md:text-3xl">{jutsu.name}</h2>
                <p className="text-lg font-japanese">{jutsu.romaji}</p>
                <p className="text-sm text-ninja-smoke mt-1">{jutsu.description}</p>
              </div>
            ))}
          </div>
        </div>


        <div className="mt-8 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-ninja-ember to-ninja-red flex items-center justify-center shadow-lg animate-glow">
            <span className="font-ninja text-ninja-parchment text-xl font-bold">忍</span>
          </div>
          <p className="font-japanese text-ninja-smoke text-xs mt-2">Hidden Leaf Village</p>
        </div>
      </div>
    </div>
  );
};

export default NarutoScroll;
