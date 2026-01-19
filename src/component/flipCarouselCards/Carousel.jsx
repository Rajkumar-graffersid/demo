import { useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import CarouselControls from "./CarouselControls";
import "./carousel.css";

const testimonials = [
  {
    title: "Solving for prepaid adoption & RTO",
    name: "Nischay AG",
    role: "Co-founder, Jar",
    image: "/images/jar.png",
    quote:
      "Magic Checkout has been a fantastic addition to our business. It’s been great to see a significant decrease in COD orders and returns.",
  },
  {
    title: "Streamlining luxury checkout experience",
    name: "Simran",
    role: "Manager, Nappa Dori",
    image: "/images/nappa.png",
    quote:
      "Thanks to Razorpay, our payment success improved, boosting order conversion by 7.3%.",
  },
  {
    title: "Checkout optimization & reducing drop-offs",
    name: "Ruchika Gupta",
    role: "Co-Founder, Uberlyfe",
    image: "/images/uberlyfe.png",
    quote:
      "Magic Checkout increased our order conversion rate by 14%. Truly lives up to its name.",
  },
];

export default function Carousel() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const scrollTo = (index) => {
    const card = trackRef.current.children[index];
    card.scrollIntoView({ behavior: "smooth", inline: "center" });
    setActive(index);
  };

  return (
    <div className="carousel-container">
      <ul ref={trackRef} className="carousel-track">
        {testimonials.map((item, i) => (
          <li key={i}>
            <TestimonialCard {...item} />
          </li>
        ))}
      </ul>

      <CarouselControls
        total={testimonials.length}
        active={active}
        onDotClick={scrollTo}
      />
    </div>
  );
}
