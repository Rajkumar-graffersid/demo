# Razorpay Landing Page

A modern, interactive landing page built for Razorpay showcasing payment solutions with smooth animations, carousel components, and engaging user experiences.

## Overview

This project is a feature-rich landing page that highlights Razorpay's magic in providing self-serve payment solutions. It includes multiple sections with smooth scrolling animations, testimonials, FAQs, and interactive UI components.

## Tech Stack

- **Framework/Library**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 4.1.9 + PostCSS
- **Animations**: Framer Motion 12.26.2
- **Smooth Scrolling**: Lenis 1.3.17
- **Icons**: Lucide React, React Icons, Bootstrap Icons

## Project Structure

```
src/
├── component/              # Reusable React components
│   ├── common/            # Common UI components (NavBar, MegaMenu, Clouds)
│   ├── checkoutshowcase/  # Checkout display component
│   ├── flipCarouselCards/ # Testimonial carousel cards
│   ├── growthLanding/     # Growth-focused landing section
│   ├── HeroSection/       # Hero banner section
│   ├── layeringScroll/    # Animated scroll sections
│   ├── newCloud/          # Cloud background components
│   ├── Scrollanimationsection/ # Animated scroll effects
│   ├── App.jsx            # Main application component
│   ├── CustomDropdown.jsx
│   ├── Faq.jsx           # FAQ accordion component
│   ├── Footer.jsx        # Footer component
│   ├── FlipCarousel.jsx  # Flip card carousel
│   ├── Razorpay_Magic.jsx # Magic features showcase
│   ├── StaticCard.jsx    # Static card display
│   ├── StickyNavbar.jsx  # Sticky navigation bar
│   ├── TestimonialFold.jsx # Customer testimonials
│   └── VideoCard.jsx     # Video showcase cards
├── assets/               # Static assets
├── App.css              # Global styles
├── index.css            # Base styles
└── main.jsx            # React entry point
```

## Key Features

- **Sticky Navigation**: Persistent navbar with scroll progress tracking
- **Smooth Scrolling**: Lenis-powered smooth scroll experience
- **Animated Sections**: Multiple scroll-triggered animations and transitions
- **Carousel Components**: Flip cards and testimonial carousels
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS
- **FAQ Section**: Accordion-based frequently asked questions
- **Video Showcase**: Interactive video card displays
- **Customer Testimonials**: Testimonial carousel with flip animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# or
yarn install
```

### Development

```bash
# Start the development server
npm run dev

# The app will be available at http://localhost:5173
```

### Build

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

### Linting

```bash
# Check code quality with ESLint
npm run lint
```

## Available Scripts

- `npm run dev` - Start development server with Vite
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Components Overview

### Navigation

- **StickyNavbar**: Fixed navigation bar with scroll tracking
- **AnimatedNavbar**: Navbar with animation effects based on scroll progress

### Hero & Landing

- **LayeringScroll**: Advanced layered scroll animation component
- **ScrollAnimationSection**: Animated scroll-triggered sections
- **HeroSection**: Hero banner with eye-catching design

### Content Display

- **FlipCardCarousel**: Carousel with flip card animations
- **TestimonialFold**: Customer testimonial display
- **StaticCard**: Static information cards
- **VideoCard**: Video showcase components
- **FAQSection**: Accordion-style FAQ component

### Utilities

- **CustomDropdown**: Custom dropdown component
- **Footer**: Footer section with links and information
- **Cloud Components**: Decorative cloud background elements

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for mobile and desktop

## Contributing

Feel free to contribute by submitting pull requests or reporting issues.

## License

This project is proprietary to Razorpay.

---

**Built with ❤️ using React and Vite**
