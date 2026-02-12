import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4 font-sans">{t('about_title')}</p>
          <div className="section-divider !mx-0 mb-12" />

          <div className="space-y-6 body-text text-foreground/80 text-lg leading-relaxed">
            <p>{t('about_p1')}</p>
            <p>{t('about_p2')}</p>
            <p className="text-foreground/90 italic font-serif text-xl">{t('about_p3')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
