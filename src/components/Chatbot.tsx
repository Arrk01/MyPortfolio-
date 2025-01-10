import React, { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

const responses = {
  projects: "I've worked on several projects, including a Job Portal Application with JWT authentication and real-time notifications. Would you like to know more about any specific project?",
  skills: "My technical skills include Java, Spring Boot, MongoDB, and various cybersecurity tools. I'm particularly strong in full-stack development and security implementation.",
  experience: "I'm the founder of Aesthetic Sticks and have completed internships at Codsoft and Digital Anjali Studio. Each role has helped me develop different aspects of my technical and business skills.",
  education: "I studied at Jain University, specializing in Cybersecurity. I maintained a strong CGPA while focusing on practical applications of security concepts.",
  contact: "You can reach me through email, phone, or connect with me on LinkedIn and GitHub. Would you like any specific contact information?",
  default: "I'd be happy to tell you more about my experience, skills, or projects. What would you like to know?"
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today? Feel free to ask me about my skills, projects, or anything else.", isBot: true }
  ]);
  const [input, setInput] = useState('');

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
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-500 p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      >
        <MessageCircle className="text-white" />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 bg-gray-900 rounded-lg shadow-xl border border-gray-700">
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <h3 className="text-white font-bold">Chat with Abhishek</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <X size={20} />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  message.isBot 
                    ? 'bg-gray-800 text-white' 
                    : 'bg-blue-500 text-white'
                }`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSend}
                className="bg-blue-500 p-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Send size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}