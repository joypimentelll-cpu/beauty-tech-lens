import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, hsl(270 15% 6% / 0.6), hsl(270 15% 6% / 0.9))' }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-sm tracking-[0.4em] uppercase text-accent mb-6 font-sans font-light">
            {t('hero_eyebrow')}
          </p>
          <h1 className="luxury-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.1] text-foreground mb-8">
            Joyce
            <br />
            <span className="text-gradient-gold">Pimentel</span>
          </h1>
          <div className="section-divider mb-8" />
          <p className="body-text text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto mb-4">
            {t('hero_tagline')}
          </p>
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-10">
            {t('hero_subtitle')}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => scrollTo('projects')}
              className="px-7 py-3 text-xs tracking-[0.25em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-full"
            >
              {t('hero_cta_projects')}
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-7 py-3 text-xs tracking-[0.25em] uppercase border border-foreground/30 text-foreground hover:border-accent hover:text-accent transition-colors rounded-full"
            >
              {t('hero_cta_contact')}
            </button>
            <a
              href="/cv-joyce-pimentel.pdf"
              download
              className="px-7 py-3 text-xs tracking-[0.25em] uppercase border border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground transition-colors rounded-full"
            >
              {t('hero_cta_cv')}
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-accent/60 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
