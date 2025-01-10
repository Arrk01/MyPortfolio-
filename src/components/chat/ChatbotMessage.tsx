import React from 'react';
import { motion } from 'framer-motion';

interface ChatbotMessageProps {
  text: string;
  isBot: boolean;
}

export function ChatbotMessage({ text, isBot }: ChatbotMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}
    >
      <div
        className={`max-w-[80%] p-3 rounded-lg ${
          isBot 
            ? 'bg-gray-800 text-white' 
            : 'bg-blue-500 text-white'
        }`}
      >
        {text}
      </div>
    </motion.div>
  );
}