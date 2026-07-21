import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="evento">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__orb hero__orb--4" />
        <div className="hero__grid" />
        <div className="hero__particles">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="hero__particle" />
          ))}
        </div>
        <div className="hero__rings">
          <div className="hero__ring hero__ring--1" />
          <div className="hero__ring hero__ring--2" />
          <div className="hero__ring hero__ring--3" />
        </div>
        <div className="hero__lines">
          <div className="hero__line hero__line--1" />
          <div className="hero__line hero__line--2" />
          <div className="hero__line hero__line--3" />
          <div className="hero__line hero__line--4" />
          <div className="hero__line hero__line--5" />
        </div>
        <div className="hero__noise" />
      </div>

      <div className="hero__content section-container">
        <span className="section-label hero__eyebrow">Paraguay Tech Week 2026</span>
        <h1 className="hero__title">
          <span className="hero__title-line">CAPACE</span>
          <span className="hero__title-line hero__title-line--gold">Executive Talks</span>
        </h1>
        <p className="hero__claim">Decisiones que transforman</p>
        <div className="hero__divider">
          <span className="hero__divider-line" />
          <span className="hero__divider-dot" />
          <span className="hero__divider-line" />
        </div>
        <p className="hero__subtitle">Liderazgo digital para el crecimiento empresarial.</p>
        <p className="hero__description">
          Una mañana de conversaciones estratégicas junto a referentes nacionales e internacionales
          que están transformando los negocios, la inversión y el ecosistema digital.
        </p>

        <div className="hero__data">
          <div className="hero__data-item">
            <span className="hero__data-label">Fecha</span>
            <span className="hero__data-value">Lunes 3 de agosto de 2026</span>
          </div>
          <div className="hero__data-sep" aria-hidden="true" />
          <div className="hero__data-item">
            <span className="hero__data-label">Horario</span>
            <span className="hero__data-value">09:00 a 12:00 h</span>
          </div>
          <div className="hero__data-sep" aria-hidden="true" />
          <div className="hero__data-item">
            <span className="hero__data-label">Lugar</span>
            <span className="hero__data-value">Hotel La Misión · Asunción</span>
          </div>
        </div>

        <div className="hero__ctas">
          <a href="#inscripcion" className="cta-button hero__cta-primary">
            Reservar mi lugar
          </a>
          <a href="#agenda" className="cta-button-outline">
            Ver agenda
          </a>
        </div>

        <p className="hero__trust">Cupos limitados · Evento presencial</p>
      </div>
    </section>
  );
}
