import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: 'success' | 'error' | '';
  }>({
    message: '',
    type: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically be connected to a backend or email service
    // For demo purposes, just show a success message
    setFormStatus({
      message: 'Message sent successfully! I will get back to you soon.',
      type: 'success',
    });
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    // Reset status message after 5 seconds
    setTimeout(() => {
      setFormStatus({ message: '', type: '' });
    }, 5000);
  };

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
            <h1 className="mb-4">Get In Touch</h1>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              Have a question or want to work together? Fill out the form below or reach
              out through one of my contact methods.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="mb-6 text-2xl font-semibold">Contact Information</h2>
              <div className="mb-8 space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-medium">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">vigneshwaran3447@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-medium">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">+91 99448 93447</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-medium">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">Coimbator, Tamil Nadu</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
                <h3 className="mb-4 text-lg font-medium">Let's Connect</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  I'm currently available for freelance work and full-time positions.
                  If you have a project that needs some creative touches, let's talk!
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Follow me on social media to see more of my work and daily activities.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="mb-6 text-2xl font-semibold">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-300 bg-white p-3 text-gray-900 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-300 bg-white p-3 text-gray-900 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-300 bg-white p-3 text-gray-900 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    placeholder="Project Discussion"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-md border border-gray-300 bg-white p-3 text-gray-900 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary w-full"
                  >
                    <Send size={16} className="mr-2" />
                    Send Message
                  </button>
                </div>
                {formStatus.message && (
                  <div
                    className={`mt-4 rounded-md p-3 ${
                      formStatus.type === 'success'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;