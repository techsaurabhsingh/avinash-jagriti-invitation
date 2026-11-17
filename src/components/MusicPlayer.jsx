import { useEffect, useRef } from 'react';

export default function MusicPlayer({ onReady }) {
  const audio = useRef(null);

  useEffect(() => {
    const startMusic = () => {
      const player = audio.current;
      if (!player || !player.paused) return;

      // Start decoding during the envelope tap (required by mobile browsers),
      // then fade in after the short envelope swish has finished.
      player.volume = 0;
      const attempt = player.play();
      attempt?.then(() => {
        window.setTimeout(() => {
          const startedAt = performance.now();
          const fadeIn = now => {
            player.volume = Math.min(.62, ((now - startedAt) / 700) * .62);
            if (player.volume < .62 && !player.paused) requestAnimationFrame(fadeIn);
          };
          requestAnimationFrame(fadeIn);
        }, 420);
      }).catch(() => {});
    };
    onReady?.(startMusic);
  }, []);

  return <audio ref={audio} src="/music/romantic-piano.wav" loop preload="auto" aria-label="Engagement invitation background music" />;
}
