import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Psychedelic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-primary/20 blur-[120px] mix-blend-screen animate-float" />
        <div className="absolute top-[40%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-secondary/20 blur-[100px] mix-blend-screen animate-float-delayed" />
        <div className="absolute bottom-[10%] left-[30%] w-[50vw] h-[50vw] rounded-full bg-accent/10 blur-[150px] mix-blend-screen animate-float" style={{ animationDelay: '1s' }} />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGgyMHYyMEgwVjB6bTE5IDE5SDFWMWgxOHYxOHoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==')] opacity-20" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide backdrop-blur-sm">
            Welcome to the dark side
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-display font-black leading-tight mb-6"
        >
          Hi, I'm <br className="sm:hidden" />
          <span className="psychedelic-gradient-text text-glow">Manit Dangal</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed mb-12"
        >
          A tech enthusiast, musician, and devoted <span className="text-foreground font-medium">Pink Floyd</span> fan exploring the intersection of code and art.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a 
            href="#about"
            className="px-8 py-4 rounded-xl font-bold text-primary-foreground bg-gradient-to-r from-primary to-secondary shadow-[0_0_20px_rgba(255,0,127,0.3)] hover:shadow-[0_0_30px_rgba(255,0,127,0.5)] hover:-translate-y-1 transition-all duration-300"
          >
            Discover More
          </a>
          <a 
            href="#contact"
            className="px-8 py-4 rounded-xl font-bold text-foreground border-2 border-border hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-2 animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-xs uppercase tracking-widest font-bold">Scroll</span>
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
