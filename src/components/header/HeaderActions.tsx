import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ResumeButton } from '../resume/ResumeButton';

export function HeaderActions() {
  const scrollToContent = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="flex flex-wrap justify-center gap-4 mt-12"
    >
      <Button 
        icon={ArrowRight}
        onClick={scrollToContent}
        className="text-lg"
      >
        Explore My Work
      </Button>
      <ResumeButton />
      <Button 
        variant="outline"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="text-lg"
      >
        Get in Touch
      </Button>
    </motion.div>
  );
}