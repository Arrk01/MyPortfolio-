import React from 'react';
import { Code2, Database, Shield, Brush, GitBranch } from 'lucide-react';
import { Card } from './ui/Card';
import { GradientText } from './ui/GradientText';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <Code2 className="w-6 h-6" />,
    skills: ['Java', 'JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'Frameworks & Tools',
    icon: <Database className="w-6 h-6" />,
    skills: ['Spring Boot', 'Hibernate', 'MongoDB', 'MySQL', 'Kafka', 'Docker']
  },
  {
    title: 'Security',
    icon: <Shield className="w-6 h-6" />,
    skills: ['Penetration Testing', 'Vulnerability Assessment', 'JWT Authentication']
  },
  {
    title: 'Version Control',
    icon: <GitBranch className="w-6 h-6" />,
    skills: ['Git', 'GitHub']
  },
  {
    title: 'Design & Others',
    icon: <Brush className="w-6 h-6" />,
    skills: ['Photoshop', 'Microsoft Office', 'Postman', 'Junit']
  }
];

export default function Skills() {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 to-gray-800" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-white">
            Technical <GradientText>Skills</GradientText>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive set of skills developed through years of hands-on experience
            in software development and cybersecurity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="group"
            >
              <div 
                className="flex items-center gap-3 mb-6"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.5s ease-out forwards'
                }}
              >
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill} className="relative">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">{skill}</span>
                    </div>
                    <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
                        style={{ 
                          width: `${Math.random() * 30 + 70}%`,
                          animation: 'slideRight 1s ease-out forwards',
                          animationDelay: `${index * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}