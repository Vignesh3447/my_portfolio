import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Code2, Database, Layout, Smartphone, Server, Globe, Github as Git, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const skills = [
    { name: 'Frontend Development', icon: <Layout size={24} /> },
    { name: 'Backend Development', icon: <Server size={24} /> },
    { name: 'Networking (CCNA)', icon: <Database size={24} /> },
    { name: 'Windows Server & Linux Server', icon: <Smartphone size={24} /> },
    { name: 'Web Development', icon: <Globe size={24} /> },
    { name: 'Python Development', icon: <Git size={24} /> },
    { name: 'MERN', icon: <Code2 size={24} /> },
    { name: 'DevOps', icon: <Terminal size={24} /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] py-20">
        <div className="container-custom h-full">
          <div className="flex flex-col-reverse items-center justify-between gap-12 md:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              <span className="mb-4 inline-block text-lg font-medium text-primary-600 dark:text-primary-400">
                Hello, I'm
              </span>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                Vigneshwaran D
              </h1>
              <h2 className="mb-6 text-2xl font-medium text-gray-600 dark:text-gray-300">
                Full Stack Developer 
              </h2>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                I specialize in building exceptional digital experiences that are fast,
                accessible, visually appealing, and responsive. With expertise in both
                frontend and backend development, I create scalable solutions that solve
                real-world problems.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Let's Connect
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-white shadow-xl dark:border-gray-700 md:h-96 md:w-96"
            >
              <img
                src="public/pic/IMG-20250702-WA0056.jpg"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </motion.div>Qualifications
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold">My Skills</h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              Specialized in full-stack development with expertise in various technologies
              and frameworks and basic knowledge with networking and servers
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-lg transition-transform hover:-translate-y-1 dark:bg-gray-800"
              >
                <div className="rounded-full bg-primary-100 p-3 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                  {skill.icon}
                </div>
                <h3 className="font-semibold">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold">Featured Projects</h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              Here are some of my recent projects. Visit the projects page to see more.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((project) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: project * 0.1 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:-translate-y-2 dark:bg-gray-800"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg`}
                    alt={`Project ${project}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="flex h-full items-center justify-center">
                      <Link
                        to="/projects"
                        className="rounded-full bg-white px-6 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-primary-500 hover:text-white"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">Project Title {project}</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">
                    A brief description of the project and the technologies used in its
                    development.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
                      React
                    </span>
                    <span className="rounded-full bg-secondary-100 px-3 py-1 text-xs font-medium text-secondary-800 dark:bg-secondary-900/30 dark:text-secondary-300">
                      TypeScript
                    </span>
                    <span className="rounded-full bg-accent-100 px-3 py-1 text-xs font-medium text-accent-800 dark:bg-accent-900/30 dark:text-accent-300">
                      Tailwind
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/projects" className="btn btn-outline">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20">
        <div className="container-custom">
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;