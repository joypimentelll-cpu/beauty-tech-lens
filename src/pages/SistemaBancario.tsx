import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, Linkedin, Target, Wrench, Brain, Sparkles } from 'lucide-react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Footer from '@/components/portfolio/Footer';
import AccessibilityWidget from '@/components/portfolio/AccessibilityWidget';

const stack = [
  { label: 'Linguagem Principal', value: 'Python 3.11+' },
  { label: 'Paradigma', value: 'Programação Orientada a Objetos (OOP)' },
  { label: 'Arquitetura de Dados', value: 'Modelagem de entidades relacionais · Dicionários e Listas' },
  { label: 'Garantia de Qualidade', value: 'Tratamento robusto de exceções (try/except)' },
];

const decisions = [
  {
    n: '01',
    title: 'Modelagem com Classes e Objetos',
    desc: 'A abstração do mundo real foi mapeada em uma estrutura de classes clara: Cliente, PessoaFisica, Conta e ContaCorrente — permitindo o isolamento completo de responsabilidades.',
  },
  {
    n: '02',
    title: 'Herança e Polimorfismo',
    desc: 'A classe ContaCorrente herda diretamente de uma classe genérica Conta. O polimorfismo foi aplicado para estender e especializar regras de negócio (limites de saque e número máximo de transações diárias) sem quebrar a lógica global do sistema.',
  },
  {
    n: '03',
    title: 'Abstração e Contratos Claros (ABC)',
    desc: 'O fluxo de transações foi construído sobre o módulo abc do Python. A classe mãe Transacao define o contrato obrigatório com @abstractmethod, garantindo que qualquer nova funcionalidade implemente estritamente o método registrar.',
  },
  {
    n: '04',
    title: 'Encapsulamento de Dados e Segurança',
    desc: 'Propriedades críticas — como saldos e históricos bancários — foram blindadas contra acessos externos indevidos usando atributos protegidos/privados e expostas de forma segura através de decoradores @property.',
  },
];

const features = [
  {
    title: 'Módulo de Clientes',
    desc: 'Cadastro dinâmico de usuários Pessoa Física com validações lógicas cruciais, incluindo bloqueio automático de CPFs duplicados.',
  },
  {
    title: 'Módulo de Contas',
    desc: 'Sistema multi-contas que permite a vinculação de contas correntes sequenciais automáticas ao perfil único do CPF do usuário.',
  },
  {
    title: 'Histórico de Transações Flexível',
    desc: 'Geração automatizada de extratos que registram data, hora e tipo de movimentação financeira baseada nos objetos das classes de transação.',
  },
];

const SistemaBancario = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded focus:bg-primary focus:text-primary-foreground focus:outline-none"
        >
          Pular para o conteúdo principal
        </a>

        <header className="border-b border-border/30 px-6 py-5">
          <div className="container mx-auto max-w-5xl flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm tracking-[0.25em] uppercase text-muted-foreground hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar ao portfólio</span>
            </Link>
            <span className="hidden sm:block text-xs tracking-[0.3em] uppercase text-accent/80 font-sans">
              Case Study
            </span>
          </div>
        </header>

        <main id="main-content">
          {/* Hero */}
          <section className="relative px-6 pt-24 pb-20 overflow-hidden">
            <div
              className="absolute inset-0 -z-10"
              style={{ background: 'var(--gradient-hero)' }}
              aria-hidden
            />
            <div className="container mx-auto max-w-4xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-sm tracking-[0.4em] uppercase text-accent mb-6 font-sans font-light">
                  Python · POO · Engenharia de Software
                </p>
                <h1 className="luxury-text text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] mb-6">
                  Sistema Bancário <span className="text-gradient-gold">Otimizado</span>
                </h1>
                <div className="section-divider mb-8" />
                <p className="body-text text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto">
                  Refatoração e migração completa de um sistema bancário legado para o paradigma de
                  Programação Orientada a Objetos — com foco em escalabilidade, manutenibilidade e
                  padrões de design modernos.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
                  <span className="px-4 py-2 text-xs tracking-widest uppercase rounded-full border border-primary/40 text-primary">
                    Bootcamp DIO
                  </span>
                  <span className="px-4 py-2 text-xs tracking-widest uppercase rounded-full border border-accent/40 text-accent">
                    OOP · ABC · Polimorfismo
                  </span>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Visão Geral */}
          <section className="px-6 py-20">
            <div className="container mx-auto max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-5 h-5 text-accent" aria-hidden />
                <p className="text-sm tracking-[0.3em] uppercase text-accent font-sans">
                  Visão Geral
                </p>
              </div>
              <div className="section-divider !mx-0 mb-10" />
              <p className="body-text text-foreground/85 text-lg leading-relaxed">
                Este projeto foi desenvolvido como um marco técnico fundamental dentro do Bootcamp
                da <strong className="text-foreground">Digital Innovation One (DIO)</strong>. O
                principal objetivo foi realizar a refatoração e migração completa de um sistema
                bancário legado — estruturado de forma linear e sequencial — para o paradigma de{' '}
                <strong className="text-foreground">Programação Orientada a Objetos (POO)</strong>.
                Essa reengenharia de código visou garantir escalabilidade, manutenibilidade e
                aplicação rigorosa de padrões de design de software modernos.
              </p>
            </div>
          </section>

          {/* Stack */}
          <section className="px-6 py-20 bg-secondary/20">
            <div className="container mx-auto max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="w-5 h-5 text-accent" aria-hidden />
                <p className="text-sm tracking-[0.3em] uppercase text-accent font-sans">
                  Stack Tecnológica & Competências
                </p>
              </div>
              <div className="section-divider !mx-0 mb-10" />

              <div className="grid sm:grid-cols-2 gap-6">
                {stack.map((item) => (
                  <div
                    key={item.label}
                    className="glass-card p-6 hover-glow"
                  >
                    <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2 font-sans">
                      {item.label}
                    </p>
                    <p className="luxury-text text-xl text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Decisões Técnicas */}
          <section className="px-6 py-24">
            <div className="container mx-auto max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-5 h-5 text-accent" aria-hidden />
                <p className="text-sm tracking-[0.3em] uppercase text-accent font-sans">
                  Arquitetura & Decisões Técnicas
                </p>
              </div>
              <div className="section-divider !mx-0 mb-12" />

              <div className="space-y-8">
                {decisions.map((d, i) => (
                  <motion.article
                    key={d.n}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="glass-card p-8 grid sm:grid-cols-[auto_1fr] gap-6 items-start"
                  >
                    <span className="luxury-text text-5xl text-gradient-gold leading-none">
                      {d.n}
                    </span>
                    <div>
                      <h3 className="luxury-text text-2xl text-foreground mb-3">{d.title}</h3>
                      <p className="body-text text-muted-foreground leading-relaxed">{d.desc}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          {/* Impacto / Features */}
          <section className="px-6 py-24 bg-secondary/20">
            <div className="container mx-auto max-w-5xl">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-5 h-5 text-accent" aria-hidden />
                <p className="text-sm tracking-[0.3em] uppercase text-accent font-sans">
                  Impacto & Principais Funcionalidades
                </p>
              </div>
              <div className="section-divider !mx-0 mb-12" />

              <div className="grid md:grid-cols-3 gap-6">
                {features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="glass-card p-8 hover-glow h-full"
                  >
                    <h3 className="luxury-text text-xl text-foreground mb-4">{f.title}</h3>
                    <p className="body-text text-muted-foreground leading-relaxed">{f.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Links */}
          <section className="px-6 py-24">
            <div className="container mx-auto max-w-3xl text-center">
              <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4 font-sans">
                Links & Portfólio
              </p>
              <div className="section-divider mb-10" />

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://github.com/joypimentelll-cpu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 text-xs tracking-[0.25em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-full"
                >
                  <Github className="w-4 h-4" />
                  Código Fonte
                </a>
                <a
                  href="https://www.linkedin.com/in/joyce-santo-0285a6122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 text-xs tracking-[0.25em] uppercase border border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground transition-colors rounded-full"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <Link
                  to="/#projects"
                  className="inline-flex items-center gap-2 px-7 py-3 text-xs tracking-[0.25em] uppercase border border-foreground/30 text-foreground hover:border-accent hover:text-accent transition-colors rounded-full"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Outros projetos
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <AccessibilityWidget />
      </div>
    </LanguageProvider>
  );
};

export default SistemaBancario;
