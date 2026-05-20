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
