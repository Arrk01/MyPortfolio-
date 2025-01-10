import React from 'react';
import { Trophy, Medal, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: 'Online CTF Event Champion',
    description: '1st place in 4 events, 2nd place in 2 events',
    icon: <Trophy className="w-8 h-8 text-yellow-400" />,
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'XACTITUDE Competition',
    description: '2nd place in national-level technical competition',
    icon: <Medal className="w-8 h-8 text-silver-400" />,
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Cybersecurity Excellence',
    description: 'Top performer in university security challenges',
    icon: <Star className="w-8 h-8 text-blue-400" />,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Achievements() {
  return (
    <section className="py-20 bg-gray-800 text-white" id="achievements">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Achievements</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Recognition and accomplishments in the field of technology and cybersecurity
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-900 rounded-xl overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>
              
              <div className="relative p-6">
                <div className="flex justify-center -mt-12 mb-4">
                  <div className="p-3 bg-gray-900 rounded-xl ring-4 ring-blue-500/20 transform group-hover:scale-110 transition-transform">
                    {achievement.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-center">{achievement.title}</h3>
                <p className="text-gray-400 text-center">{achievement.description}</p>
              </div>
              
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}