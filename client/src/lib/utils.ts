import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createParticle() {
  const particle = document.createElement('div');
  particle.style.cssText = `
    position: fixed;
    width: 2px;
    height: 2px;
    background: hsl(${Math.random() > 0.5 ? '180 100% 50%' : '300 100% 50%'});
    pointer-events: none;
    z-index: 0;
    border-radius: 50%;
    left: ${Math.random() * 100}vw;
    top: 100vh;
    opacity: 0.5;
  `;
  
  document.body.appendChild(particle);
  
  const animation = particle.animate([
    { transform: 'translateY(0px)', opacity: 0.5 },
    { transform: 'translateY(-100vh)', opacity: 0 }
  ], {
    duration: Math.random() * 3000 + 2000,
    easing: 'linear'
  });
  
  animation.onfinish = () => particle.remove();
}
