import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Youtube, Mail, Send, Loader2 } from "lucide-react";
import { useCreateMessage } from "@/hooks/use-messages";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Contact() {
  const { mutate: sendMessage, isPending } = useCreateMessage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(formData, {
      onSuccess: () => {
        setFormData({ name: "", email: "", message: "" });
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-black text-foreground mb-6">
              Keep Talking.
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-md font-light">
              Whether you want to discuss code, collaborate on music, or just debate which Pink Floyd album is truly the best, I'm all ears.
            </p>

            <div className="space-y-6">
              <a href="#" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <span className="font-medium text-lg">hello@manitdangal.dev</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Instagram size={20} />
                </div>
                <span className="font-medium text-lg">@manit.dangal</span>
              </a>
              <a href="#" className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Youtube size={20} />
                </div>
                <span className="font-medium text-lg">Manit Sounds</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden"
          >
            {/* Glowing orb behind form */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full mix-blend-screen pointer-events-none" />
            
            <h3 className="text-2xl font-bold mb-8 text-foreground">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Name</label>
                <Input 
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Syd Barrett" 
                  className="bg-background/50 border-border focus:border-primary focus:ring-primary/20 transition-all py-6 rounded-xl"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Email</label>
                <Input 
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="syd@moon.com" 
                  className="bg-background/50 border-border focus:border-primary focus:ring-primary/20 transition-all py-6 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80">Message</label>
                <Textarea 
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How I wish, how I wish you were here..." 
                  className="bg-background/50 border-border focus:border-primary focus:ring-primary/20 transition-all min-h-[150px] rounded-xl resize-none"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isPending}
                className="w-full py-6 rounded-xl font-bold text-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity border-0 shadow-[0_0_20px_rgba(255,0,127,0.2)]"
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" /> Launch Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
