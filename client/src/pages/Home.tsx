import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { PinkFloyd } from "@/components/sections/PinkFloyd";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <PinkFloyd />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
