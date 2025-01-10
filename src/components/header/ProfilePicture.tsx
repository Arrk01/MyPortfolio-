import React from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../ui/ThemeToggle';

export function ProfilePicture() {
  const { isDark } = React.useContext(ThemeContext);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="group relative"
    >
      {/* Hexagonal shape overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 clip-hex transform rotate-45 group-hover:rotate-[60deg] transition-transform duration-700" />
      
      {/* Outer glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] opacity-75 group-hover:opacity-100 blur transition-opacity duration-300" />
      
      {/* Glass container */}
      <div className="relative w-36 h-36 rounded-[2rem] overflow-hidden backdrop-blur-xl bg-white/10 dark:bg-gray-900/40 p-1 transition-all duration-500 group-hover:rounded-xl">
        {/* Animated borders */}
        <div className="absolute inset-0 rounded-[2rem] group-hover:rounded-xl bg-gradient-conic from-blue-500 via-purple-500 to-blue-500 animate-spin-slow opacity-0 group-hover:opacity-30 transition-all duration-500" />
        
        {/* Image container with clip path */}
        <div className="relative w-full h-full overflow-hidden rounded-[1.8rem] group-hover:rounded-lg transition-all duration-500">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQFVRuYYV-TP3Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1704993917243?e=1741824000&v=beta&t=UzkHM00b9Py62mwg7iksH2ptFdv_NC2YoLMB1Npi1Ts"
            alt="Profile"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Techy overlay pattern */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMjBMNDAgMjBNMjAgMjBMMjAgNDBNMjAgMjBMMCAyME0yMCAyMEwyMCAwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-30 mix-blend-overlay" />
        </div>
      </div>
      
      {/* Floating tech elements */}
      <div className="absolute -inset-4 pointer-events-none">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-400" />
        
        {/* Floating particles */}
        <div className="absolute top-0 left-1/4 w-1 h-1 bg-blue-500 rounded-full animate-ping opacity-75" />
        <div className="absolute bottom-0 right-1/4 w-1 h-1 bg-purple-500 rounded-full animate-ping opacity-75" />
        <div className="absolute top-1/2 right-0 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse opacity-75" />
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-[2rem] group-hover:rounded-xl bg-gradient-to-tr from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500" />
    </motion.div>
  );
}