import React from 'react';
import { motion } from 'framer-motion';

export default function EntertainmentSlide() {
  return (
    <div className="slide entertainment-slide">
      <div className="slide-header">
        <h2 className="slide-title">Attractions & Entertainment</h2>
        <div className="slide-title-accent"></div>
      </div>
      
      <div className="entertainment-content">
        <motion.div 
          className="feature-card large-card glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=2070&auto=format&fit=crop" alt="Theme Park" className="card-bg" />
          <div className="card-overlay">
            <h3>Nickelodeon Universe</h3>
            <p>The nation's largest indoor theme park. 7 acres of rides, driving massive family foot traffic year-round.</p>
          </div>
        </motion.div>
        
        <div className="side-cards">
          <motion.div 
            className="feature-card glass-panel"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src="https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=1964&auto=format&fit=crop" alt="Aquarium" className="card-bg" />
            <div className="card-overlay">
              <h3>SEA LIFE Aquarium</h3>
              <p>A 1.3 million gallon aquatic experience.</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="feature-card glass-panel"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img src="https://images.unsplash.com/photo-1585647347384-2593bc35786b?q=80&w=2070&auto=format&fit=crop" alt="Mini Golf" className="card-bg" />
            <div className="card-overlay">
              <h3>Immersive Experiences</h3>
              <p>Mini-golf, flight simulators, and escape rooms.</p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .entertainment-slide {
          background: var(--color-bg);
        }
        .slide-header {
          margin-bottom: var(--spacing-xl);
        }
        .slide-title {
          font-size: 3rem;
          margin-bottom: var(--spacing-sm);
        }
        .slide-title-accent {
          width: 60px;
          height: 3px;
          background: var(--color-accent);
        }
        .entertainment-content {
          display: flex;
          gap: var(--spacing-md);
          flex: 1;
          height: 100%;
          max-height: 600px;
        }
        .feature-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
        }
        .feature-card .card-bg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .feature-card:hover .card-bg {
          transform: scale(1.05);
        }
        .card-overlay {
          position: absolute;
          bottom: 0; left: 0; width: 100%;
          padding: var(--spacing-lg);
          background: linear-gradient(transparent, rgba(0,0,0,0.9));
        }
        .card-overlay h3 {
          font-size: 1.5rem;
          color: var(--color-text);
          margin-bottom: 0.5rem;
        }
        .card-overlay p {
          color: rgba(255,255,255,0.8);
          font-size: 1rem;
        }
        .large-card {
          flex: 2;
        }
        .large-card .card-overlay h3 {
          font-size: 2.5rem;
          color: var(--color-accent);
        }
        .large-card .card-overlay p {
          font-size: 1.2rem;
          max-width: 80%;
        }
        .side-cards {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }
      `}</style>
    </div>
  );
}
