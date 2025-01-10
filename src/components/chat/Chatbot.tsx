import React from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatbotMessage } from './ChatbotMessage';
import { ChatbotInput } from './ChatbotInput';

const responses = {
  projects: "I've worked on several projects, including a Job Portal Application with JWT authentication and real-time notifications. Would you like to know more about any specific project?",
  skills: "My technical skills include Java, Spring Boot, MongoDB, and various cybersecurity tools. I'm particularly strong in full-stack development and security implementation.",
  experience: "I'm the founder of Aesthetic Sticks and have completed internships at Codsoft and Digital Anjali Studio. Each role has helped me develop different aspects of my technical and business skills.",
  education: "I studied at Jain University, specializing in Cybersecurity. I maintained a strong CGPA while focusing on practical applications of security concepts.",
  contact: "You can reach me through email, phone, or connect with me on LinkedIn and GitHub. Would you like any specific contact information?",
  default: "I'd be happy to tell you more about my experience, skills, or projects. What would you like to know?"
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([
    { text: "Hello! How can I assist you today? Feel free to ask me about my skills, projects, or anything else.", isBot: true }
  ]);
  const [input, setInput] = React.useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);

    // Simple response logic
    const lowercaseInput = input.toLowerCase();
    let response = responses.default;
    
    if (lowercaseInput.includes('project')) response = responses.projects;
    else if (lowercaseInput.includes('skill')) response = responses.skills;
    else if (lowercaseInput.includes('experience')) response = responses.experience;
    else if (lowercaseInput.includes('study') || lowercaseInput.includes('education')) response = responses.education;
    else if (lowercaseInput.includes('contact')) response = responses.contact;

    setTimeout(() => {
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 500);

    setInput('');
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 right-20 bg-blue-500 p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      >
        <MessageCircle className="text-white" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-96 bg-gray-900 rounded-lg shadow-xl border border-gray-700 overflow-hidden"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h3 className="text-white font-bold">Chat with Abhishek</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <ChatbotMessage key={index} {...message} />
              ))}
            </div>

            <div className="p-4 border-t border-gray-700">
              <ChatbotInput
                value={input}
                onChange={setInput}
                onSend={handleSend}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}