'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Empty left side for balance */}
          <div></div>

          {/* Language Toggle */}
          <div className="flex items-center space-x-1 bg-gray-100 rounded-full p-1">
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
        </div>
      </div>
    </motion.header>
  );
}