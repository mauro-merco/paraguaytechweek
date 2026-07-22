import './Organizers.css';

const SPONSORS = [
  { name: 'Bancard', logo: '/bancard.png' },
  { name: 'Infonegocios', logo: '/infonegocios.png' },
  { name: 'ThinkChat', logo: '/thinkchat.png' },
  { name: 'Merco', logo: '/merco.png' },
  { name: 'Grupo AEX', logo: '/grupoaex.png' },
  { name: 'Ceopy', logo: '/ceopy.png' },
];

export default function Organizers() {
  return (
    <section className="organizers">
      <div className="organizers__inner section-container">
        <h2 className="organizers__title">Una iniciativa de</h2>

        <div className="organizers__capace">
          <img src="/capacelogo.png" alt="CAPACE" className="organizers__logo-main" />
          <p className="organizers__full-name">Cámara Paraguaya de Comercio Electrónico</p>
        </div>

        <div className="organizers__divider" />

        <div className="organizers__badge">
          <img src="/paraguaytechweek.png" alt="Paraguay Tech Week 2026" className="organizers__ptw-logo" />
        </div>

        <div className="organizers__sponsors">
          <div className="organizers__sponsors-group">
            <span className="organizers__sponsors-label">Sponsors</span>
            <div className="organizers__logos">
              {SPONSORS.map((s) => (
                <div key={s.name} className="organizers__logo-card">
                  <img src={s.logo} alt={s.name} className="organizers__logo-img" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
