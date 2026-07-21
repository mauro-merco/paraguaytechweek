import './InfoBar.css';

const INFO_ITEMS = [
  { label: 'Fecha', value: '03 AGO 2026', icon: '📅' },
  { label: 'Acreditación', value: '08:30 h', icon: '🎫' },
  { label: 'Evento', value: '09:00 – 12:00 h', icon: '🕐' },
  { label: 'Lugar', value: 'Hotel La Misión', icon: '📍' },
];

export default function InfoBar() {
  return (
    <section className="info-bar" aria-label="Información rápida del evento">
      <div className="info-bar__inner section-container">
        {INFO_ITEMS.map((item) => (
          <div key={item.label} className="info-bar__item">
            <span className="info-bar__value">{item.value}</span>
            <span className="info-bar__label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
