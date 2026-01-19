export default function CarouselControls({ total, active, onDotClick }) {
  return (
    <div className="carousel-dots">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          className={`carousel-dot ${i === active ? "active" : ""}`}
          onClick={() => onDotClick(i)}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
}
