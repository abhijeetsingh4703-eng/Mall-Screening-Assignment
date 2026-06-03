import React from 'react';
import { motion } from 'framer-motion';

export default function CtaSlide() {
  return (
    <div className="slide cta-slide">
      <div className="bg-video-wrapper">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="bg-video"
          src="https://assets.mixkit.co/videos/preview/mixkit-escalator-in-a-modern-shopping-mall-4418-large.mp4" 
        />
        <div className="overlay-dark"></div>
      </div>
      
      <div className="cta-content flex-center">
        <motion.div 
          className="cta-card glass-panel"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="cta-heading font-heading">READY TO BE PART OF MALL OF AMERICA?</h2>
          <p className="cta-subheading text-muted">Join the world's most iconic retail and entertainment destination.</p>
          
          <div className="cta-buttons">
            <motion.button 
              className="cta-btn primary-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Lease Space
            </motion.button>
            <motion.button 
              className="cta-btn secondary-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Become A Sponsor
            </motion.button>
            <motion.button 
              className="cta-btn secondary-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book An Event
            </motion.button>
            <motion.button 
              className="cta-btn secondary-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule A Strategy Call
            </motion.button>
          </div>
        </motion.div>
      </div>

      <style>{`
        .cta-slide {
          padding: 0;
          justify-content: center;
          align-items: center;
        }
        .cta-content {
          position: relative;
          z-index: 10;
          width: 100%;
          height: 100%;
          padding: var(--spacing-2xl);
          display: flex;
        }
        .cta-card {
          padding: var(--spacing-2xl);
          border-radius: 24px;
          text-align: center;
          max-width: 800px;
          width: 100%;
          background: rgba(10, 10, 10, 0.75);
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }
        .cta-heading {
          font-size: 3.5rem;
          color: var(--color-text);
          margin-bottom: var(--spacing-sm);
          text-transform: uppercase;
        }
        .cta-subheading {
          font-size: 1.2rem;
          margin-bottom: var(--spacing-xl);
        }
        .cta-buttons {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          max-width: 400px;
          margin: 0 auto;
        }
        .cta-btn {
          padding: 1.2rem;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          font-family: var(--font-body);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          border: none;
          transition: all 0.3s ease;
        }
        .primary-btn {
          background: var(--color-accent);
          color: #000;
        }
        .primary-btn:hover {
          background: #f0d05a;
          box-shadow: 0 0 20px rgba(226, 192, 68, 0.4);
        }
        .secondary-btn {
          background: transparent;
          color: var(--color-text);
          border: 2px solid rgba(255,255,255,0.2);
        }
        .secondary-btn:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.4);
        }
      `}</style>
    </div>
  );
}
