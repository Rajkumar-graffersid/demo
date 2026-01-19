import { useState } from "react";

export default function TestimonialCard({ title, name, role, image, quote }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`testimonial-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      {/* Front */}
      <div className="card-face card-front">
        <div className="card-image">
          <img src={image} alt={name} />
        </div>

        <div className="card-overlay">
          <h2>{title}</h2>
          <p>{name}</p>
          <p className="role">{role}</p>
        </div>
      </div>

      {/* Back */}
      <div className="card-face card-back">
        <div className="testimonial-content">
          <h4>{quote}</h4>
          <p className="testimonial-author">{name}</p>
          <p className="testimonial-role">{role}</p>
        </div>
      </div>
    </div>
  );
}
