'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users } from 'lucide-react';

export default function About() {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Node.js',
    'HTML5', 'CSS3', 'Tailwind CSS', 'SASS', 'Git', 'MongoDB', 'PostgreSQL'
  ];

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Temiz, sürdürülebilir ve okunabilir kod yazımına önem veriyorum.'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Modern Tasarım',
      description: 'Kullanıcı deneyimini ön planda tutan modern ve responsive tasarımlar.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performans',
      description: 'Hızlı yüklenen ve optimize edilmiş web uygulamaları geliştiriyorum.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'İş Birliği',
      description: 'Takım çalışmasına yatkın, iletişim becerileri güçlü bir geliştiriciyim.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hakkımda
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            3+ yıllık deneyime sahip bir frontend developer olarak, modern web teknolojileri 
            ile kullanıcı odaklı çözümler geliştiriyorum.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Tutkulu Bir Geliştrici
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Web geliştirme dünyasına olan tutkum, sürekli öğrenme ve gelişme isteğimle 
              birleşerek kaliteli projeler ortaya çıkarmamı sağlıyor. Kullanıcı deneyimini 
              merkeze alan, performans odaklı ve modern tasarım ilkelerini benimseyen 
              çözümler geliştiriyorum.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Her proje benim için yeni bir öğrenme fırsatı ve yaratıcılığımı ortaya 
              koyabileceğim bir alan. Teknolojinin sürekli gelişen doğasına ayak uydurarak, 
              sektördeki en güncel trendleri takip ediyor ve projelerimde uyguluyorum.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Teknolojiler & Yetenekler
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}