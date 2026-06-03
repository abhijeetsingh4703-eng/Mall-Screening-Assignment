import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import InteractiveMap from '../InteractiveMap';

function CountUp({ value, prefix = '', suffix = '' }) {
  const [inView, setInView] = useState(false);
  const springValue = useSpring(0, { duration: 2000, bounce: 0 });
  const displayValue = useTransform(springValue, (current) => {
    if (value.includes('M')) return Math.floor(current) + 'M' + (value.includes('+') ? '+' : '');
    if (value.includes('B')) return Math.floor(current) + 'B';
    return Math.floor(current) + (value.includes('+') ? '+' : '');
  });

  const targetNumber = parseFloat(value);

  useEffect(() => {
    if (inView) {
      springValue.set(targetNumber);
    }
  }, [inView, targetNumber, springValue]);

  return (
    <motion.span
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true }}
    >
      {prefix}<motion.span>{displayValue}</motion.span>{suffix}
    </motion.span>
  );
}

export default function WhyThisPropertySlide() {
  const stats = [
    { label: 'Annual Visitors', value: '40M+', prefix: '' },
    { label: 'Square Feet', value: '5.6M', prefix: '' },
    { label: 'Retailers', value: '500+', prefix: '' },
    { label: 'Annual Spending', value: '2B', prefix: '$' }
  ];

  return (
    <div className="slide why-slide">
      <div className="slide-header">
        <h2 className="slide-title">Unmatched Scale & Reach</h2>
        <div className="slide-title-accent"></div>
      </div>

      <div className="why-content">
        <div className="why-text-col">
          <p className="lead-text">
            More than a mall. A global destination.
          </p>
          <p className="body-text">
            Located just minutes from Minneapolis-St. Paul International Airport,
            Mall of America draws tourists from around the world and a massive regional
            population. It's an ecosystem where retail meets hospitality.
          </p>

          <div className="stats-grid">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="stat-card glass-panel"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                <div className="stat-value text-accent font-heading">
                  <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="why-visual-col">
          <div className="map-placeholder glass-panel">
            <InteractiveMap />
          </div>
        </div>
      </div>

      <style>{`
        .why-slide {
          background: radial-gradient(circle at 100% 0%, rgba(226, 192, 68, 0.05) 0%, transparent 50%), var(--color-bg);
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
        .why-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-2xl);
          flex: 1;
        }
        .lead-text {
          font-size: 1.8rem;
          font-family: var(--font-heading);
          color: var(--color-accent);
          margin-bottom: var(--spacing-md);
        }
        .body-text {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--color-text-muted);
          margin-bottom: var(--spacing-xl);
          max-width: 90%;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-md);
        }
        .stat-card {
          padding: var(--spacing-md);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .stat-value {
          font-size: 2.5rem;
          font-weight: 700;
        }
        .stat-label {
          color: var(--color-text-muted);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .why-visual-col {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .map-placeholder {
          width: 100%;
          height: 100%;
          min-height: 400px;
          border-radius: 20px;
          position: relative;
          overflow: hidden;
        }
        .map-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.6;
          mix-blend-mode: luminosity;
        }
        .map-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
        }
        .pin {
          position: absolute;
          background: var(--color-accent);
          color: #000;
          padding: 4px 12px;
          border-radius: 20px;
          font-weight: bold;
          font-size: 0.8rem;
          box-shadow: 0 0 20px var(--color-accent);
        }
        .point-moa { top: 50%; left: 50%; transform: translate(-50%, -50%); }
        .point-msp { top: 30%; left: 60%; }
      `}</style>
    </div>
  );
}
