import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A responsive dashboard for e-commerce businesses with analytics, inventory management, and order processing.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      category: 'web',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'A weather application that provides real-time weather information and forecasts based on user location.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React', 'JavaScript', 'OpenWeather API', 'CSS'],
      category: 'web',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 3,
      title: 'Task Manager',
      description: 'A productivity app that helps users organize and manage their daily tasks and projects.',
      image: 'https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React Native', 'Firebase', 'Redux'],
      category: 'mobile',
      githubUrl: 'https://github.com',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase projects and skills.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'web',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'An application to track workouts, nutrition, and fitness progress.',
      image: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React Native', 'TypeScript', 'GraphQL', 'Node.js'],
      category: 'mobile',
      githubUrl: 'https://github.com',
    },
    {
      id: 6,
      title: 'Recipe App',
      description: 'A platform for finding, saving, and sharing recipes with friends.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'web',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
  ];

  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h1 className="mb-4">My Projects</h1>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              Here's a selection of projects I've worked on. Each project represents my 
              skills and passion for creating intuitive and functional applications.
            </p>
          </motion.div>

          <div className="mb-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                filter === 'web'
                  ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Web Applications
            </button>
            <button
              onClick={() => setFilter('mobile')}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                filter === 'mobile'
                  ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Mobile Applications
            </button>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:-translate-y-1 dark:bg-gray-800"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/70 opacity-0 transition-opacity group-hover:opacity-100">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 transition-colors hover:bg-primary-500 hover:text-white"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-800 transition-colors hover:bg-primary-500 hover:text-white"
                        aria-label="View source code"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">{project.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                      >
                        <Code size={12} className="mr-1" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;