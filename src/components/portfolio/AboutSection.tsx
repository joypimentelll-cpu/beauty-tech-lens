import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import joycePhoto from '@/assets/joyce-pimentel.jpg';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-[auto_1fr] gap-12 md:gap-16 items-start"
        >
          <div className="relative mx-auto md:mx-0">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent/40 to-primary/20 blur-2xl opacity-60" />
            <img
              src={joycePhoto}
              alt="Joyce Pimentel"
              loading="lazy"
              className="relative w-56 h-56 md:w-64 md:h-64 object-cover rounded-full border border-accent/30 shadow-2xl"
            />
          </div>

          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4 font-sans">{t('about_title')}</p>
            <div className="section-divider !mx-0 mb-12" />

            <div className="space-y-6 body-text text-foreground/80 text-lg leading-relaxed">
              <p>{t('about_p1')}</p>
              <p>{t('about_p2')}</p>
              <p className="text-foreground/90 italic font-serif text-xl">{t('about_p3')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
