import React from 'react';
import { FileDown } from 'lucide-react';
import { GlowingButton } from '../ui/GlowingButton';

export function ResumeButton() {
  const handleDownload = () => {
    // Replace with actual resume URL
    const resumeUrl = 'https://drive.google.com/file/d/1AHfT4MPDEiqLeioOorfEcYEw4CK90Hdj/view?usp=sharing';
    window.open(resumeUrl, '_blank');
  };

  return (
    <GlowingButton
      icon={FileDown}
      onClick={handleDownload}
      className="text-lg"
    >
      Download Resume
    </GlowingButton>
  );
}