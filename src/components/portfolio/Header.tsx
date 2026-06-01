import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/data/translations';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';

const langLabels: Record<Language, string> = {
  pt: 'PT',
  en: 'EN',
  es: 'ES',
};

const navKeys = ['about', 'science', 'experience', 'skills', 'projects', 'vision', 'contact'] as const;

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/30"
      style={{ background: 'hsl(var(--background) / 0.85)', backdropFilter: 'blur(20px)' }}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => scrollTo('hero')} className="luxury-text text-lg tracking-[0.2em] text-foreground uppercase">
          Joyce Pimentel
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navKeys.map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key)}
              className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {t(`nav_${key}`)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Language selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Select language"
            >
              <Globe className="w-4 h-4" />
              <span className="tracking-widest">{langLabels[language]}</span>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="absolute right-0 mt-2 glass-card p-1 min-w-[80px]"
                >
                  {(Object.keys(langLabels) as Language[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLanguage(l); setLangOpen(false); }}
                      className={`block w-full text-left px-3 py-1.5 text-sm tracking-widest rounded transition-colors ${
                        language === l ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {langLabels[l]}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile menu toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-foreground" aria-label="Menu">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border/30"
            style={{ background: 'hsl(var(--background) / 0.97)' }}
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => scrollTo(key)}
                  className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t(`nav_${key}`)}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
