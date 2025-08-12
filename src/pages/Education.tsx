import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      id: 1,
      degree: 'Master of Computer Applications',
      institution: 'Rathinam Technical Campus',
      location: 'coimbator, Tamil Nadu, India',
      period: '2024 - 2026',
      description: 'Specialized in Full Stack Developer.',
      courses: ['Advanced Web Development', 'Networking', 'Servers(windows & linux)', 'MERN-Stack', 'Cloud Computing'],
    },
    {
      id: 2,
      degree: 'Bachelor of Science in Pysics',
      institution: 'Bharathiyar University',
      location: 'Coimbator, Tamil Nadu, India',
      period: '2018 - 2021',
      description: 'fundamental principles governing the natural world, particularly matter, energy, space, and time.',
      courses: ['Thermodynamics', 'Modern Physics', 'Mathematical Physics', 'Quantum physics',],
    },
  ];

  const certifications = [
    {
      id: 1,
      name: 'Cisco Certified Networking Associate',
      issuer: 'cisco',
      date: 'December 2021',
    },
    {
      id: 2,
      name: 'Master Diploma in networking',
      issuer: 'IECT',
      date: 'october 2021',
    },
    {
      id: 3,
      name: 'Hardware A+',
      issuer: 'IECT',
      date: 'March 2019',
    },
  ];

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
            className="mb-16 text-center"
          >
            <h1 className="mb-4">Education & Qualifications</h1>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              My academic background and professional certifications that have 
              shaped my expertise in software development and design.
            </p>
          </motion.div>

          <div className="mb-20">
            <div className="mb-8 flex items-center">
              <GraduationCap className="mr-3 text-primary-600 dark:text-primary-400" size={28} />
              <h2 className="text-3xl">Academic Education</h2>
            </div>

            <div className="relative space-y-12 pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-gray-200 dark:before:bg-gray-700">
              {educationData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-8 before:absolute before:left-[-6px] before:top-0 before:h-4 before:w-4 before:rounded-full before:bg-primary-600 before:content-[''] dark:before:bg-primary-500"
                >
                  <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
                    <h3 className="mb-2 text-2xl font-semibold text-primary-700 dark:text-primary-400">
                      {item.degree}
                    </h3>
                    <div className="mb-4">
                      <p className="text-lg font-medium">{item.institution}</p>
                      <p className="text-gray-600 dark:text-gray-400">{item.location}</p>
                      <div className="mt-2 flex items-center text-gray-500 dark:text-gray-400">
                        <Calendar size={16} className="mr-1" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                    <p className="mb-4 text-gray-600 dark:text-gray-400">{item.description}</p>
                    <div>
                      <h4 className="mb-2 font-medium">Key Courses:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.courses.map((course, i) => (
                          <span
                            key={i}
                            className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8 flex items-center">
              <Award className="mr-3 text-secondary-600 dark:text-secondary-400" size={28} />
              <h2 className="text-3xl">Certifications</h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="card flex flex-col"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary-100 text-secondary-600 dark:bg-secondary-900/30 dark:text-secondary-400">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="mb-2 text-xl font-medium">{cert.name}</h3>
                  <p className="mb-1 text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{cert.date}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Education;