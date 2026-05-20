import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const items = ['1', '2', '3'] as const;

const ExperienceSection = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-32 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4 font-sans">{t('exp_title')}</p>
          <div className="section-divider !mx-0 mb-12" />

          <div className="space-y-0">
            {items.map((n, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 py-8 border-b border-border/30 group"
              >
                <span className="text-sm text-accent/50 font-sans tracking-widest pt-1">0{i + 1}</span>
                <div className="flex-1">
                  <h3 className="luxury-text text-xl sm:text-2xl text-foreground/90 group-hover:text-foreground transition-colors duration-300 mb-2">
                    {t(`exp_${n}_title`)}
                  </h3>
                  <p className="body-text text-muted-foreground leading-relaxed">
                    {t(`exp_${n}_desc`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
