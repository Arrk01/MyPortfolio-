import React from 'react';
import { motion } from 'framer-motion';

interface ParallaxTextProps {
  children: React.ReactNode;
  className?: string;
}

export function ParallaxText({ children, className = '' }: ParallaxTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}