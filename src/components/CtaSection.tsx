import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Flame } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 relative" id="oferta">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-urgent/10 border border-urgent/20 mb-6">
            <Flame className="w-4 h-4 text-urgent" />
            <span className="text-sm font-semibold text-urgent">
              PREÇO PROMOCIONAL — TERMINA EM BREVE
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Não deixe para depois o futuro que você pode{" "}
            <span className="text-gradient-primary">começar agora</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            O mercado de tecnologia cresce a cada dia. Cada semana que passa é
            uma oportunidade perdida. Garanta seu acesso e transforme seu
            potencial em resultados concretos.
          </p>

          <a
            href="https://go.hotmart.com/T105166099U"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-extrabold text-xl rounded-xl btn-glow transition-all duration-300 hover:scale-105 mb-8"
          >
            Transformar Minha Carreira
            <ArrowRight className="w-6 h-6" />
          </a>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Garantia de 7 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-secondary" />
              <span>Acesso imediato</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
