import React from 'react';
import { GradientText } from './GradientText';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  gradient?: boolean;
  children: React.ReactNode;
}

export function Section({ id, title, subtitle, gradient = false, children }: SectionProps) {
  return (
    <section 
      id={id}
      className={`py-32 ${gradient ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gray-900'}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-white">
            {gradient ? <GradientText>{title}</GradientText> : title}
          </h2>
          {subtitle && (
            <p className="text-gray-400 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}