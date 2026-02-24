import { motion } from "framer-motion";
import { Play, Disc } from "lucide-react";

const albums = [
  {
    title: "The Dark Side of the Moon",
    year: "1973",
    desc: "A conceptual masterpiece exploring themes of conflict, greed, time, and mental illness.",
    // placeholder iconic prism-like abstract image
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800&q=80",
    color: "from-purple-600 to-blue-600"
  },
  {
    title: "Wish You Were Here",
    year: "1975",
    desc: "A tribute to founding member Syd Barrett, critiquing the music business.",
    // placeholder surreal/fire-like abstract image
    image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=800&q=80",
    color: "from-orange-500 to-red-600"
  },
  {
    title: "The Wall",
    year: "1979",
    desc: "A rock opera exploring abandonment and personal isolation through a metaphorical wall.",
    // placeholder brick/architectural abstract image
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80",
    color: "from-slate-700 to-slate-900"
  }
];

export function PinkFloyd() {
  return (
    <section id="pink-floyd" className="py-32 relative bg-black">
      {/* Rainbow divider */}
      <div className="absolute top-0 left-0 w-full h-1 prism-rainbow opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <h2 className="text-5xl md:text-8xl font-display font-black text-white mb-8 tracking-tighter leading-none">
              SHINE ON <br/>
              <span className="text-prism">YOU CRAZY</span> <br/>
              DIAMOND
            </h2>
            <p className="text-xl text-white/50 font-light leading-relaxed tracking-wide">
              Pink Floyd didn't just make music; they created sonic architecture. Their pioneering use of synthesizers, philosophical lyrics, and elaborate live shows redefined progressive and psychedelic rock.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <button className="flex items-center gap-4 px-8 py-4 border border-white/20 hover:border-white transition-all text-white group bg-white/5">
              <Play size={20} className="fill-white group-hover:scale-125 transition-transform" />
              <span className="font-bold tracking-[0.3em] uppercase text-sm">Initiate Playback</span>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/10">
          {albums.map((album, index) => (
            <motion.div
              key={album.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden bg-black aspect-square"
            >
              <img 
                src={album.image} 
                alt={album.title}
                className="w-full h-full object-cover opacity-40 group-hover:opacity-80 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0"
              />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/20 to-transparent">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40 mb-2 block">
                    {album.year}
                  </span>
                  <h3 className="text-2xl font-black text-white font-display mb-4 uppercase tracking-tighter">
                    {album.title}
                  </h3>
                  <p className="text-sm text-white/0 group-hover:text-white/60 transition-all duration-500 line-clamp-2 font-light">
                    {album.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
