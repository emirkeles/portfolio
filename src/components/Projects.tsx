'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Ticaret Platformu',
      description: 'Next.js ve TypeScript kullanılarak geliştirilmiş modern e-ticaret platformu. Stripe entegrasyonu, admin paneli ve responsive tasarım.',
      image: '/project1.jpg',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'React ve Node.js ile geliştirilmiş görev yönetim uygulaması. Drag & drop özelliği, real-time güncellemeler ve takım çalışması.',
      image: '/project2.jpg',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'CSS3'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      title: 'Blog Platformu',
      description: 'Vue.js ve Nuxt.js ile geliştirilmiş kişisel blog platformu. Markdown desteği, SEO optimizasyonu ve admin paneli.',
      image: '/project3.jpg',
      tech: ['Vue.js', 'Nuxt.js', 'SASS', 'Firebase', 'Markdown'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      title: 'Weather App',
      description: 'React Native ile geliştirilmiş hava durumu mobil uygulaması. Konum tabanlı hava durumu, 7 günlük tahmin.',
      image: '/project4.jpg',
      tech: ['React Native', 'TypeScript', 'API Integration', 'Styled Components'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'Next.js ve Framer Motion ile geliştirilmiş kişisel portfolio websitesi. Animasyonlar, responsive tasarım.',
      image: '/project5.jpg',
      tech: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat uygulaması. Socket.io, React ve Node.js kullanılarak geliştirildi. Grup sohbetleri ve dosya paylaşımı.',
      image: '/project6.jpg',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'CSS3'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    }
  ];

  interface Project {
    title: string;
    description: string;
    image: string;
    tech: string[];
    github: string;
    live: string;
    featured: boolean;
  }

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
        project.featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div className="relative group">
        <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
          <div className="text-white text-6xl font-bold opacity-20">
            {project.title.charAt(0)}
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ExternalLink size={20} />
            </motion.a>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech: string) => (
            <span
              key={tech}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Projelerim
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Geliştirdiğim bazı projeler ve kullandığım teknolojiler. Her biri farklı 
            zorluklarla dolu ve öğretici deneyimler sundu.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            <Github size={20} />
            Tüm Projeleri Gör
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}