import { useEffect, useRef } from 'react';

export default function MusicPlayer() {
  const audio = useRef(null);

  useEffect(() => {
    const startMusic = () => {
      const player = audio.current;
      if (player?.paused) player.play().catch(() => {});
    };

    // Try autoplay on load; if the browser blocks it, start on the guest's first gesture.
    startMusic();
    window.addEventListener('pointerdown', startMusic, { once: true, capture: true });
    window.addEventListener('keydown', startMusic, { once: true, capture: true });
    return () => {
      window.removeEventListener('pointerdown', startMusic, true);
      window.removeEventListener('keydown', startMusic, true);
    };
  }, []);

  return <audio ref={audio} src="/music/romantic-piano.wav" autoPlay loop preload="auto" aria-label="Engagement invitation background music" />;
}
