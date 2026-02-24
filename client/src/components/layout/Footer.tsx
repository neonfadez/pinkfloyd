import { Rainbow as Triangle } from "lucide-react"; // Using a triangle icon as a nod to the prism

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12 relative overflow-hidden">
      {/* Abstract subtle rainbow line at top of footer */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-foreground font-display font-bold text-xl">
          <Triangle className="text-primary" />
          <span>MANIT.</span>
        </div>
        
        <p className="text-muted-foreground text-sm font-medium">
          © 2026 Manit Dangal – Pink Floyd Fan Site.
        </p>
        
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
