/**
 * Simple confetti animation effect
 */
const confetti = (container: HTMLElement) => {
  const colors = ['#4F46E5', '#10B981', '#F59E0B', '#EC4899', '#6366F1'];
  const particleCount = 100;
  
  // Create and append particles
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    
    // Random properties
    const size = Math.floor(Math.random() * 8) + 4; // 4-12px
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100; // 0-100%
    const animDuration = (Math.random() * 2) + 1; // 1-3s
    const animDelay = Math.random() * 0.5; // 0-0.5s
    
    // Apply styles
    particle.style.position = 'absolute';
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = color;
    particle.style.borderRadius = '50%';
    particle.style.left = `${left}%`;
    particle.style.top = '0%';
    particle.style.opacity = '1';
    particle.style.pointerEvents = 'none';
    
    // Animation
    particle.style.animation = `
      fall ${animDuration}s ease-in ${animDelay}s forwards,
      sway ${animDuration * 0.5}s ease-in-out ${animDelay}s alternate infinite
    `;
    
    container.appendChild(particle);
    
    // Remove after animation completes
    setTimeout(() => {
      if (container.contains(particle)) {
        container.removeChild(particle);
      }
    }, (animDuration + animDelay + 0.5) * 1000);
  }
};

export default confetti;