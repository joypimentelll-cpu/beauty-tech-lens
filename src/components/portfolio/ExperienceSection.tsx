import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const expKeys = ['lab', 'micro', 'quality', 'env'] as const;

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
            {expKeys.map((key, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-6 py-6 border-b border-border/30 group"
              >
                <span className="text-sm text-accent/50 font-sans tracking-widest">0{i + 1}</span>
                <h3 className="luxury-text text-xl sm:text-2xl text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                  {t(`exp_${key}`)}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
