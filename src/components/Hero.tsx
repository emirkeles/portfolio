'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Smartphone, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: 'https://github.com/emirkeles',
      label: t('github'),
      color: 'hover:text-gray-900'
    },
    {
      icon: <Linkedin size={24} />,
      href: 'https://linkedin.com/in/emirkeles',
      label: t('linkedin'),
      color: 'hover:text-blue-600'
    },
    {
      icon: <Mail size={24} />,
      href: 'mailto:emir@example.com',
      label: t('email'),
      color: 'hover:text-red-500'
    },
    {
      icon: <Smartphone size={24} />,
      href: 'https://apps.apple.com/developer/emir-keles/id123456789',
      label: t('appstore'),
      color: 'hover:text-blue-500'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl"
          >
            <User size={48} className="text-white" />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            {t('name')}
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 font-semibold"
          >
            {t('title')}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg text-gray-500 max-w-lg mx-auto leading-relaxed"
          >
            {t('description')}
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center space-x-6 pt-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-white rounded-2xl shadow-lg text-gray-600 ${social.color} transition-all duration-300 hover:shadow-xl`}
                title={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}