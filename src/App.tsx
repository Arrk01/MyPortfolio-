import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import { Contact } from './components/Contact';
import Chatbot from './components/chat/Chatbot';
import Footer from './components/Footer';
import { Navigation } from './components/Navigation';
import { ThemeToggle, ThemeProvider } from './components/ui/ThemeToggle';
import { BackgroundGrid } from './components/ui/BackgroundGrid';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <BackgroundGrid />
        <Navigation />
        <ThemeToggle />
        <Header />
        <main>
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Achievements />
          <Contact />
          <Chatbot />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;