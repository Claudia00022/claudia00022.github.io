import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollStopSections= () => {
  useEffect(() => {
    // Pinning logic for each section
    gsap.utils.toArray('.section').forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top', // Start pinning when the section hits the top
        end: '+=200%', // How long to pin the section (200% of the viewport height)
        pin: true, // Pin the section
        pinSpacing: true, // Add spacing after the pinned section
      });
    });
  }, []);

  return (
    <div>
      <div className="section" style={sectionStyle({ backgroundColor: '#ffadad' })}>
        Section 1
      </div>
      <div className="section" style={sectionStyle({ backgroundColor: '#ffd6a5' })}>
        Section 2
      </div>
      <div className="section" style={sectionStyle({ backgroundColor: '#fdffb6' })}>
        Section 3
      </div>
    </div>
  );
};

// Inline styles for simplicity
const sectionStyle = ({ backgroundColor }) => ({
  height: '100vh',
  backgroundColor,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '3rem',
  fontWeight: 'bold',
});



export default ScrollStopSections;
