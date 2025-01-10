import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Abhishek Kumar</h3>
            <p className="text-gray-400">Software Developer & Cybersecurity Enthusiast</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Skills', 'Projects', 'Experience', 'Education', 'Achievements'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:itzabhi1114@gmail.com" 
                 className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={18} />
                <span>Email</span>
              </a>
              <a href="tel:+917991109042"
                 className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                <Phone size={18} />
                <span>Phone</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Social</h3>
            <div className="space-y-2">
              <a href="https://github.com/Arrk01" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/7abhishek-kumar/" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Abhishek Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}