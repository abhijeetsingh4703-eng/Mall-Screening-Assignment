import React from 'react';
import { motion } from 'framer-motion';

export default function RetailSlide() {
  const images = [
    "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop", // high-end retail
    "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop", // luxury fashion
    "https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=1974&auto=format&fit=crop" // premium dining
  ];

  return (
    <div className="slide retail-slide">
      <div className="slide-header">
        <h2 className="slide-title">Retail & Luxury</h2>
        <div className="slide-title-accent"></div>
      </div>
      
      <div className="retail-content">
        <div className="retail-gallery">
          {images.map((img, i) => (
            <motion.div 
              key={i} 
              className={`gallery-item item-${i} glass-panel`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={img} alt={`Retail visual ${i+1}`} />
            </motion.div>
          ))}
        </div>
        
        <div className="retail-info">
          <motion.div 
            className="info-block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>Elevated Shopping</h3>
            <p>Over 520 stores ranging from luxury flagships to emerging pop-ups. A curated mix that drives unparalleled conversion rates.</p>
          </motion.div>
          
          <motion.div 
            className="info-block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>The Avenue</h3>
            <p>Our dedicated luxury wing features world-renowned brands in a sophisticated, elevated environment designed for the discerning shopper.</p>
          </motion.div>
        </div>
      </div>

      <style>{`
        .retail-slide {
          background: linear-gradient(135deg, var(--color-bg) 0%, #111 100%);
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
        .retail-content {
          display: flex;
          gap: var(--spacing-2xl);
          flex: 1;
          align-items: center;
        }
        .retail-gallery {
          flex: 1.5;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: var(--spacing-md);
          height: 100%;
          max-height: 500px;
        }
        .gallery-item {
          border-radius: 16px;
          overflow: hidden;
          position: relative;
        }
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .gallery-item:hover img {
          transform: scale(1.05);
        }
        .item-0 { grid-row: 1 / 3; }
        .retail-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xl);
        }
        .info-block h3 {
          font-size: 1.8rem;
          color: var(--color-accent);
          margin-bottom: var(--spacing-sm);
        }
        .info-block p {
          color: var(--color-text-muted);
          line-height: 1.7;
          font-size: 1.1rem;
        }
      `}</style>
    </div>
  );
}
