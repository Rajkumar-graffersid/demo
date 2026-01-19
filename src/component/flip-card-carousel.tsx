"use client";

import { useState } from "react";
import { FlipCard } from "./flip-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    personName: "Nishay Agarwal",
    personImage: "/professional-man-profile.jpg",
    backgroundColor: "bg-gradient-to-br from-teal-400 to-teal-600",
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
    role: "Manager, Nappa Dori",
    personName: "Simran",
    personImage: "/professional-woman-profile.jpg",
    backgroundColor: "bg-gradient-to-br from-blue-400 to-blue-600",
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
    personName: "Priya Singh",
    personImage: "/professional-woman-ceo.jpg",
    backgroundColor: "bg-gradient-to-br from-purple-400 to-purple-600",
  },
];

export function FlipCardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cardsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 2; i++) {
      const index = (currentIndex + i) % cardsData.length;
      cards.push(cardsData[index]);
    }
    return cards;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Section - Title and Description */}
          <CustomerStoriesHeader />

          {/* Right Section - Carousel with 2 visible cards */}
          <div className="w-full lg:w-2/3">
            <div className="relative overflow-hidden">
              {/* Cards wrapper with slide animation */}
              <div
                className="flex gap-6 transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * 55}%)`,
                }}
              >
                {cardsData.map((card) => (
                  <div key={card.id} className="w-1/2 flex-shrink-0">
                    <FlipCard
                      testimonial={card.testimonial}
                      stats={card.stats}
                      companyName={card.companyName}
                      role={card.role}
                      personName={card.personName}
                      personImage={card.personImage}
                      backgroundColor={card.backgroundColor}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center gap-4 mt-12">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full hover:bg-gray-300 transition-colors bg-gray-200"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>

              {/* Indicator Dots */}
              <div className="flex gap-2">
                {cardsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentIndex
                        ? "w-8 bg-gray-700"
                        : "w-2 bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 rounded-full hover:bg-gray-300 transition-colors bg-gray-200"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
