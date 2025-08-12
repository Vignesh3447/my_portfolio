import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md dark:bg-gray-900/80 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <NavLink to="/" className="text-xl font-bold text-primary-600 dark:text-primary-400">
              Info
            </NavLink>
          </div>

          <nav className="hidden space-x-4 md:flex">
            <NavLink
              to="/"
              className={({ isActive }) => 
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/education"
              className={({ isActive }) => 
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
            >
              Education
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => 
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => 
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
            >
              Contact
            </NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="/resume.pdf"
              download
              className="btn btn-outline hidden items-center md:inline-flex"
            >
              <Download size={16} className="mr-2" />
              Download CV
            </a>
            <ThemeToggle />
            
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 dark:text-gray-300 dark:hover:bg-gray-800 md:hidden"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="container-custom pb-3 pt-2">
          <div className="flex flex-col space-y-2">
            <NavLink
              to="/"
              className={({ isActive }) => 
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/education"
              className={({ isActive }) => 
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
            >
              Education
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => 
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => 
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
            >
              Contact
            </NavLink>
            <a
              href="/resume.pdf"
              download
              className="nav-link inline-flex items-center"
            >
              <Download size={16} className="mr-2" />
              Download CV
            </a>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;