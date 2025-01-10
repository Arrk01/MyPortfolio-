import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Founder',
    company: 'Aesthetic Sticks',
    period: 'Oct 2022 - Apr 2024',
    description: 'Launched and managed Aesthetic Sticks, a brand focused on selling custom-designed stickers at college events and offline markets, catering to a niche audience seeking unique, personalized designs.',
    achievements: [
        'Achieved an outstanding 280% return on investment, turning an initial investment of Rs. 15,000 into a profit of Rs. 57,000, showcasing excellent financial management and profitability.',
        'Refined entrepreneurial expertise in offline retail sales, developing strong customer relationships and identifying trends to create appealing, high-demand products.',
        'Successfully organized and executed sales at college events, consistently meeting revenue goals and growing the customer base through effective marketing and word-of-mouth promotion.',
        'Demonstrated leadership by handling all business operations, from product design to sales execution, ensuring exceptional quality and customer satisfaction at every step.'
    ]
},

  {
    title: 'Software Development Intern',
    company: 'Codsoft',
    period: '2023',
    description: 'Worked on full-stack development projects using modern technologies.',
    achievements: [
      'Developed responsive web applications',
      'Implemented secure authentication systems',
      'Collaborated with senior developers on large-scale projects'
    ]
  },
  {
    title: 'Design Intern',
    company: 'Digital Anjali Studio',
    period: '2022',
    description: 'Created digital designs and managed social media content.',
    achievements: [
      'Designed marketing materials and brand assets',
      'Managed social media campaigns',
      'Increased engagement by 30%'
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 bg-gray-800 text-white" id="experience">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.title} className="bg-gray-900 rounded-lg p-6 hover:transform hover:scale-[1.02] transition-transform">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400">{exp.title}</h3>
                  <p className="text-xl text-gray-300">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={18} />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4">{exp.description}</p>
              
              <ul className="space-y-2">
                {exp.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-center gap-3 text-gray-300">
                    <Briefcase size={16} className="text-green-400 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}