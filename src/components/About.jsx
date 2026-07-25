import { useEffect, useRef } from 'react';
import './About.css';

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <section className="quote-section" ref={ref}>
      <div className="quote-section__bg" aria-hidden="true">
        <div className="quote-section__orb quote-section__orb--1" />
        <div className="quote-section__orb quote-section__orb--2" />
        <div className="quote-section__orb quote-section__orb--3" />
        <div className="quote-section__glow" />
      </div>
      <div className="quote-section__inner section-container fade-in">
        <div className="quote-section__marks" aria-hidden="true">"</div>
        <blockquote className="quote-section__text">
          El futuro no se prevé,<br />
          <span className="quote-section__highlight">se construye.</span>
        </blockquote>
        <div className="quote-section__line" />
        <p className="quote-section__author">Paraguay Tech Week 2026</p>
      </div>
    </section>
  );
}
