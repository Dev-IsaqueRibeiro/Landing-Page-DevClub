import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso ter experiência para começar?",
    a: "Não! A DevClub foi feita para levar você do zero absoluto ao nível profissional. Nosso método é passo a passo, com aulas práticas desde o primeiro dia. Não importa se você nunca escreveu uma linha de código.",
  },
  {
    q: "Quanto tempo preciso dedicar por dia?",
    a: "Recomendamos pelo menos 1 a 2 horas por dia. Nossos alunos que mantêm essa consistência conseguem resultados em 4 a 7 meses. Mas o conteúdo é gravado, você estuda no seu ritmo.",
  },
  {
    q: "O curso oferece certificado?",
    a: "Sim! Ao concluir cada módulo, você recebe um certificado de conclusão. Mas o mais importante: você terá um portfólio de projetos reais que impressionam recrutadores muito mais que qualquer certificado.",
  },
  {
    q: "Como funciona o suporte e a mentoria?",
    a: "Você tem acesso a mentores experientes que tiram dúvidas em tempo real, além de uma comunidade ativa com milhares de alunos. Ninguém fica preso sozinho em um problema.",
  },
  {
    q: "Posso migrar de carreira mesmo sem formação na área?",
    a: "Com certeza! Grande parte dos nossos alunos de sucesso vieram de outras áreas: administração, vendas, logística, e mais. O mercado de tech valoriza habilidade prática acima de diplomas.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-20" id="faq">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Perguntas <span className="text-gradient-primary">Frequentes</span>
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <AccordionItem
                value={`item-${i}`}
                className="glass-card px-6 border-border/50"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
