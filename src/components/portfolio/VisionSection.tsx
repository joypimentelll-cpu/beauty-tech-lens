import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const VisionSection = () => {
  const { t } = useLanguage();

  return (
    <section id="vision" className="py-32 px-6 relative">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(180deg, transparent 0%, hsl(280 30% 8% / 0.5) 50%, transparent 100%)'
      }} />
      <div className="container mx-auto max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4 font-sans">{t('vision_title')}</p>
          <div className="section-divider mb-12" />
          <p className="luxury-text text-2xl sm:text-3xl md:text-4xl text-foreground/90 leading-relaxed">
            {t('vision_desc')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
