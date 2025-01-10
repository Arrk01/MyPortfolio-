import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { HeroContent } from './header/HeroContent';
import { SocialLinks } from './header/SocialLinks';
import { HeaderActions } from './header/HeaderActions';
import { BackgroundGrid } from './ui/BackgroundGrid';

export function Header() {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundGrid />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-32 text-center">
        <HeroContent />
        <SocialLinks />
        <HeaderActions />
      </div>
    </header>
  );
}

export default Header;