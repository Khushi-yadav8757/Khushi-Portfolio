import React from 'react';

const particleColors = ['blue', 'violet', 'cyan', 'white'];
const particles = Array.from({ length: 42 }, (_, index) => ({
  color: particleColors[index % particleColors.length],
  left: `${(index * 37) % 100}%`,
  top: `${(index * 61) % 100}%`,
  size: `${2 + (index % 3)}px`,
  duration: `${18 + (index % 9) * 2}s`,
  delay: `${(index % 12) * -1.5}s`,
  driftX: `${((index % 5) - 2) * 18}px`,
  driftY: `${((index % 7) - 3) * 16}px`
}));

const ParticleBackground = () => (
  <div className="particle-background" aria-hidden="true">
    {particles.map((particle, index) => (
      <span
        key={index}
        className={`particle particle-${particle.color}`}
        style={{
          left: particle.left,
          top: particle.top,
          width: particle.size,
          height: particle.size,
          animationDuration: particle.duration,
          animationDelay: particle.delay,
          '--drift-x': particle.driftX,
          '--drift-y': particle.driftY
        }}
      />
    ))}
  </div>
);

export default ParticleBackground;
