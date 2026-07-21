import { useEffect, useRef } from 'react';
import './Panels.css';

const PANELS = [
  {
    number: '01',
    type: 'Panel institucional',
    title: 'Política pública y ecosistema digital',
    description: 'El rol del Estado y la banca multilateral en la digitalización del país.',
    participants: 'CAPACE · Ministerio de Industria y Comercio · BID',
  },
  {
    number: '02',
    type: 'Keynote internacional',
    title: 'Inteligencia artificial en los negocios',
    description: 'La decisión de integrar inteligencia artificial en la operación y la estrategia empresarial.',
    participants: 'María Bretón Gallego',
  },
  {
    number: '03',
    type: 'Panel de inversión',
    title: 'Expansión e inversión regional',
    description: 'La decisión de invertir y expandirse en la nueva economía digital.',
    participants: 'Marcelo García Cisneros · Marta Cruz · empresarios e inversionistas invitados',
  },
  {
    number: '04',
    type: 'Panel de eCommerce',
    title: 'Transformación del modelo de negocio',
    description: 'Casos reales y decisiones que están transformando el eCommerce paraguayo.',
    participants: 'CEOs de empresas paraguayas',
  },
];

export default function Panels() {
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
    <section className="panels" id="paneles">
      <div className="panels__inner section-container fade-in" ref={ref}>
        <span className="section-label">Contenidos del encuentro</span>
        <h2 className="section-title">
          Cuatro conversaciones. Un mismo desafío: transformar.
        </h2>
        <div className="gold-line" />

        <div className="panels__grid">
          {PANELS.map((panel) => (
            <article key={panel.number} className="panels__card">
              <div className="panels__card-header">
                <span className="panels__number">{panel.number}</span>
                <span className="panels__type">{panel.type}</span>
              </div>
              <h3 className="panels__card-title">{panel.title}</h3>
              <p className="panels__card-desc">{panel.description}</p>
              <div className="panels__card-divider" />
              <p className="panels__card-participants">{panel.participants}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
