import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  const { t } = useLanguage();

  const items = [
    { key: 'email', icon: Mail, value: 'joycepimentel10@gmail.com', href: 'mailto:joycepimentel10@gmail.com', external: false },
    { key: 'phone', icon: Phone, value: '+55 (21) 96589-9779', href: 'tel:+5521965899779', external: false },
    { key: 'github', icon: Github, value: 'github.com/joypimentelll-cpu', href: 'https://github.com/joypimentelll-cpu', external: true },
    { key: 'linkedin', icon: Linkedin, value: 'LinkedIn', href: 'https://www.linkedin.com/in/joyce-santo-0285a6122', external: true },
  ];

  return (
    <section id="contact" className="py-32 px-6">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4 font-sans">{t('contact_title')}</p>
          <div className="section-divider mb-8" />
          <p className="body-text text-muted-foreground mb-16">{t('contact_intro')}</p>

          <div className="space-y-8">
            {items.map(({ key, icon: Icon, value, href, external }) => (
              <a
                key={key}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-center gap-4 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                <Icon className="w-4 h-4 text-accent/60 group-hover:text-accent transition-colors" />
                <span className="body-text text-lg tracking-wide">{value}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
