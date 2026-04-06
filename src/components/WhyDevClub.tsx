import { motion } from "framer-motion";
import { BookOpen, Users, Compass, Target } from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Aprendizado Prático",
    description:
      "Conteúdos atualizados que o mercado realmente exige. Projetos reais desde o primeiro dia.",
  },
  {
    icon: Users,
    title: "Comunidade Vibrante",
    description:
      "Milhares de alunos que apoiam seu crescimento e trocam experiências reais diariamente.",
  },
  {
    icon: Compass,
    title: "Mentoria Especializada",
    description:
      "Mentores experientes guiam você na jornada, evitando erros comuns e acelerando resultados.",
  },
  {
    icon: Target,
    title: "Foco em Empregabilidade",
    description:
      "Treinamentos em habilidades técnicas e comportamentais valorizadas pelas maiores empresas.",
  },
];

const WhyDevClub = () => {
  return (
    <section className="py-20" id="por-que">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Por que a DevClub é{" "}
            <span className="text-gradient-primary">diferente?</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Se você quer começar do absoluto básico ou dar o salto na carreira,
            aqui é o lugar certo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{b.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {b.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyDevClub;
