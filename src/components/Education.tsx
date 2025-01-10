import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-20 bg-gray-900 text-white" id="education">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
        
        <div className="bg-gray-800 rounded-lg p-8">
          <div className="flex items-start gap-6">
            <div className="bg-blue-400 p-3 rounded-lg">
              <GraduationCap size={32} className="text-gray-900" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Bachelor of Technology in Computer Science</h3>
              <p className="text-xl text-blue-400 mb-4">Jain University - Specialization in Cybersecurity</p>
              
              <div className="flex items-center gap-2 mb-6">
                <Award size={20} className="text-green-400" />
                <span className="text-lg">CGPA: 8.5/10</span>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Key Courses</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Advanced Data Structures',
                    'Network Security',
                    'Cryptography',
                    'Web Application Security',
                    'Database Management Systems',
                    'Cloud Computing',
                    'Software Engineering',
                    'Ethical Hacking'
                  ].map((course) => (
                    <div key={course} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span className="text-gray-300">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}