import React from "react";
import { FaDiscord, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      
          <div>
            <h2 className="text-2xl font-bold text-orange-500">Leaf Archives</h2>
            <p className="mt-2 text-sm">Believe it! Anime for every shinobi.</p>
          </div>


          <div>
            <h3 className="text-lg font-semibold text-orange-400">Explore</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-orange-500">Characters</a></li>
              <li><a href="#" className="hover:text-orange-500">Episodes</a></li>
              <li><a href="#" className="hover:text-orange-500">Arcs</a></li>
              <li><a href="#" className="hover:text-orange-500">Merchandise</a></li>
              <li><a href="#" className="hover:text-orange-500">Ramen Finder 🍜</a></li>
            </ul>
          </div>

         <div>
            <h3 className="text-lg font-semibold text-orange-400">Villages</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-orange-500">Konoha</a></li>
              <li><a href="#" className="hover:text-orange-500">Suna</a></li>
              <li><a href="#" className="hover:text-orange-500">Kiri</a></li>
              <li><a href="#" className="hover:text-orange-500">Kumo</a></li>
              <li><a href="#" className="hover:text-orange-500">Iwa</a></li>
            </ul>
          </div>

  
          <div>
            <h3 className="text-lg font-semibold text-orange-400">Stay off the bingo book 👀</h3>
            <p className="mt-2 text-sm">Get arc recaps & hidden leaf updates once a week.</p>
            <form className="mt-4 flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your scroll address…"
                className="w-full rounded-lg bg-slate-800 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600 transition"
              >
                Summon Updates
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800/60 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
   
          <div className="flex gap-4 text-xl">
            <a href="#" aria-label="Discord" className="hover:text-orange-500"><FaDiscord /></a>
            <a href="#" aria-label="Twitter" className="hover:text-orange-500"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="hover:text-orange-500"><FaInstagram /></a>
            <a href="#" aria-label="YouTube" className="hover:text-orange-500"><FaYoutube /></a>
          </div>


          <p className="text-sm text-slate-400">
            © 2025 Leaf Archives. Fan-made, non-commercial. Naruto™ belongs to its creators.
          </p>
        </div>
      </div>
    </footer>
  );
}
