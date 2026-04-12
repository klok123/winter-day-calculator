'use client';

import { useState } from 'react';

const CONTACT_EMAIL = 'mediasolution25@gmail.com';

const ISSUE_TYPES = [
  'Broken page',
  'Wrong forecast details',
  'Suggest a city',
  'Search result problem',
  'Partnership or press',
  'Other',
];

export function FeedbackForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    city: '',
    pageUrl: '',
    issueType: ISSUE_TYPES[0],
    message: '',
  });
  const [copyState, setCopyState] = useState('idle');

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function buildSubject() {
    const subjectType = form.issueType || 'Site feedback';
    const location = form.city ? ` - ${form.city}` : '';
    return `Winter Day Calculator: ${subjectType}${location}`;
  }

  function buildMessage() {
    return [
      `Name: ${form.name || 'Not provided'}`,
      `Email: ${form.email || 'Not provided'}`,
      `City or region: ${form.city || 'Not provided'}`,
      `Issue type: ${form.issueType || 'Not provided'}`,
      `Page URL: ${form.pageUrl || 'Not provided'}`,
      '',
      'Details:',
      form.message || 'No extra details provided.',
    ].join('\n');
  }

  function openEmailDraft(event) {
    event.preventDefault();

    const subject = encodeURIComponent(buildSubject());
    const body = encodeURIComponent(buildMessage());
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(buildMessage());
      setCopyState('copied');
      window.setTimeout(() => setCopyState('idle'), 2500);
    } catch {
      setCopyState('error');
      window.setTimeout(() => setCopyState('idle'), 2500);
    }
  }

  return (
    <section className="content-section">
      <div className="section-heading">
        <p className="eyebrow">Send feedback</p>
        <h2>Fill this out and open a ready-to-send email draft.</h2>
      </div>

      <form className="feedback-form glass-panel" onSubmit={openEmailDraft}>
        <div className="feedback-grid">
          <label className="feedback-field">
            <span>Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={updateField}
              placeholder="Your name"
            />
          </label>

          <label className="feedback-field">
            <span>Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={updateField}
              placeholder="you@example.com"
            />
          </label>

          <label className="feedback-field">
            <span>City or region</span>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={updateField}
              placeholder="Chicago, Illinois"
            />
          </label>

          <label className="feedback-field">
            <span>Issue type</span>
            <select name="issueType" value={form.issueType} onChange={updateField}>
              {ISSUE_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="feedback-field">
          <span>Page URL</span>
          <input
            type="text"
            name="pageUrl"
            value={form.pageUrl}
            onChange={updateField}
            placeholder="https://www.winterdaycalculator.com/prediction/chicago-il"
          />
        </label>

        <label className="feedback-field">
          <span>What happened?</span>
          <textarea
            name="message"
            value={form.message}
            onChange={updateField}
            placeholder="Tell us what looked wrong, what you expected to see, or what city you want added."
            rows="6"
          />
        </label>

        <p className="feedback-note">
          This does not submit to a hidden server. It opens a ready email draft to the Winter Day Calculator inbox so the user can review before sending.
        </p>

        <div className="action-buttons">
          <button type="submit" className="action-btn calculate-btn">
            Open Email Draft
          </button>
          <button type="button" className="action-btn btn-secondary" onClick={copyMessage}>
            {copyState === 'copied' ? 'Copied' : copyState === 'error' ? 'Copy failed' : 'Copy Message'}
          </button>
        </div>
      </form>
    </section>
  );
}
