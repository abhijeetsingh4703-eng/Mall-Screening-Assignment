import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, X } from 'lucide-react';

export default function EventsSlide() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="slide events-slide">
      <div className="slide-header text-center">
        <h2 className="slide-title">More Than A Building. A Global Platform.</h2>
        <div className="slide-title-accent center-accent"></div>
      </div>
      
      <div className="events-content">
        <div className="main-event-feature glass-panel">
          {isPlaying ? (
            <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 20, backgroundColor: '#000' }}>
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/7rqxb0BICj8?autoplay=1&mute=1" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                style={{ objectFit: 'cover' }}
              ></iframe>
              <button 
                onClick={() => setIsPlaying(false)}
                style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 30 }}
              >
                <X size={24} />
              </button>
            </div>
          ) : (
            <>
              <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074&auto=format&fit=crop" alt="Concert" className="feature-bg" />
              <div className="feature-content flex-center">
                <motion.div 
                  className="play-btn-wrapper"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsPlaying(true)}
                >
                  <div className="play-btn flex-center">
                    <Play size={40} className="text-accent" fill="currentColor" />
                  </div>
                </motion.div>
                <div className="feature-text text-center mt-lg">
                  <h3 className="font-heading text-xl font-bold uppercase tracking-wider mb-sm">The Huntington Bank Rotunda</h3>
                  <p className="text-muted text-lg max-w-2xl mx-auto">
                    Host to over 400 events annually, from celebrity appearances and global product launches to live concerts. 
                    Activate your brand in front of thousands.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="event-opportunities">
          <motion.div className="opp-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h4 className="text-accent font-heading text-lg mb-sm">Brand Activations</h4>
            <p className="text-muted text-sm">High-traffic pop-up zones designed for immersive product experiences and sampling.</p>
            <div className="opp-link">Explore Spaces <ArrowRight size={16} /></div>
          </motion.div>
          <motion.div className="opp-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
            <h4 className="text-accent font-heading text-lg mb-sm">Sponsorships</h4>
            <p className="text-muted text-sm">Integrate your brand into the fabric of the property with naming rights and digital takeovers.</p>
            <div className="opp-link">View Packages <ArrowRight size={16} /></div>
          </motion.div>
          <motion.div className="opp-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
            <h4 className="text-accent font-heading text-lg mb-sm">Private Venues</h4>
            <p className="text-muted text-sm">VIP lounges and dedicated event spaces for corporate retreats and exclusive gatherings.</p>
            <div className="opp-link">Book Venue <ArrowRight size={16} /></div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .events-slide {
          background: linear-gradient(to top, var(--color-bg), #0f0f0f);
        }
        .text-center { text-align: center; }
        .center-accent { margin: 0 auto; }
        .slide-header {
          margin-bottom: var(--spacing-xl);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .slide-title {
          font-size: 3rem;
          margin-bottom: var(--spacing-sm);
        }
        .slide-title-accent {
          width: 80px;
          height: 3px;
          background: var(--color-accent);
        }
        .events-content {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
          flex: 1;
        }
        .main-event-feature {
          flex: 1;
          border-radius: 20px;
          position: relative;
          overflow: hidden;
        }
        .feature-bg {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          object-fit: cover;
          opacity: 0.4;
        }
        .feature-content {
          position: relative;
          z-index: 10;
          height: 100%;
          flex-direction: column;
          padding: var(--spacing-xl);
        }
        .play-btn {
          width: 80px; height: 80px;
          border-radius: 50%;
          background: rgba(20,20,20,0.8);
          border: 2px solid var(--color-accent);
          cursor: pointer;
        }
        .mt-lg { margin-top: var(--spacing-lg); }
        .mb-sm { margin-bottom: var(--spacing-sm); }
        .text-xl { font-size: 2.5rem; }
        .text-lg { font-size: 1.2rem; }
        .text-sm { font-size: 0.95rem; line-height: 1.5; }
        .max-w-2xl { max-width: 800px; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        
        .event-opportunities {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--spacing-md);
        }
        .opp-card {
          padding: var(--spacing-lg);
          background: var(--color-surface);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 12px;
          transition: transform 0.3s ease, background 0.3s ease;
          cursor: pointer;
        }
        .opp-card:hover {
          transform: translateY(-5px);
          background: var(--color-surface-hover);
          border-color: rgba(255,255,255,0.1);
        }
        .opp-link {
          margin-top: var(--spacing-md);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #fff;
          font-weight: 500;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
        }
        .opp-card:hover .opp-link {
          opacity: 1;
          transform: translateX(0);
          color: var(--color-accent);
        }
      `}</style>
    </div>
  );
}
