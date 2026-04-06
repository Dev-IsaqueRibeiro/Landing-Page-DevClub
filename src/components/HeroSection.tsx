import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import comunidadeDevClub from "@/assets/comunidade-devclub.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                +750 mil vagas abertas em tech
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Sua Porta de Entrada e{" "}
              <span className="text-gradient-primary">Ascensão</span> no Mundo
              da <span className="text-gradient-primary">Programação</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Do zero ao profissional de tecnologia — com método comprovado para
              aprender, praticar e conquistar oportunidades reais com altos
              salários.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://go.hotmart.com/T105166099U"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-lg btn-glow transition-all duration-300 hover:scale-105"
              >
                Quero Começar Agora
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#por-que"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass-card text-foreground font-semibold text-lg hover:border-primary/50 transition-all duration-300"
              >
                Saiba Mais
              </a>
            </div>

            {/* Salary proof card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-10 glass-card glow-primary p-5 max-w-sm"
            >
              <p className="text-sm text-muted-foreground mb-1">
                Salário médio após transição
              </p>
              <p className="text-3xl font-extrabold text-primary">R$ 5.500+</p>
              <p className="text-sm text-muted-foreground mt-1">
                para desenvolvedores juniores
              </p>
            </motion.div>
          </motion.div>

          {/* Right side - Platform Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card glow-blue p-2 rounded-2xl">
              <img
                src={comunidadeDevClub}
                alt="Plataforma DevClub - ambiente de aprendizado com editor de código, progresso e crescimento salarial"
                className="rounded-xl w-full"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
