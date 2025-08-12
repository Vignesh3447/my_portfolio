import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={{ scale: 0.8, rotate: 0 }}
        animate={{ scale: 1, rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3, type: 'spring' }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;