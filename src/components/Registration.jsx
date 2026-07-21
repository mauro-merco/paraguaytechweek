import { useEffect, useRef } from 'react';
import './Registration.css';

const LUMA_URL = 'https://luma.com/vlma2ru9';

export default function Registration() {
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
    <section className="registration" id="inscripcion">
      <div className="registration__bg-glow" aria-hidden="true" />
      <div className="registration__inner section-container fade-in" ref={ref}>
        <h2 className="registration__title">
          Las decisiones que transforman comienzan acá
        </h2>
        <p className="registration__subtitle">
          Reservá tu lugar en CAPACE Executive Talks y sumate a una conversación estratégica
          sobre el futuro de los negocios en Paraguay.
        </p>
        <p className="registration__microcopy">Cupos limitados · Evento presencial</p>
        <a
          href={LUMA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button registration__cta"
        >
          Reservar mi lugar
        </a>
      </div>
    </section>
  );
}
