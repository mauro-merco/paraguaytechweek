import { useEffect, useRef } from 'react';
import './Venue.css';

export default function Venue() {
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
    <section className="venue" id="lugar">
      <div className="venue__inner section-container fade-in" ref={ref}>
        <div className="venue__content">
          <span className="section-label">Ubicación</span>
          <h2 className="section-title">
            Nos encontramos en Hotel La Misión
          </h2>
          <div className="gold-line" />
          <div className="venue__details">
            <p className="venue__detail">
              <span className="venue__detail-label">Lugar</span>
              Hotel La Misión · Asunción, Paraguay
            </p>
            <p className="venue__detail">
              <span className="venue__detail-label">Fecha</span>
              Lunes 3 de agosto · Acreditación desde las 08:30 h
            </p>
          </div>
          <a
            href="[URL_GOOGLE_MAPS]"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button venue__cta"
          >
            Cómo llegar
          </a>
        </div>

        <div className="venue__map">
          <div className="venue__map-placeholder">
            <span className="venue__map-icon">📍</span>
            <span className="venue__map-text">Hotel La Misión · Asunción, Paraguay</span>
            <span className="venue__map-sub">Mapa de Google Maps</span>
          </div>
        </div>
      </div>
    </section>
  );
}
