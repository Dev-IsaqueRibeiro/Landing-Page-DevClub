import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Briefcase,
  Globe,
  TrendingUp,
  Home,
  DollarSign,
  Clock,
} from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: 750000,
    suffix: "+",
    label: "Vagas abertas em TI no Brasil",
    color: "text-primary",
  },
  {
    icon: DollarSign,
    value: 5500,
    prefix: "R$",
    suffix: "+",
    label: "Salário médio dev junior",
    color: "text-primary",
  },
  {
    icon: TrendingUp,
    value: 30,
    suffix: "%",
    label: "Crescimento anual do setor",
    color: "text-secondary",
  },
  {
    icon: Home,
    value: 85,
    suffix: "%",
    label: "Das vagas aceitam home office",
    color: "text-secondary",
  },
  {
    icon: Globe,
    value: 3,
    suffix: "x",
    label: "Salário maior trabalhando p/ exterior",
    color: "text-urgent",
  },
  {
    icon: Clock,
    value: 6,
    suffix: " meses",
    label: "Tempo médio até primeira vaga",
    color: "text-primary",
  },
];

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

const StatCard = ({
  stat,
  index,
}: {
  stat: (typeof stats)[0];
  index: number;
}) => {
  const { count, ref } = useCountUp(stat.value);
  const Icon = stat.icon;
  const formatted =
    stat.value >= 1000
      ? (count / 1000).toFixed(count >= stat.value ? 0 : 0) + " mil"
      : count.toString();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="glass-card p-6 flex flex-col items-start gap-3 hover:border-primary/30 transition-all duration-300"
    >
      <Icon className={`w-8 h-8 ${stat.color}`} />
      <p className={`text-3xl md:text-4xl font-extrabold ${stat.color}`}>
        {stat.prefix}
        {formatted}
        {stat.suffix}
      </p>
      <p className="text-muted-foreground text-sm">{stat.label}</p>
    </motion.div>
  );
};

const MarketStats = () => {
  return (
    <section className="py-20 relative" id="mercado">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-urgent font-semibold text-sm uppercase tracking-wider">
            ⚡ Dados do Mercado
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
            O mercado de tech{" "}
            <span className="text-gradient-primary">não espera</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Enquanto milhares de vagas ficam sem preenchimento, profissionais
            qualificados conquistam salários acima da média e liberdade
            geográfica total.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketStats;
