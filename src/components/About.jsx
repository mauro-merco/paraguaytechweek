import { useEffect, useRef } from 'react';
import './About.css';

const HIGHLIGHTS = [
  'Liderazgo digital',
  'Inteligencia artificial',
  'Inversión regional',
  'eCommerce',
];

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
    <section className="about" id="sobre" ref={ref}>
      <div className="about__inner section-container fade-in" ref={ref}>
        <span className="section-label">Una conversación necesaria</span>
        <h2 className="section-title">
          Las decisiones de hoy definen los negocios del mañana
        </h2>
        <div className="gold-line" />

        <div className="about__content">
          <p className="about__text">
            CAPACE Executive Talks reúne, en un espacio cercano y de alto nivel, a representantes
            del sector público, organismos multilaterales, inversionistas regionales y líderes del
            comercio electrónico paraguayo.
          </p>
          <p className="about__text">
            Una jornada diseñada para compartir perspectivas, experiencias reales y decisiones que
            pueden impulsar la digitalización del país, la adopción de inteligencia artificial, la
            expansión regional y la evolución de los modelos de negocio.
          </p>
        </div>

        <div className="about__highlights">
          {HIGHLIGHTS.map((item) => (
            <div key={item} className="about__highlight-card">
              <span className="about__highlight-text">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
