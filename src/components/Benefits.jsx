import { useEffect, useRef } from 'react';
import './Benefits.css';

const BENEFITS = [
  'Accedé a ideas aplicables para transformar tu negocio.',
  'Conocé tendencias de inteligencia artificial, inversión y eCommerce.',
  'Escuchá experiencias reales de líderes nacionales e internacionales.',
  'Conectá con tomadores de decisiones del ecosistema digital.',
  'Participá de un encuentro exclusivo en el marco de Paraguay Tech Week 2026.',
];

export default function Benefits() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <section className="benefits">
      <div className="benefits__inner section-container fade-in" ref={ref}>
        <h2 className="section-title benefits__title">¿Por qué ser parte?</h2>
        <div className="gold-line" />

        <div className="benefits__list">
          {BENEFITS.map((benefit, i) => (
            <div key={i} className="benefits__item">
              <span className="benefits__check" aria-hidden="true">✦</span>
              <p className="benefits__text">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
