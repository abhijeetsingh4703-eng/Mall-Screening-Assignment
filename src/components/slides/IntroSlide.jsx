import React from 'react';
import { motion } from 'framer-motion';

export default function IntroSlide() {
  return (
    <div className="slide intro-slide">
      <div className="bg-video-wrapper">
        <img 
          className="bg-image"
          src="https://www.mallofamerica.com/sites/default/files/2017-10/hours-hero-first_card.jpg" 
          alt="Mall of America"
        />
        <div className="overlay-dark"></div>
      </div>
      
      <div className="content-container flex-center">
        <motion.div 
          className="hero-text glass-panel"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            THE CENTER OF IT ALL
          </motion.h1>
          <motion.p
            className="subtitle text-accent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            MALL OF AMERICA
          </motion.p>
          <motion.div 
            className="divider"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 2 }}
          ></motion.div>
          <motion.p
            className="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
          >
            40 million annual visitors. 5.6 million square feet. 
            An unparalleled destination for retail, dining, and entertainment.
          </motion.p>
        </motion.div>
      </div>

      <style>{`
        .intro-slide {
          padding: 0;
          justify-content: center;
          align-items: center;
        }
        .bg-video-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
        }
        .bg-video {
          width: 100vw;
          height: 56.25vw;
          min-height: 100vh;
          min-width: 177.77vh;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(1.15);
          pointer-events: none;
        }
        .bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: slowZoom 20s infinite alternate linear;
        }
        .overlay-dark {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%);
        }
        .content-container {
          width: 100%;
          height: 100%;
          padding: var(--spacing-2xl);
          justify-content: flex-start;
          align-items: center;
          display: flex;
        }
        .hero-text {
          max-width: 600px;
          padding: var(--spacing-xl);
          border-radius: 20px;
        }
        .hero-text h1 {
          font-size: 4rem;
          margin-bottom: var(--spacing-sm);
          text-transform: uppercase;
        }
        .subtitle {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          margin-bottom: var(--spacing-lg);
        }
        .divider {
          width: 100px;
          height: 4px;
          background-color: var(--color-accent);
          margin-bottom: var(--spacing-lg);
          transform-origin: left;
        }
        .description {
          font-size: 1.2rem;
          line-height: 1.6;
          color: var(--color-text-muted);
        }
        @keyframes slowZoom {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
}
