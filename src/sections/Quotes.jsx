import React from "react";
import { Quote } from "lucide-react";

// Local Card component
const Card = ({ children, className, style }) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

// Local CardContent component (not used in your current code, but included for completeness)
const CardContent = ({ children }) => {
  return <div>{children}</div>;
};

const quotes = [
  {
    text: "I'm not gonna run away, I never go back on my word! That's my nindō: my ninja way!",
    character: "Naruto Uzumaki",
  },
  {
    text: "If you don't like your destiny, don't accept it. Instead, have the courage to change it the way you want it to be.",
    character: "Naruto Uzumaki",
  },
  {
    text: "Hard work is absolutely necessary to achieve any goal. However, I also believe that if you continuously work toward your goal, you can skip the steps.",
    character: "Rock Lee",
  },
  {
    text: "The concept of hope is nothing more than giving up. A word that holds no true meaning.",
    character: "Madara Uchiha",
  },
  {
    text: "In the ninja world, those who break the rules are scum, that's true, but those who abandon their friends are worse than scum.",
    character: "Kakashi Hatake",
  },
  {
    text: "People's lives don't end when they die. It ends when they lose faith.",
    character: "Itachi Uchiha",
  },
  {
    text: "A smile is the best way to get oneself out of a tight spot, even if it is a fake one. Surprisingly enough, everyone takes it at face value.",
    character: "Sai",
  },
  {
    text: "It's not the face that makes someone a monster, it's the choices they make with their lives.",
    character: "Naruto Uzumaki",
  },
  {
    text: "When people are protecting something truly special to them, they truly can become as strong as they can be.",
    character: "Haku",
  },
  {
    text: "The pain of being alone is completely out of this world, isn't it? I don't know why, but I understand your feelings so much, it actually hurts.",
    character: "Naruto Uzumaki",
  },
];

const Quotes = () => {
  return (
    <div className="min-h-screen bg-gray-900 font-inter py-24 px-4 relative">
    
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-orange-500/10  blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-purple-500/10  blur-3xl"></div>
      </div>


      <div className="max-w-6xl mx-auto text-center relative z-10 mb-16">
        <p className="text-orange-500 text-2xl mb-2">“”</p>
        <h2 className="text-5xl md:text-6xl font-bold text-orange-500 font-cinzel mb-4">
            Legendary Naruto Quotes
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
          Timeless quotes that shaped the ninja way and continue to inspire generations of warriors
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {quotes.map((quote, index) => (
          <Card
            key={index}
            className="bg-gray-800 border border-gray-700 rounded-xl p-8 relative overflow-hidden group hover:border-orange-500 transition-all duration-300 animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
    
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

  
            <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
              <Quote className="w-6 h-6 text-orange-500" />
            </div>

            <blockquote className="text-gray-200 italic mb-6 leading-relaxed font-light">
              "{quote.text}"
            </blockquote>
            <footer className="relative">
              <div className="w-full h-px bg-gradient-to-r from-orange-500 to-purple-500 mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <cite className="text-orange-500 font-semibold text-lg md:text-xl font-cinzel not-italic">
                — {quote.character}
              </cite>
            </footer>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Quotes;
