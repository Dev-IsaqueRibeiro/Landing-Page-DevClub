import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Lucas Oliveira",
    role: "Dev Frontend — Contratado em 5 meses",
    text: "Eu não tinha NENHUMA experiência com programação. A DevClub me deu o caminho completo: do HTML básico até conseguir minha primeira vaga remota ganhando R$4.800.",
    stars: 5,
  },
  {
    name: "Ana Carolina Silva",
    role: "Transição de carreira — Ex-administradora",
    text: "Largei meu emprego de R$2.500 e em 7 meses já estava trabalhando como dev júnior ganhando R$6.000. A mentoria faz toda a diferença!",
    stars: 5,
  },
  {
    name: "Pedro Henrique Santos",
    role: "Fullstack Developer — Trabalha p/ empresa dos EUA",
    text: "Graças à DevClub, hoje trabalho remotamente para uma empresa americana. Meu salário triplicou. O investimento se pagou no primeiro mês.",
    stars: 5,
  },
  {
    name: "Mariana Costa",
    role: "Dev Júnior — Primeira vaga em 4 meses",
    text: "Tinha medo de não conseguir por não ter faculdade na área. A comunidade da DevClub me mostrou que o que importa é o portfólio e a prática.",
    stars: 5,
  },
  {
    name: "Rafael Mendes",
    role: "Backend Developer — Home Office",
    text: "Estudava sozinho há 2 anos sem resultado. Em 6 meses na DevClub, consegui estruturar meu aprendizado e fui contratado. Mudou minha vida.",
    stars: 5,
  },
  {
    name: "Juliana Ferreira",
    role: "Mobile Developer — Startup",
    text: "O suporte dos mentores é incrível. Sempre que eu travava, tinha alguém pra me ajudar. Hoje ganho R$7.200 trabalhando de casa.",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20" id="depoimentos">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Quem passou pela DevClub,{" "}
            <span className="text-gradient-primary">transformou</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Histórias reais de pessoas que mudaram de vida com programação.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              /* Box-shadow mais forte: aumentado para 30px e opacidade 0.3 */
              className="glass-card p-6 flex flex-col justify-between transition-all duration-500 hover:border-primary/60 hover:shadow-[0_0_30px_rgba(43,204,0,0.3)] hover:-translate-y-1"
            >
              <div>
                {/* Aspas em Roxo */}
                <Quote className="w-8 h-8 text-secondary mb-3 opacity-90" />
                <p className="text-foreground/90 leading-relaxed mb-4">
                  {t.text}
                </p>
              </div>
              <div>
                <div className="flex gap-2 mb-2 stars-container">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 star-3d-glow" />
                  ))}
                </div>
                <p className="font-bold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
