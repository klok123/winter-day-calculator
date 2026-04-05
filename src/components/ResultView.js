"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Snowflake, Wind, ThermometerSnowflake, RefreshCw, Share2, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ResultView({ result }) {
  const router = useRouter();

  const handleShare = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    if (navigator.share) {
      navigator.share({
        title: 'Winter Day Calculator',
        text: result.success ? result.data.summary : 'Check out Winter Day Calculator',
        url,
      }).catch(console.error);
    } else if (url) {
      navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <AnimatePresence mode="wait">
      {result.success ? (
        <motion.div
          key="result"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="results-container"
        >
          <div className="glass-panel result-card">
            <div className="result-location">
              <MapPin size={18} className="text-accent" />
              {result.data.location}
            </div>

            <div className="pill-row">
              <span className="meta-pill">{result.data.forecastWindow}</span>
              <span className="meta-pill">{result.data.riskLevel} risk</span>
              <span className="meta-pill">{result.data.confidence}</span>
            </div>

            <h2 className="chance-label">Forecast-Based Snow Day Estimate</h2>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              className="chance-display"
            >
              {result.data.probability}%
            </motion.div>

            <p className="result-summary">{result.data.summary}</p>
            <p className="result-note">
              Planning estimate for the next school-morning window. Confirm with your district, employer, or local alert source for the final decision.
            </p>
            <p className="result-meta-note">
              Forecast window: {result.data.forecastDate}. Updated from the latest forecast feed: {result.data.updatedAt}.
            </p>

            <div className="stats-grid">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="stat-item"
              >
                <Snowflake className="stat-icon" size={24} />
                <div className="stat-value">{result.data.snowfall} in</div>
                <div className="stat-label">Snow Through Morning</div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="stat-item"
              >
                <ThermometerSnowflake className="stat-icon" size={24} />
                <div className="stat-value">{result.data.temperature}&deg;F</div>
                <div className="stat-label">Coldest Morning Hour</div>
              </motion.div>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="stat-item stat-item-wide"
              >
                <Wind className="stat-icon" size={24} />
                <div className="stat-value">{result.data.wind} mph</div>
                <div className="stat-label">Peak Morning Wind</div>
              </motion.div>
            </div>

            {result.data.planningChecklist?.length > 0 && (
              <div className="result-guidance">
                {result.data.planningChecklist.map((item) => (
                  <article key={item} className="result-guidance-item">
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            )}

            <motion.div
              className="action-buttons"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.65 }}
            >
              <button className="action-btn btn-secondary" onClick={() => router.push('/')}>
                <RefreshCw size={18} /> Search Again
              </button>
              <button className="action-btn btn-secondary" style={{ background: 'var(--primary)', border: 'none' }} onClick={handleShare}>
                <Share2 size={18} /> Share Result
              </button>
            </motion.div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="error-message glass-panel"
        >
          <AlertCircle size={24} />
          <p>{result.error}</p>
          <button className="action-btn btn-secondary" onClick={() => router.push('/')}>
            Go Back
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
