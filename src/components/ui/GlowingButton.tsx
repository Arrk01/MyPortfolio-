import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface GlowingButtonProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
}

export function GlowingButton({ children, icon: Icon, onClick, className = '' }: GlowingButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        relative group px-6 py-3 rounded-lg font-medium
        bg-gradient-to-r from-blue-500/10 to-purple-500/10
        hover:from-blue-500/20 hover:to-purple-500/20
        border border-blue-500/20 hover:border-blue-500/40
        transition-all duration-300
        ${className}
      `}
    >
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity" />
      <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity" />
      <div className="relative flex items-center gap-2">
        {Icon && <Icon className="w-5 h-5" />}
        {children}
      </div>
    </motion.button>
  );
}