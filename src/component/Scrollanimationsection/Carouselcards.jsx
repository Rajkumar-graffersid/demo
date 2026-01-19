import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./CarouselCards.css";

const CarouselCards = ({ cards, currentCard, setCurrentCard }) => {
  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const getIcon = (iconName) => {
    const icons = {
      login: (
        <svg viewBox="0 0 18 20" className="card-icon">
          <path
            d="M 2 13 L 4 13 L 4 18 L 16 18 L 16 2 L 4 2 L 4 7 L 2 7 L 2 1 C 2 0.735 2.105 0.48 2.293 0.293 C 2.48 0.105 2.735 0 3 0 L 17 0 C 17.265 0 17.52 0.105 17.707 0.293 C 17.895 0.48 18 0.735 18 1 L 18 19 C 18 19.265 17.895 19.52 17.707 19.707 C 17.52 19.895 17.265 20 17 20 L 3 20 C 2.735 20 2.48 19.895 2.293 19.707 C 2.105 19.52 2 19.265 2 19 Z M 8 9 L 8 6 L 13 10 L 8 14 L 8 11 L 0 11 L 0 9 Z"
            fill="rgb(96, 169, 169)"
          />
        </svg>
      ),
      exit: (
        <svg viewBox="0 0 18 20" className="card-icon">
          <path
            d="M 2 13 L 4 13 L 4 18 L 16 18 L 16 2 L 4 2 L 4 7 L 2 7 L 2 1 C 2 0.735 2.105 0.48 2.293 0.293 C 2.48 0.105 2.735 0 3 0 L 17 0 C 17.265 0 17.52 0.105 17.707 0.293 C 17.895 0.48 18 0.735 18 1 L 18 19 C 18 19.265 17.895 19.52 17.707 19.707 C 17.52 19.895 17.265 20 17 20 L 3 20 C 2.735 20 2.48 19.895 2.293 19.707 C 2.105 19.52 2 19.265 2 19 Z M 8 9 L 8 6 L 13 10 L 8 14 L 8 11 L 0 11 L 0 9 Z"
            fill="rgb(96, 169, 169)"
          />
        </svg>
      ),
      address: (
        <svg viewBox="0 0 18 14" className="card-icon">
          <path
            d="M 16.494 0.761 L 2.32 0.761 C 1.537 0.761 0.902 1.396 0.902 2.179 L 0.902 12.574 C 0.902 13.356 1.537 13.991 2.32 13.991 L 16.494 13.991 C 17.277 13.991 17.912 13.356 17.912 12.574 L 17.912 2.179 C 17.912 1.396 17.277 0.761 16.494 0.761 Z M 16.494 12.574 L 2.32 12.574 L 2.32 2.179 L 16.494 2.179 Z"
            fill="rgb(96, 169, 169)"
          />
        </svg>
      ),
      truck: (
        <svg viewBox="0 0 18 18" className="card-icon">
          <path
            d="M 7.262 13.119 C 7.178 13.71 6.883 14.251 6.432 14.643 C 5.981 15.034 5.404 15.25 4.806 15.25 C 4.209 15.25 3.632 15.034 3.181 14.643 C 2.73 14.251 2.435 13.71 2.351 13.119 L 1.617 13.119 L 1.617 4.614 C 1.617 4.426 1.692 4.246 1.825 4.113 C 1.958 3.98 2.138 3.906 2.326 3.906 L 12.248 3.906 C 12.436 3.906 12.616 3.98 12.749 4.113 C 12.882 4.246 12.957 4.426 12.957 4.614 L 12.957 6.032 L 15.083 6.032 L 17.209 8.906 L 17.209 13.119 L 15.767 13.119 C 15.683 13.71 15.388 14.251 14.937 14.643 C 14.486 15.034 13.908 15.25 13.311 15.25 C 12.714 15.25 12.137 15.034 11.686 14.643 C 11.235 14.251 10.94 13.71 10.855 13.119 Z"
            fill="rgb(96, 169, 169)"
          />
        </svg>
      ),
      methods: (
        <svg viewBox="0 0 25 24" className="card-icon">
          <path
            d="M12.5 2L2.5 7v10l10 5 10-5V7L12.5 2zm0 2.18L20.32 8 12.5 11.82 4.68 8 12.5 4.18zM4.5 10.5l7.5 3.75v7.5l-7.5-3.75v-7.5zm15 0v7.5l-7.5 3.75v-7.5l7.5-3.75z"
            fill="rgb(96, 169, 169)"
          />
        </svg>
      ),
      payments: (
        <svg viewBox="0 0 24 24" className="card-icon">
          <path
            d="M 19 14 L 19 6 C 19 4.9 18.1 4 17 4 L 3 4 C 1.9 4 1 4.9 1 6 L 1 14 C 1 15.1 1.9 16 3 16 L 17 16 C 18.1 16 19 15.1 19 14 Z M 17 14 L 3 14 L 3 6 L 17 6 Z M 10 7 C 8.34 7 7 8.34 7 10 C 7 11.66 8.34 13 10 13 C 11.66 13 13 11.66 13 10 C 13 8.34 11.66 7 10 7 Z"
            fill="rgb(96, 169, 169)"
          />
        </svg>
      ),
      fingerprint: (
        <svg viewBox="0 0 19 20" className="card-icon">
          <path
            d="M 4.465 15.201 C 5.417 16.72 5.417 17.853 5.417 19.167 L 7.25 19.167 C 7.25 17.772 7.25 16.193 6.019 14.227 Z M 14.129 2.105 C 11.812 0.751 5.921 -0.151 2.924 2.946 C -0.163 6.137 0.863 11.262 2.925 13.389 L 4.821 12.644 C 2.719 10.544 1.943 6.597 4.241 4.222 C 6.556 1.829 11.637 2.775 13.204 3.69 C 15.67 5.128 16.959 7.639 16.97 7.662 L 18.61 6.841 C 18.551 6.717 17.081 3.826 14.129 2.105 Z"
            fill="rgb(96, 169, 169)"
          />
        </svg>
      ),
      click: (
        <svg viewBox="0 0 24 23" className="card-icon">
          <path
            d="M 11.692 16.937 C 10.274 16.87 8.936 16.259 7.956 15.231 C 6.977 14.204 6.431 12.838 6.431 11.418 C 6.431 8.368 8.91 5.89 11.96 5.89 C 14.926 5.89 17.34 8.221 17.478 11.151 L 15.544 10.57 C 15.393 9.932 15.075 9.345 14.621 8.87 Z M 21.173 11.418 C 21.173 11.694 21.164 11.971 21.136 12.247 L 19.321 11.704 C 19.33 11.611 19.33 11.51 19.33 11.418 C 19.33 7.346 16.032 4.047 11.96 4.047 C 7.887 4.047 4.589 7.346 4.589 11.418 C 4.589 15.49 7.887 18.789 11.96 18.789 Z"
            fill="rgb(96, 169, 169)"
          />
        </svg>
      ),
    };
    return icons[iconName] || null;
  };

  return (
    <div className="carousel-1-cards-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCard}
          className="carousel-1-card"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
        >
          {/* Card Background SVG */}
          <svg
            className="card-bg"
            viewBox="0 0 479 258"
            preserveAspectRatio="none"
          >
            <path
              d="M 26 0 L 453 0 C 467.359 0 479 11.641 479 26 L 479 232 C 479 246.359 467.359 258 453 258 L 26 258 C 11.641 258 0 246.359 0 232 L 0 26 C 0 11.641 11.641 0 26 0 Z"
              fill="rgb(255, 255, 255)"
            />
          </svg>

          {/* Card Content */}
          <div className="card-content">
            <h3 className="card-title">{cards[currentCard].title}</h3>

            <div className="card-features">
              {cards[currentCard].features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="card-feature"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="feature-icon">{getIcon(feature.icon)}</div>
                  <p className="feature-text">{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="carousel-1-navigation">
        <button
          className="nav-button nav-prev"
          onClick={prevCard}
          aria-label="Previous card"
        >
          {/* Left Arrow SVG */}
          {/* <svg viewBox="0 0 52 258" className="arrow-svg">
            <path
              d="M 26 0 C 11.641 0 0 11.641 0 26 L 0 232 C 0 246.359 11.641 258 26 258 C 40.359 258 52 246.359 52 232 L 52 26 C 52 11.641 40.359 0 26 0 Z"
              fill="rgb(0, 0, 0)"
              opacity="0.05"
            />
          </svg> */}
          <ChevronLeft className="arrow-icon" />
        </button>

        <button
          className="nav-button nav-next"
          onClick={nextCard}
          aria-label="Next card"
        >
          {/* Right Arrow SVG */}
          {/* <svg viewBox="0 0 52 258" className="arrow-svg">
            <path
              d="M 26 0 C 11.641 0 0 11.641 0 26 L 0 232 C 0 246.359 11.641 258 26 258 C 40.359 258 52 246.359 52 232 L 52 26 C 52 11.641 40.359 0 26 0 Z"
              fill="rgb(0, 0, 0)"
              opacity="0.05"
            />
          </svg> */}
          <ChevronRight className="arrow-icon" />
        </button>
      </div>
    </div>
  );
};

export default CarouselCards;
