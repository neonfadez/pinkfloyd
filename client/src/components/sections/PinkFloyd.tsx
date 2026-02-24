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
    <section id="pink-floyd" className="py-24 relative bg-card/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Shine On You <br/>
              <span className="psychedelic-gradient-text">Crazy Diamond</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Pink Floyd didn't just make music; they created sonic architecture. Their pioneering use of synthesizers, philosophical lyrics, and elaborate live shows redefined progressive and psychedelic rock, leaving an indelible mark on how I approach both code and composition.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <button className="flex items-center gap-3 px-6 py-3 rounded-full glass-panel hover:bg-white/5 transition-all text-foreground hover:text-primary group">
              <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Play size={18} className="ml-1" />
              </span>
              <span className="font-medium tracking-wide">Listen to Playlist</span>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {albums.map((album, index) => (
            <motion.div
              key={album.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative rounded-2xl overflow-hidden bg-background border border-border hover:border-primary/50 transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${album.color} opacity-40 mix-blend-overlay z-10`} />
                <img 
                  src={album.image} 
                  alt={album.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Audio placeholder overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-sm transition-all duration-300">
                  <button className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg shadow-primary/50">
                    <Play size={24} className="ml-1" />
                  </button>
                </div>
              </div>
              
              <div className="p-6 relative z-30 bg-card">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground font-display line-clamp-1">{album.title}</h3>
                  <span className="text-xs font-mono px-2 py-1 rounded bg-secondary/10 text-secondary border border-secondary/20 flex-shrink-0">
                    {album.year}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {album.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
