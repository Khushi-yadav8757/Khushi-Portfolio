import React, { useEffect, useRef } from 'react';

const CursorEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const mouse = { x: width / 2, y: height / 2, isActive: false };
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const accentColors = ['#3B82F6', '#8B5CF6', '#EC4899', '#06B6D4'];

    const hexToRgb = (hex) => {
      const value = hex.slice(1);
      return {
        r: parseInt(value.slice(0, 2), 16),
        g: parseInt(value.slice(2, 4), 16),
        b: parseInt(value.slice(4, 6), 16)
      };
    };

    const getAccentColor = () => {
      if (prefersReducedMotion) return '6, 182, 212';

      const progress = (performance.now() % 12000) / 12000 * accentColors.length;
      const index = Math.floor(progress) % accentColors.length;
      const nextIndex = (index + 1) % accentColors.length;
      const blend = progress - Math.floor(progress);
      const current = hexToRgb(accentColors[index]);
      const next = hexToRgb(accentColors[nextIndex]);

      return `${Math.round(current.r + (next.r - current.r) * blend)}, ${Math.round(current.g + (next.g - current.g) * blend)}, ${Math.round(current.b + (next.b - current.b) * blend)}`;
    };
    
    // Trail configuration
    const trailLength = 40;
    const trail = Array.from({ length: trailLength }, () => ({ x: width / 2, y: height / 2 }));
    const sparks = [];

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    let lastMouse = { x: null, y: null };

    const spawnSparks = (x, y, dx, dy) => {
      // Calculate length of movement
      const len = Math.sqrt(dx * dx + dy * dy);
      if (len === 0) return;

      // Normal vectors (perpendicular to movement direction)
      const nx1 = -dy / len;
      const ny1 = dx / len;
      
      const nx2 = dy / len;
      const ny2 = -dx / len;

      // Spawn a few sparks on the sides
      for (let i = 0; i < 2; i++) {
        // Choose randomly between left or right side
        const isLeft = Math.random() > 0.5;
        const baseNx = isLeft ? nx1 : nx2;
        const baseNy = isLeft ? ny1 : ny2;
        
        // Add a bit of randomness to the normal so they scatter a bit
        const speed = Math.random() * 3 + 2; 
        const randomSpreadX = (Math.random() - 0.5) * 1.5;
        const randomSpreadY = (Math.random() - 0.5) * 1.5;

        sparks.push({
          x: x,
          y: y,
          vx: (baseNx + randomSpreadX) * speed,
          vy: (baseNy + randomSpreadY) * speed,
          life: 1, // Opacity starts at 1
          size: Math.random() * 2 + 0.5 // Random size
        });
      }
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isActive = true;
      
      if (lastMouse.x !== null && lastMouse.y !== null) {
        const dx = mouse.x - lastMouse.x;
        const dy = mouse.y - lastMouse.y;
        if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
          spawnSparks(mouse.x, mouse.y, dx, dy);
        }
      }
      
      lastMouse.x = mouse.x;
      lastMouse.y = mouse.y;
    };

    const handleMouseOut = () => {
      mouse.isActive = false;
      lastMouse.x = null;
      lastMouse.y = null;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        mouse.isActive = true;
        
        if (lastMouse.x !== null && lastMouse.y !== null) {
          const dx = mouse.x - lastMouse.x;
          const dy = mouse.y - lastMouse.y;
          if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
            spawnSparks(mouse.x, mouse.y, dx, dy);
          }
        }
        
        lastMouse.x = mouse.x;
        lastMouse.y = mouse.y;
      }
    };

    const handleTouchEnd = () => {
      mouse.isActive = false;
      lastMouse.x = null;
      lastMouse.y = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('touchstart', handleTouchMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      if (mouse.isActive) {
        // Smoothly move the head of the snake to the mouse
        trail[0].x += (mouse.x - trail[0].x) * 0.5;
        trail[0].y += (mouse.y - trail[0].y) * 0.5;
      }

      // Move the rest of the snake body
      for (let i = 1; i < trailLength; i++) {
        trail[i].x += (trail[i - 1].x - trail[i].x) * 0.45;
        trail[i].y += (trail[i - 1].y - trail[i].y) * 0.45;
      }

      // Draw the sci-fi snake trail
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      
      // Start path for the trail
      for (let i = 1; i < trailLength; i++) {
        const progress = i / trailLength;
        const thickness = 3 * (1 - progress); // Made it much thinner
        const opacity = 1 - progress;
        
        ctx.beginPath();
        ctx.moveTo(trail[i - 1].x, trail[i - 1].y);
        ctx.lineTo(trail[i].x, trail[i].y);
        
        const accentColor = getAccentColor();
        ctx.strokeStyle = `rgba(${accentColor}, ${opacity})`;
        ctx.lineWidth = thickness;
        
        // Sci-fi Glow effect
        ctx.shadowBlur = 12;
        ctx.shadowColor = `rgba(${accentColor}, ${opacity})`;
        
        ctx.stroke();
      }

      // Render and update sparks (stars)
      for (let i = sparks.length - 1; i >= 0; i--) {
        const spark = sparks[i];
        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.life -= 0.02; // Fade out speed

        if (spark.life <= 0) {
          sparks.splice(i, 1);
        } else {
          ctx.beginPath();
          ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${spark.life})`;
          ctx.shadowBlur = 6;
          ctx.shadowColor = `rgba(${getAccentColor()}, ${spark.life})`;
          ctx.fill();
        }
      }

      // Add a sci-fi glowing ring that trails slightly behind
      if (trail[5]) {
        ctx.beginPath();
        ctx.arc(trail[5].x, trail[5].y, 12, 0, Math.PI * 2);
        const accentColor = getAccentColor();
        ctx.strokeStyle = `rgba(${accentColor}, 0.6)`;
        ctx.lineWidth = 1;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${accentColor}, 0.6)`;
        ctx.stroke();
      }

      // Add a bright core dot at the cursor head
      if (mouse.isActive) {
        ctx.beginPath();
        ctx.arc(trail[0].x, trail[0].y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, 0.9)`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${getAccentColor()}, 1)`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('touchstart', handleTouchMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-10 pointer-events-none"
    />
  );
};

export default CursorEffect;
