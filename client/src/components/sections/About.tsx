import { motion } from "framer-motion";
import { Code2, Music, Cpu, Terminal } from "lucide-react";

const skills = [
  { name: "HTML/CSS", icon: <Code2 size={20} /> },
  { name: "JavaScript", icon: <Terminal size={20} /> },
  { name: "C++", icon: <Cpu size={20} /> },
  { name: "Python", icon: <Terminal size={20} /> },
  { name: "Guitar", icon: <Music size={20} /> },
  { name: "Music Composition", icon: <Music size={20} /> },
];

export function About() {
  return (
    <section id="about" className="py-32 relative bg-black overflow-hidden">
      {/* Rainbow divider */}
      <div className="absolute top-0 left-0 w-full h-1 prism-rainbow opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tighter">
            THE <span className="text-prism">MORTAL</span> COIL
          </h2>
          <p className="text-sm uppercase tracking-[0.5em] text-white/40 font-bold">Profile of a Creator</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-4 prism-rainbow opacity-10 blur-3xl rounded-full animate-pulse" />
            <div className="relative aspect-square w-full max-w-md mx-auto border border-white/10 p-4 bg-white/5">
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80"
                alt="Manit Dangal"
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 space-y-12"
          >
            <div className="space-y-8">
              <p className="text-3xl md:text-4xl font-light text-white leading-tight tracking-tight">
                I’m an 18-year-old <span className="text-prism font-bold">developer</span> and <span className="text-prism font-bold">musician</span> inspired by the infinite.
              </p>
              <p className="text-xl text-white/60 font-light leading-relaxed">
                Just as Pink Floyd built sonic cathedrals, I strive to build digital experiences that resonate. My toolkit is a blend of logic and frequency.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 border border-white/5 bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <span className="text-white/40 group-hover:text-white transition-colors">
                    {skill.icon}
                  </span>
                  <span className="text-sm font-bold tracking-widest uppercase text-white/60 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
