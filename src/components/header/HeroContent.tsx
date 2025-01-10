import React from 'react';
import { motion } from 'framer-motion';
import { GradientText } from '../ui/GradientText';
import { ParallaxText } from '../ui/ParallaxText';
import { ProfilePicture } from './ProfilePicture';

export function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="flex flex-col items-center gap-6">
        <ProfilePicture />
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I'm <GradientText>Abhishek Kumar</GradientText>
        </motion.h1>
      </div>
      
      <ParallaxText className="text-xl md:text-2xl text-gray-400">
        Software Developer & Cybersecurity Enthusiast
      </ParallaxText>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-2xl mx-auto text-gray-400"
      >
        Passionate about creating secure, scalable applications and exploring the frontiers of technology
      </motion.p>
    </motion.div>
  );
}