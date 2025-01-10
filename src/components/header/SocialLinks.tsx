import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/Arrk01',
    label: 'GitHub'
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/7abhishek-kumar/',
    label: 'LinkedIn'
  },
  {
    icon: Mail,
    href: 'mailto:itzabhi1114@gmail.com',
    label: 'Email'
  },
  {
    icon: Phone,
    href: 'tel:+7991109042',
    label: 'Phone'
  }
];

export function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="flex justify-center gap-6 mt-8"
    >
      {socialLinks.map((link) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <link.icon size={24} />
        </motion.a>
      ))}
    </motion.div>
  );
}