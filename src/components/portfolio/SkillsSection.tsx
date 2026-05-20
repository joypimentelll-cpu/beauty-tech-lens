import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Code, Server, Sparkles, Wrench } from 'lucide-react';

const SkillsSection = () => {
  const { t } = useLanguage();

  const blocks = [
    { key: 'frontend', icon: Code },
    { key: 'backend', icon: Server },
    { key: 'tech', icon: Sparkles },
    { key: 'tools', icon: Wrench },
  ];

  return (
    <section id="skills" className="py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4 font-sans">{t('skills_title')}</p>
          <p className="body-text text-muted-foreground max-w-2xl mx-auto mb-8">{t('skills_desc')}</p>
          <div className="section-divider mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blocks.map(({ key, icon: Icon }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-10 hover-glow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/40 text-primary">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="luxury-text text-2xl text-foreground">{t(`skills_${key}_title`)}</h3>
              </div>
              <p className="body-text text-muted-foreground leading-relaxed">{t(`skills_${key}_desc`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
