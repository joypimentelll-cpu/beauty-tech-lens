import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { FlaskConical, BrainCircuit, Cog, ShieldCheck } from 'lucide-react';

const cards = [
  { key: 'lab', icon: FlaskConical },
  { key: 'data', icon: BrainCircuit },
  { key: 'auto', icon: Cog },
  { key: 'quality', icon: ShieldCheck },
];

const ScienceTechSection = () => {
  const { t } = useLanguage();

  return (
    <section id="science" className="py-32 px-6 relative">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 animate-glow-pulse pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(280 45% 55% / 0.3), transparent 70%)' }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4 font-sans">{t('science_title')}</p>
          <div className="section-divider mb-8" />
          <p className="body-text text-foreground/70 max-w-2xl mx-auto text-lg">{t('science_desc')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ key, icon: Icon }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-8 text-center hover-glow group"
            >
              <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center rounded-full border border-accent/30 text-accent group-hover:border-accent/60 transition-colors duration-500">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="luxury-text text-xl text-foreground mb-3">{t(`science_${key}`)}</h3>
              <p className="body-text text-sm text-muted-foreground">{t(`science_${key}_desc`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScienceTechSection;
