import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const prismY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative min-h-[120vh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Prism Animation Container */}
      <motion.div 
        style={{ y: prismY, opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <svg 
          viewBox="0 0 1000 1000" 
          className="w-full h-full max-w-[800px] opacity-80"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* White beam */}
          <motion.line 
            x1="-100" y1="500" x2="400" y2="500" 
            stroke="white" strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeIn" }}
          />
          
          {/* Prism Triangle */}
          <polygon 
            points="400,500 600,300 600,700" 
            fill="none" 
            stroke="white" 
            strokeWidth="2"
            className="glow-blue"
          />
          
          {/* Rainbow Spectrum */}
          <g>
            {[
              { color: "#ff0000", yOffset: -30 },
              { color: "#ff8000", yOffset: -10 },
              { color: "#ffff00", yOffset: 10 },
              { color: "#00ff00", yOffset: 30 },
              { color: "#00ffff", yOffset: 50 },
              { color: "#0000ff", yOffset: 70 },
              { color: "#8000ff", yOffset: 90 },
            ].map((beam, i) => (
              <motion.path
                key={i}
                d={`M 600 500 L 1200 ${500 + beam.yOffset}`}
                stroke={beam.color}
                strokeWidth="8"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ delay: 1.5 + (i * 0.1), duration: 1 }}
                className="mix-blend-screen"
              />
            ))}
          </g>
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-[-10vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mb-8"
        >
          <span className="px-6 py-2 border-l-4 border-primary bg-white/5 text-primary text-sm font-bold tracking-[0.3em] uppercase">
            Breathe in the air
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="text-6xl sm:text-8xl lg:text-9xl font-display font-black leading-none mb-8 tracking-tighter"
        >
          MANIT <br />
          <span className="text-prism">DANGAL</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed mb-16 tracking-wide"
        >
          Tech enthusiast. Musician. <br />
          <span className="text-white font-bold tracking-[0.2em] uppercase">The Dark Side of the Moon</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a 
            href="#about"
            className="group relative px-10 py-4 overflow-hidden"
          >
            <div className="absolute inset-0 prism-rainbow opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="absolute inset-0 border border-white/20 group-hover:border-white/50 transition-colors" />
            <span className="relative z-10 font-bold tracking-widest uppercase">The Great Gig</span>
          </a>
          <a 
            href="#contact"
            className="font-bold tracking-widest uppercase hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1"
          >
            Connect
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 hover:text-white transition-colors flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] font-black">Descend</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
