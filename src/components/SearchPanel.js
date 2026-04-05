"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Search } from 'lucide-react';
import { buildLocationSlug, matchesRegion, parseLocationInput } from '@/lib/location';

export function SearchPanel() {
  const [zipCode, setZipCode] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      const search = parseLocationInput(zipCode);

      if (search.query.length >= 3) {
        try {
          const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(search.query)}&count=20&language=en&format=json`);
          const data = await res.json();

          if (data.results) {
            const supported = data.results.filter((result) => result.country_code === 'US' || result.country_code === 'CA');
            const filtered = supported
              .filter((result) => matchesRegion(result, search.stateName, search.stateCode))
              .slice(0, 5);

            setSuggestions(filtered);
            setShowDropdown(filtered.length > 0);
          } else {
            setSuggestions([]);
            setShowDropdown(false);
          }
        } catch (error) {
          console.error('Failed to fetch suggestions', error);
          setSuggestions([]);
          setShowDropdown(false);
        }
      } else {
        setSuggestions([]);
        setShowDropdown(false);
      }
    }, 400);

    return () => clearTimeout(delayDebounceFn);
  }, [zipCode]);

  const handleSelect = (suggestion) => {
    const slug = buildLocationSlug(suggestion.name, suggestion.admin1);
    const displayName = `${suggestion.name}${suggestion.admin1 ? `, ${suggestion.admin1}` : ''}`;
    setZipCode(displayName);
    setShowDropdown(false);
    router.push(`/prediction/${encodeURIComponent(slug)}`);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    const search = parseLocationInput(zipCode);

    if (search.query.length < 3) {
      return;
    }

    try {
      const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(search.query)}&count=5&language=en&format=json`);
      const data = await res.json();
      const valid = data.results
        ?.filter((result) => result.country_code === 'US' || result.country_code === 'CA')
        .filter((result) => matchesRegion(result, search.stateName, search.stateCode));

      if (valid && valid.length > 0) {
        handleSelect(valid[0]);
      } else {
        router.push(`/prediction/${encodeURIComponent(search.fallbackSlug)}`);
      }
    } catch (error) {
      router.push(`/prediction/${encodeURIComponent(search.fallbackSlug)}`);
    }
  };

  return (
    <motion.form
      className="glass-panel calculator-card"
      onSubmit={handleSearch}
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className="input-wrapper" style={{ position: 'relative' }}>
        <label htmlFor="location-search" className="input-label">Enter ZIP, postal code, or city</label>
        <div className="input-group">
          <MapPin className="input-icon" size={20} />
          <input
            id="location-search"
            type="text"
            className="zip-input"
            placeholder="e.g., 10001, Buffalo, or Toronto"
            value={zipCode}
            onChange={(event) => setZipCode(event.target.value)}
            onFocus={() => {
              if (suggestions.length > 0) {
                setShowDropdown(true);
              }
            }}
          />
        </div>

        <AnimatePresence>
          {showDropdown && suggestions.length > 0 && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="suggestions-dropdown"
            >
              {suggestions.map((suggestion) => (
                <li key={suggestion.id}>
                  <button type="button" className="suggestion-item" onClick={() => handleSelect(suggestion)}>
                    <MapPin size={16} className="item-icon" />
                    <span>
                      <strong>{suggestion.name}</strong>
                      {suggestion.admin1 && <span style={{ color: 'var(--text-muted)' }}>, {suggestion.admin1}</span>}
                      {suggestion.country_code && <span style={{ color: 'var(--text-muted)' }}> ({suggestion.country_code})</span>}
                    </span>
                  </button>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      <button
        type="submit"
        className="calculate-btn glow-fx"
        disabled={!zipCode}
      >
        <Search size={24} /> Check Snow Day Risk
      </button>
    </motion.form>
  );
}
