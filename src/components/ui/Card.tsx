import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div 
      className={`
        bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6
        ${hover ? 'hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}