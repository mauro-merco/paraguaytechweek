import { useEffect, useRef } from 'react';
import './Agenda.css';

const AGENDA_ITEMS = [
  { time: '08:30', activity: 'Acreditación y café de bienvenida', participants: '—' },
  { time: '09:00', activity: 'Apertura institucional', participants: 'CAPACE' },
  { time: '09:10 – 09:25', activity: 'Panel 1 — Política pública y ecosistema digital', participants: 'CAPACE · Ministerio de Industria y Comercio · BID' },
  { time: '09:25 – 10:00', activity: 'Keynote — Inteligencia artificial aplicada a negocios', participants: 'María Bretón Gallego · España' },
  { time: '10:00 – 10:20', activity: 'Coffee break y networking', participants: '—' },
  { time: '10:20 – 11:00', activity: 'Panel 2 — Inversión y expansión regional', participants: 'Empresarios e inversionistas' },
  { time: '11:00 – 11:45', activity: 'Panel 3 — Transformación del modelo de negocio', participants: 'CEOs del eCommerce paraguayo' },
  { time: '11:45 – 12:00', activity: 'Cierre', participants: 'CAPACE' },
];

export default function Agenda() {
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
    <section className="agenda" id="agenda">
      <div className="agenda__inner section-container fade-in" ref={ref}>
        <span className="section-label">Programa</span>
        <h2 className="section-title">
          Una mañana para conectar, aprender y decidir
        </h2>
        <div className="gold-line" />

        <div className="agenda__table-wrapper">
          <table className="agenda__table">
            <thead>
              <tr>
                <th>Horario</th>
                <th>Actividad</th>
                <th>Participantes</th>
              </tr>
            </thead>
            <tbody>
              {AGENDA_ITEMS.map((item, i) => (
                <tr key={i}>
                  <td className="agenda__time">{item.time}</td>
                  <td className="agenda__activity">{item.activity}</td>
                  <td className="agenda__participants">{item.participants}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="agenda__timeline">
          {AGENDA_ITEMS.map((item, i) => (
            <div key={i} className="agenda__timeline-item">
              <div className="agenda__timeline-dot" />
              <div className="agenda__timeline-content">
                <span className="agenda__timeline-time">{item.time}</span>
                <h4 className="agenda__timeline-activity">{item.activity}</h4>
                {item.participants !== '—' && (
                  <p className="agenda__timeline-participants">{item.participants}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="agenda__note">
          La programación y los participantes pueden estar sujetos a ajustes.
        </p>
      </div>
    </section>
  );
}
