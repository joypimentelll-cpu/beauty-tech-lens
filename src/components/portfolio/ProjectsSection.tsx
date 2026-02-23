import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe } from 'lucide-react';

interface Project {
  titleKey: string;
  descKey: string;
  techKeys: string[];
  projectUrl?: string;
  demoUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    titleKey: 'projects_1_title',
    descKey: 'projects_1_desc',
    techKeys: ['React', 'TypeScript', 'Tailwind CSS'],
    projectUrl: '',
    demoUrl: '',
    repoUrl: 'https://github.com/',
  },
  {
    titleKey: 'projects_2_title',
    descKey: 'projects_2_desc',
    techKeys: ['Java', 'Spring Boot', 'MySQL'],
    projectUrl: '',
    demoUrl: '',
    repoUrl: 'https://github.com/',
  },
  {
    titleKey: 'projects_3_title',
    descKey: 'projects_3_desc',
    techKeys: ['Power BI', 'Python', 'IA'],
    projectUrl: '',
    demoUrl: '',
    repoUrl: 'https://github.com/',
  },
];

const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-32 px-6">
      <div className="container mx-auto max-w-5xl">
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
          <p className="body-text text-muted-foreground max-w-2xl mx-auto mb-8">
            {t('projects_desc')}
          </p>
          <div className="section-divider mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card p-8 hover-glow flex flex-col"
            >
              <h3 className="luxury-text text-2xl text-foreground mb-3">
                {t(project.titleKey)}
              </h3>
              <p className="body-text text-muted-foreground mb-5 flex-1">
                {t(project.descKey)}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techKeys.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs tracking-widest uppercase px-3 py-1 rounded-full border border-primary/30 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-border/30">
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
                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`${t('projects_url')} - ${t(project.titleKey)}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{t('projects_url')}</span>
                  </a>
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
