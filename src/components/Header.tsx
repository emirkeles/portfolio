'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Smartphone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/emirkeles',
      label: t('github')
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com/in/emirkeles',
      label: t('linkedin')
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:emir@example.com',
      label: t('email')
    },
    {
      icon: <Smartphone size={20} />,
      href: 'https://apps.apple.com/developer/emir-keles/id123456789',
      label: t('appstore')
    }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-gray-900"
          >
            EK
          </motion.div>

          {/* Right Side - Language Toggle & Social Links */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="flex items-center space-x-2 bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  language === 'en'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('tr')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  language === 'tr'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                TR
              </button>
            </div>

            {/* Social Links */}
            <div className="hidden sm:flex items-center space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}