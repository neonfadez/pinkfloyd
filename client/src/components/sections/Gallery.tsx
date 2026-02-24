import { motion } from "framer-motion";

// Unsplash placeholder images representing psychedelic/concert vibes
const images = [
  { src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80", alt: "Concert Lights", size: "col-span-1 row-span-2" },
  { src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80", alt: "Abstract Art", size: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80", alt: "Music Production", size: "col-span-2 row-span-1" },
  { src: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80", alt: "Guitar setup", size: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1633511090164-b44bfeb39dcd?w=800&q=80", alt: "Psychedelic colors", size: "col-span-1 row-span-2" },
  { src: "https://images.unsplash.com/photo-1470229722913-7c090be5c520?w=800&q=80", alt: "Live Show", size: "col-span-2 row-span-1" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Visual <span className="text-primary">Echoes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of moments, inspirations, and aesthetic explorations.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-xl overflow-hidden ${img.size} border border-white/5 bg-muted`}
            >
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out filter grayscale-[30%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex items-end p-6">
                <span className="text-white font-medium tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
