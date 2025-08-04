'use client';

import { motion } from 'framer-motion';
import { Linkedin, Youtube, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  // App Icons - Placeholder for now, you can replace with real app images
  const appIcons = [
    { 
      name: "App 1", 
      href: "https://apps.apple.com/app/id1",
      color: "bg-blue-500"
    },
    { 
      name: "App 2", 
      href: "https://apps.apple.com/app/id2",
      color: "bg-green-500"
    },
    { 
      name: "App 3", 
      href: "https://apps.apple.com/app/id3",
      color: "bg-red-500"
    }
  ];

  const socialPlatforms = [
    {
      icon: <Youtube size={32} />,
      href: 'https://youtube.com/@emirkeles',
      name: t('youtube'),
      color: 'text-red-600'
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      href: 'https://twitter.com/emirkeles',
      name: t('twitter'),
      color: 'text-black'
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      href: 'https://instagram.com/emirkeles',
      name: t('instagram'),
      color: 'text-pink-600'
    },
    {
      icon: <Linkedin size={32} />,
      href: 'https://linkedin.com/in/emirkeles',
      name: t('linkedin'),
      color: 'text-blue-600'
    }
  ];

  return (
    <section className="min-h-screen bg-white pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-6 text-left">
        <div className="space-y-12">
          
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 text-2xl md:text-3xl text-gray-800 font-light"
          >
            <span>{t('greeting')}</span>
            <span className="font-semibold text-gray-900">{t('name')}</span>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center"
            >
              <User size={24} className="text-gray-600" />
            </motion.div>
          </motion.div>

          {/* I build apps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-6 text-2xl md:text-3xl text-gray-800 font-light"
          >
            <span>{t('buildApps')}</span>
            <div className="flex gap-3">
              {appIcons.map((app, index) => (
                <motion.a
                  key={app.name}
                  href={app.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  className={`w-12 h-12 ${app.color} rounded-2xl flex items-center justify-center shadow-lg`}
                >
                  <span className="text-white font-bold text-lg">
                    {app.name.charAt(app.name.length - 1)}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Make content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center gap-6 text-2xl md:text-3xl text-gray-800 font-light"
          >
            <span>{t('makeContent')}</span>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="text-red-600"
            >
              <Youtube size={40} />
            </motion.div>
          </motion.div>

          {/* Social platforms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-2xl md:text-3xl text-gray-800 font-light">
              {t('postRegularly')}
            </p>
            <div className="flex gap-4 flex-wrap">
              {socialPlatforms.map((platform, index) => (
                <motion.a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  className={`${platform.color} hover:opacity-80 transition-opacity`}
                  title={platform.name}
                >
                  {platform.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="space-y-6 pt-8 border-t border-gray-200"
          >
            <div className="space-y-3">
              <p className="text-lg text-gray-700">
                {t('needHelp')}{' '}
                <a 
                  href="mailto:16emirkeles@gmail.com?subject=Development Help" 
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  {t('clickHere')}
                </a>
              </p>
              
              <p className="text-lg text-gray-700">
                {t('sayHi')}{' '}
                <a 
                  href="mailto:16emirkeles@gmail.com?subject=Hello!" 
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  {t('clickHere')}
                </a>
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}