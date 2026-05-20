import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const { t } = useLanguage();

  const items = [
    { key: 'email', icon: Mail, value: 'Joycepimentel10@gmail.com', href: 'mailto:Joycepimentel10@gmail.com' },
    { key: 'phone', icon: Phone, value: '+55 (00) 00000-0000', href: 'tel:+5500000000000' },
    { key: 'linkedin', icon: Linkedin, value: 'LinkedIn', href: 'https://www.linkedin.com/in/joyce-santo-0285a6122' },
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
          <div className="section-divider mb-16" />

          <div className="space-y-8">
            {items.map(({ key, icon: Icon, value, href }) => (
              <a
                key={key}
                href={href}
                target={key === 'linkedin' ? '_blank' : undefined}
                rel={key === 'linkedin' ? 'noopener noreferrer' : undefined}
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
