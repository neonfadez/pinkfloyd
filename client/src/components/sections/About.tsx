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
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Is There <span className="text-secondary">Anybody</span> Out There?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Avatar / Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative aspect-[4/5] w-full max-w-md rounded-2xl overflow-hidden glass-panel p-2">
                {/* cool abstract tech/music avatar placeholder */}
                <img
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80"
                  alt="Manit Dangal - Abstract Representation"
                  className="w-full h-full object-cover rounded-xl filter contrast-[1.1] saturate-[1.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-xl" />
              </div>
            </div>
          </motion.div>

          {/* Text / Skills Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-6 text-lg text-muted-foreground font-light">
              <p className="text-2xl font-medium text-foreground leading-snug">
                I’m an 18-year-old developer, musician, and digital creator passionate about shaping the web and sound.
              </p>
              <p>
                My journey in technology started with a simple curiosity about how things work behind the screen. Since then, I've dived deep into programming languages, building tools, and crafting experiences.
              </p>
              <p>
                But logic without art is incomplete. Inspired by the profound sonic landscapes of Pink Floyd, I also compose music and play guitar, finding parallels between writing an elegant algorithm and structuring a beautiful melody.
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-display font-bold text-foreground mb-6">My Toolkit</h3>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border hover:border-primary hover:shadow-[0_0_15px_rgba(255,0,127,0.15)] transition-all duration-300 group cursor-default"
                  >
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">
                      {skill.icon}
                    </span>
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
