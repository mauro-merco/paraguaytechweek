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
            href="https://www.google.com/maps/place/Dr+Juan+Eulogio+Estigarribia+4990,+Asuncin,+Paraguay/@-25.2962036,-57.5820505,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button venue__cta"
          >
            Cómo llegar
          </a>
        </div>

        <div className="venue__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.5!2d-57.5798565!3d-25.2962085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da89762dbe2d9%3A0x7a212ebaedd64c1a!2sDr%20Juan%20Eulogio%20Estigarribia%204990%2C%20Asuncin%2C%20Paraguay!5e0!3m2!1ses!2s!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '350px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Hotel La Misión"
          />
        </div>
      </div>
    </section>
  );
}
