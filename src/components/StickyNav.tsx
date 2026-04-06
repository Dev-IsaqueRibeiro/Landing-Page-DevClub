import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const StickyNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <span className="text-xl font-extrabold flex items-center">
          <span className="text-[#5fd100]">&lt; Dev</span>
          <span className="text-[#722eaf]">Club &gt;</span>
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a
            href="#por-que"
            className="hover:text-foreground transition-colors"
          >
            Por que DevClub
          </a>
          <a
            href="#mercado"
            className="hover:text-foreground transition-colors"
          >
            Mercado
          </a>
          <a
            href="#depoimentos"
            className="hover:text-foreground transition-colors"
          >
            Depoimentos
          </a>
          <a href="#faq" className="hover:text-foreground transition-colors">
            FAQ
          </a>
        </div>
        <a
          href="https://go.hotmart.com/T105166099U"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-bold text-sm rounded-lg btn-glow transition-all duration-300 hover:scale-105"
        >
          Começar Agora
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </nav>
  );
};

export default StickyNav;
