import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/30 py-8 px-6">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground tracking-widest font-sans">
          © {year} Joyce Pimentel
        </p>
        <p className="text-xs text-muted-foreground/60 tracking-wider font-sans">
          {t('footer_rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
