import type { RefObject } from 'react';

const generateRandomPosition = (): { x: string; y: string } => {
  const randomX = Math.floor(Math.random() * 100) + 1;
  const randomY = Math.floor(Math.random() * 10) + 1;
  return { x: `${randomX}%`, y: `${randomY}%` };
};

export function AnimateNoise(ref: RefObject<HTMLDivElement | null>): Animation | null {
  const { current: el } = ref;

  if (!el) {
    return null;
  }

  const frames = [];
  const frameCount = 30;

  for (let i = 0; i < frameCount; i++) {
    const position = generateRandomPosition();
    frames.push({
      backgroundPosition: `${position.x} ${position.y}`,
    });
  }

  const animation = el.animate(frames, {
    duration: frameCount * frameCount,
    iterations: Infinity,
    easing: 'steps(30, jump-none)',
  });

  return animation;
}
