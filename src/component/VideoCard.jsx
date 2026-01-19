import { useState } from "react";
import "./VideoCard.css";

export default function VideoCard() {
  const [playing, setPlaying] = useState(false);

  return (
    <article className="video-card" onClick={() => setPlaying(true)}>
      {!playing && (
        <>
          <img
            className="video-thumbnail"
            src="https://i.ytimg.com/vi_webp/Cr9IdCU5o8Q/sddefault.webp"
            alt="Video thumbnail"
          />

          <button className="play-button" aria-label="Play video">
            <svg viewBox="0 0 68 48">
              <path
                d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74 0.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
                fill="rgba(33,33,33,0.8)"
              />
              <path d="M45 24L27 14v20z" fill="#fff" />
            </svg>
          </button>
        </>
      )}

      {playing && (
        <iframe
          className="video-iframe"
          src="https://www.youtube.com/embed/Cr9IdCU5o8Q?autoplay=1&rel=0&modestbranding=1&playsinline=1"
          title="YouTube Video"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      )}
    </article>
  );
}
