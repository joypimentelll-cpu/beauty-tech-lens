import { Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';



const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/30 py-10 px-6">
      <div className="container mx-auto max-w-4xl flex flex-col items-center gap-4 text-center">
        <p className="luxury-text text-base text-foreground/80 italic max-w-2xl">
          {t('footer_tagline')}
        </p>
        <a
          href="https://www.linkedin.com/in/joyce-santo-0285a6122"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn de Joyce Pimentel"
          className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-border/40 text-foreground/80 hover:text-primary hover:border-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Linkedin className="w-5 h-5" />
        </a>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 w-full pt-4 border-t border-border/20">
          <p className="text-sm text-muted-foreground tracking-widest font-sans">
            © {year} Joyce Pimentel
          </p>
          <p className="text-xs text-muted-foreground/60 tracking-wider font-sans">
            {t('footer_rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
