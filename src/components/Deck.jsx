import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Building2, ShoppingBag, Utensils, Ticket, Star } from 'lucide-react';
import './Deck.css';
import IntroSlide from './slides/IntroSlide';
import WhyThisPropertySlide from './slides/WhyThisPropertySlide';
import RetailSlide from './slides/RetailSlide';
import EntertainmentSlide from './slides/EntertainmentSlide';
import EventsSlide from './slides/EventsSlide';
import CtaSlide from './slides/CtaSlide';

const slides = [
  { id: 'intro', component: IntroSlide, title: 'Overview', icon: Building2 },
  { id: 'why', component: WhyThisPropertySlide, title: 'Scale & Reach', icon: Star },
  { id: 'retail', component: RetailSlide, title: 'Retail & Luxury', icon: ShoppingBag },
  { id: 'entertainment', component: EntertainmentSlide, title: 'Attractions', icon: Ticket },
  { id: 'events', component: EventsSlide, title: 'Events & Platform', icon: Utensils },
  { id: 'cta', component: CtaSlide, title: 'Take Action', icon: Building2 },
];

export default function Deck() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const navigateTo = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      navigateTo(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      navigateTo(currentSlide - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextSlide();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const CurrentComponent = slides[currentSlide].component;

  const slideVariants = {
    enter: (direction) => ({
      y: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        y: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4, delay: 0.1 }
      }
    },
    exit: (direction) => ({
      zIndex: 0,
      y: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.05,
      transition: {
        y: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    })
  };

  return (
    <div className="deck-container">
      <div className="slide-wrapper">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="slide-content"
          >
            <CurrentComponent />
          </motion.div>
        </AnimatePresence>
      </div>
      <nav className="deck-nav glass-panel">
        <div className="deck-nav-brand">
          <span className="brand-text">MOA</span>
          <span className="brand-sub">MALL OF AMERICA</span>
        </div>

        <div className="deck-nav-links">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`nav-btn ${currentSlide === index ? 'active' : ''}`}
              onClick={() => navigateTo(index)}
              title={slide.title}
            >
              <span className="nav-icon"><slide.icon size={20} /></span>
              <span className="nav-label">{slide.title}</span>
              {currentSlide === index && (
                <motion.div layoutId="nav-indicator" className="nav-indicator" />
              )}
            </button>
          ))}
        </div>

        <div className="deck-nav-controls">
          <button className="control-btn" onClick={prevSlide} disabled={currentSlide === 0}>
            <ChevronLeft size={24} />
          </button>
          <div className="progress-text">
            {currentSlide + 1} / {slides.length}
          </div>
          <button className="control-btn" onClick={nextSlide} disabled={currentSlide === slides.length - 1}>
            <ChevronRight size={24} />
          </button>
        </div>
      </nav>
    </div>
  );
}
