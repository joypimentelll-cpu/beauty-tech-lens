import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Github, Globe, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  titleKey: string;
  descKey: string;
  tech: string[];
  demoUrl?: string;
  repoUrl?: string;
  detailUrl?: string;
}

const projects: Project[] = [
  {
    titleKey: 'p_redvelvet_title',
    descKey: 'p_redvelvet_desc',
    tech: ['React', 'JavaScript', 'CSS', 'Responsive'],
    repoUrl: 'https://github.com/joypimentelll-cpu/bolo_red_velvet',
  },
  {
    titleKey: 'p_cineverse_title',
    descKey: 'p_cineverse_desc',
    tech: ['React', 'JavaScript', 'CSS', 'UX/UI'],
    repoUrl: 'https://github.com/joypimentelll-cpu/cinema',
  },
  {
    titleKey: 'p_cop30_title',
    descKey: 'p_cop30_desc',
    tech: ['React', 'HTML', 'CSS', 'JavaScript'],
    repoUrl: 'https://github.com/joypimentelll-cpu/cop30-amazonia-action',
  },
  {
    titleKey: 'p_fdvendas_title',
    descKey: 'p_fdvendas_desc',
    tech: ['React', 'JavaScript', 'CSS', 'Responsive'],
    repoUrl: 'https://github.com/joypimentelll-cpu/fdvendas-next-level',
  },
  {
    titleKey: 'p_passoia_title',
    descKey: 'p_passoia_desc',
    tech: ['React', 'JavaScript', 'CSS', 'UX/UI'],
    repoUrl: 'https://github.com/joypimentelll-cpu/passoia-beauty-hub',
  },
  {
    titleKey: 'p_zap_title',
    descKey: 'p_zap_desc',
    tech: ['React', 'Tailwind', 'Motion UI', 'JavaScript'],
    repoUrl: 'https://github.com/joypimentelll-cpu/zap-motion-flow',
    demoUrl: 'https://zap-motion-flow.lovable.app/login',
  },
  {
    titleKey: 'p_smart_title',
    descKey: 'p_smart_desc',
    tech: ['Power Apps', 'SharePoint', 'Low-Code', 'UX/UI'],
    demoUrl: 'https://apps.powerapps.com/play/e/default-279e4974-0f51-498c-b0d7-be0bc2b09aea/a/46d4288b-e1b1-4eda-b9d6-a5b5321351dc?tenantId=279e4974-0f51-498c-b0d7-be0bc2b09aea&hint=06f704ad-e057-4430-9d7e-1958c3bae953&sourcetime=1772215575013&authuser=0',
  },
  {
    titleKey: 'p_banco_title',
    descKey: 'p_banco_desc',
    tech: ['Python', 'OOP', 'ABC', 'Software Design'],
    repoUrl: 'https://github.com/joypimentelll-cpu',
    detailUrl: '/projects/sistema-bancario',
  },
];

const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4 font-sans">
            {t('projects_title')}
          </p>
          <div className="section-divider mb-8" />
          <p className="body-text text-muted-foreground max-w-2xl mx-auto">
            {t('projects_desc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.15 }}
              className="glass-card p-8 hover-glow flex flex-col"
            >
              <h3 className="luxury-text text-2xl text-foreground mb-3">
                {t(project.titleKey)}
              </h3>
              <p className="body-text text-muted-foreground mb-5 flex-1">
                {t(project.descKey)}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs tracking-widest uppercase px-3 py-1 rounded-full border border-primary/30 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-5 pt-4 border-t border-border/30">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`${t('projects_repo')} - ${t(project.titleKey)}`}
                  >
                    <Github className="w-4 h-4" />
                    <span>{t('projects_repo')}</span>
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`Demo - ${t(project.titleKey)}`}
                  >
                    <Globe className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                )}
                {project.detailUrl && (
                  <Link
                    to={project.detailUrl}
                    className="ml-auto flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors"
                    aria-label={`${t('projects_case_study')} - ${t(project.titleKey)}`}
                  >
                    <span>{t('projects_case_study')}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
