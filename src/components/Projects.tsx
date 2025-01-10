import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Job Portal Application',
    description: 'A full-stack job portal with advanced filtering, real-time notifications, and secure authentication.',
    image: 'https://raw.githubusercontent.com/Arrk01/JobPortal2/main/photo22.png',
    tech: ['React', 'Redux', 'Spring Boot', 'MongoDB', 'JWT', 'Tailwind CSS'],
    metrics: [
        '🔒 Secure Authentication: JWT-based login and signup with social login options.',
        '👤 User Profiles: Manage resumes, track applications, and personalize profiles.',
        '📢 Job Listings: Post, view, and apply to jobs with detailed filters.',
        '🔔 Real-Time Notifications: Stay updated on job applications and alerts.',
        '🔍 Advanced Search: Filter jobs by title, location, salary, and more.',
        '📄 Resume Management: Upload and attach resumes for applications.',
        '👨‍💼 Employer Dashboard: Manage postings, review applicants, and streamline hiring.'
    ],
    github: 'https://github.com/Arrk01/JobPortal2',
    live: 'https://jobportal-frontend-sog4.onrender.com/'
},

{
  title: 'URL Shortener',
  description: 'A lightweight application for generating, managing, and tracking shortened URLs with advanced analytics and customizable features.',
  image: 'https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554_1280.png',
  tech: ['React', 'Redux', 'Spring Boot', 'MongoDB', 'JWT', 'Tailwind CSS'],
  metrics: [
      '🔒 Secure URL Shortening: Generate unique and secure shortened URLs.',
      '📊 Analytics Dashboard: Track click counts, geographic data, and other performance metrics.',
      '🛠️ Custom Shortened URLs: Customize the alias for shortened links.',
      '🔍 Search and Filter: Manage URLs with advanced search and filtering.',
      '📆 Link Expiration: Set expiration dates for temporary links.',
      '🌐 Mobile-Friendly Interface: Fully responsive design for optimal use on any device.'
  ],
  github: 'https://img.freepik.com/free-vector/coming-soon-text-abstract-sunrise-dark-background-with-motion-effect_157027-1073.jpg?t=st=1736541241~exp=1736544841~hmac=d536560e14f51b523a011917d814a813e9e0efc9a2f04c6bb57e7f30c3aca120&w=2000',
  live: 'https://img.freepik.com/free-vector/coming-soon-text-abstract-sunrise-dark-background-with-motion-effect_157027-1073.jpg?t=st=1736541241~exp=1736544841~hmac=d536560e14f51b523a011917d814a813e9e0efc9a2f04c6bb57e7f30c3aca120&w=2000'
}

];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-900 text-white" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing my best work in software development and cybersecurity
          </p>
        </motion.div>
        
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative group-even:order-2">
                  <div className="relative rounded-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60" />
                  </div>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
                </div>
                
                <div className="space-y-6 group-even:order-1">
                  <h3 className="text-2xl font-bold text-blue-400">{project.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-blue-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <ul className="space-y-2 text-gray-300">
                    {project.metrics.map((metric) => (
                      <li key={metric} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-6 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}