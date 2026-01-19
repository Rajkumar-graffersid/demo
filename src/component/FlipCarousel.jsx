import React from "react";
import CustomerStoriesHeader from "./CustomerStoriesHeader";

const cardsData = [
  {
    id: 1,
    testimonial:
      "Magic Checkout has been a fantastic addition to our business. It's been great to see a significant decrease in COD orders and returns. This has not only boosted our revenue but also improved the overall shopping experience for our customers.",
    stats: [
      {
        value: "70%",
        label: "Prepaid order share increased",
      },
      {
        value: "36.36%",
        label: "Reduction in RTO rates",
      },
    ],
    companyName: "Nishay AG",
    role: "Co-founder, Jar",
    quote: "Solving for prepaid adoption & RTO",
    personName: "Nishay Agarwal",
    personImage:
      "https://framerusercontent.com/images/FaeyEKDfTOuVC7qWPuqYSSBIGI.png?scale-down-to=1024&width=1476&height=1464",
    // Add a featured image for the back of the card
    featuredImage:
      "https://framerusercontent.com/images/FaeyEKDfTOuVC7qWPuqYSSBIGI.png?scale-down-to=1024&width=1476&height=1464",
    backgroundColor: "linear-gradient(to bottom right, #4dd0e1, #00897b)",
  },
  {
    id: 2,
    testimonial:
      "Streamlining our checkout process was crucial for our luxury brand. The reduction in cart abandonment and improved customer experience has been remarkable. Our team can now focus on what matters most.",
    stats: [
      {
        value: "45%",
        label: "Cart abandonment reduced",
      },
      {
        value: "28%",
        label: "Conversion rate increase",
      },
    ],
    companyName: "Simran",
    quote: "Streamlining luxury checkout experience",
    role: "Manager, Nappa Dori",
    personName: "Simran",
    personImage:
      "https://framerusercontent.com/images/n24FMJzKmzwwcxfrLnkX31MkCo.png?width=437&height=507",
    featuredImage:
      "https://framerusercontent.com/images/n24FMJzKmzwwcxfrLnkX31MkCo.png?width=437&height=507",
    backgroundColor: "linear-gradient(to bottom right, #4fc3f7, #0288d1)",
  },
  {
    id: 3,
    testimonial:
      "The implementation was seamless and the impact was immediate. Our customers appreciate the smooth checkout experience, and we've seen a direct correlation with increased repeat purchases and customer loyalty.",
    stats: [
      {
        value: "52%",
        label: "Repeat purchase rate",
      },
      {
        value: "31%",
        label: "Average order value increase",
      },
    ],
    companyName: "Priya Enterprises",
    role: "CEO, Fashion Forward",
    quote: "Solving for prepaid adoption & RTO",
    personName: "Priya Singh",
    personImage:
      "https://framerusercontent.com/images/Gfn8Y0PfQQ9oSMUdOfTAc4J54.png?width=437&height=431",
    featuredImage:
      "https://framerusercontent.com/images/Gfn8Y0PfQQ9oSMUdOfTAc4J54.png?width=437&height=431",
    backgroundColor: "linear-gradient(to bottom right, #ba68c8, #7b1fa2)",
  },
];

// Flip Card Component
function FlipCard({ card }) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <div
      className="flip-card h-100"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{
        perspective: "1000px",
      }}
    >
      <div
        className="flip-card-inner h-100"
        style={{
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s",
          position: "relative",
        }}
      >
        {/* Front Side - Image with Overlay */}
        <div
          className="flip-card-front rounded-3 position-relative overflow-hidden"
          style={{
            backgroundImage: `url(${card.featuredImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: 2,
          }}
        >
          {/* Dark overlay for better text readability */}
          <div
            className="position-absolute w-100 h-100"
            style={{
              background:
                "linear-gradient(0deg, rgba(0 255 231 / 50%), rgba(0, 0, 0, 0.6))",
            }}
          ></div>

          {/* Content overlay */}
          <div className="position-relative h-100 p-5 d-flex flex-column justify-content-end text-white">
            <h3 className="h1 fw-semibold mb-3">{card.quote}</h3>
            <div className="d-flex align-items-center gap-3">
              {/* <img
                src={card.personImage || "/placeholder.svg"}
                alt={card.personName}
                className="rounded-circle border-light border-3"
                style={{ width: "60px", height: "60px", objectFit: "cover" }}
              /> */}
              <div>
                <p className="h6 fw-semibold">{card.quote} eknfkebk</p>
                <p className="h5 mb-1 fw-bold">{card.personName}</p>
                <p className="mb-0 opacity-75">{card.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side - Content */}
        <div
          className="flip-card-back bg-white p-5 rounded-3 d-flex flex-column justify-content-between"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            position: "absolute",
            width: "100%",
            height: "100%",
            transform: "rotateY(180deg)",
            top: 0,
            left: 0,
            zIndex: 2,
          }}
        >
          <p className="fs-6 text-dark mb-4">{card.testimonial}</p>

          <div className="d-flex gap-4 mb-4">
            {card.stats.map((stat, idx) => (
              <div key={idx}>
                <h3
                  className="text-primary fw-bold mb-1"
                  style={{ fontSize: "2rem" }}
                >
                  {stat.value}
                </h3>
                <p className="text-muted small">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="d-flex align-items-center gap-3 border-top pt-4">
            <img
              src={card.personImage || "/placeholder.svg"}
              alt={card.personName}
              className="rounded-circle"
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
            <div>
              <h5 className="mb-0 fw-bold">{card.personName}</h5>
              <p className="text-muted small mb-0">{card.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Carousel Component
export default function FlipCardCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cardsData.length);
    console.log(currentIndex);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);
  };

  return (
    <section
      className="py-5"
      style={{ background: "linear-gradient(135deg, #f1f5f9, #e2e8f0)" }}
    >
      <div className="container-lg">
        <div className="row align-items-start gap-5 gap-lg-0">
          {/* Left Section - Title */}
          <CustomerStoriesHeader />

          {/* Right Section - Carousel */}
          <div className="col-12 col-lg-8">
            <div className="carousel-wrapper overflow-hidden">
              <div
                className="carousel-track d-flex gap-4"
                style={{
                  transform: `translateX(-${currentIndex * 55}%)`,
                  transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {cardsData.map((card) => (
                  <div
                    key={card.id}
                    style={{
                      width: "60%",
                      flexShrink: 0,
                      height: "650px",
                    }}
                  >
                    <FlipCard card={card} />
                  </div>
                ))}
              </div>
            </div>

            <div className="d-flex justify-content-center align-items-center gap-3 mt-5 ">
              <button
                onClick={prevSlide}
                // className="btn btn-light rounded-circle p-2"
                aria-label="Previous slide"
                style={{
                  width: "60px",
                  height: "60px",
                  top: "-400px",
                  right: "300px",
                  position: "relative",
                }}
              >
                <img
                  alt=""
                  style={{ width: "60px", height: "60px" }}
                  src="https://framerusercontent.com/images/khwyAaEzgfA32Z8VuUfIRap4k.png?width=224&amp;height=224"
                />
              </button>

              <div className="d-flex gap-2">
                {cardsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className="btn p-0"
                    style={{
                      width: idx === currentIndex ? "32px" : "8px",
                      height: "8px",
                      backgroundColor:
                        idx === currentIndex ? "#374151" : "#9ca3af",
                      border: "none",
                      borderRadius: "4px",
                      transition: "all 0.3s ease",
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                // className="btn btn-light rounded-circle p-2"
                aria-label="Next slide"
                style={{
                  width: "60px",
                  height: "60px",
                  top: "-400px",
                  right: "-300px",
                  position: "relative",
                }}
              >
                <img
                  alt=""
                  style={{ width: "60px", height: "60px" }}
                  src="https://framerusercontent.com/images/3Le4UqxtFLhOFFgcBwwENlMQ.png?width=224&amp;height=224"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
