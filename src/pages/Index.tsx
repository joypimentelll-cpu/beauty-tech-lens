import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/portfolio/Header';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import ScienceTechSection from '@/components/portfolio/ScienceTechSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import VisionSection from '@/components/portfolio/VisionSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';
import AccessibilityWidget from '@/components/portfolio/AccessibilityWidget';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded focus:bg-primary focus:text-primary-foreground focus:outline-none"
        >
          Pular para o conteúdo principal
        </a>
        <Header />
        <main id="main-content">
          <HeroSection />
          <AboutSection />
          <ScienceTechSection />
          <ExperienceSection />
          <SkillsSection />
          <VisionSection />
          <ContactSection />
        </main>
        <Footer />
        <AccessibilityWidget />
      </div>
    </LanguageProvider>
  );
};

export default Index;
