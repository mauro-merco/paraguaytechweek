import { useEffect, useRef } from 'react';
import './Speakers.css';

const SPEAKERS = [
  {
    name: 'María Bretón Gallego',
    country: 'España',
    role: 'Consultora en IA aplicada a los negocios y docente en Marketing Digital',
    description: 'Especialista en inteligencia artificial, transformación digital y marketing, con experiencia en formación ejecutiva para equipos directivos.',
    initials: 'MB',
  },
  {
    name: 'Marcelo García Cisneros',
    country: 'Argentina',
    role: 'Cofundador & CEO de Wego Digital Hub',
    description: 'Especialista en transformación digital, eCommerce e inteligencia artificial.',
    initials: 'MG',
  },
  {
    name: 'Marta Cruz',
    country: 'Argentina',
    role: 'Cofundadora y General Partner de NXTP Ventures',
    description: 'Referente en inversión regional y startups B2B de base tecnológica. NXTP Ventures tiene foco en Latinoamérica y ha invertido en seis unicornios.',
    initials: 'MC',
  },
];

export default function Speakers() {
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
    <section className="speakers" id="speakers">
      <div className="speakers__inner section-container fade-in" ref={ref}>
        <span className="section-label">Voces que impulsan el cambio</span>
        <h2 className="section-title">
          Conocé a los speakers internacionales
        </h2>
        <div className="gold-line" />

        <div className="speakers__grid">
          {SPEAKERS.map((speaker) => (
            <article key={speaker.name} className="speakers__card">
              <div className="speakers__photo-frame">
                <div className="speakers__photo-placeholder">
                  <span className="speakers__initials">{speaker.initials}</span>
                </div>
              </div>
              <div className="speakers__info">
                <span className="speakers__country">{speaker.country}</span>
                <h3 className="speakers__name">{speaker.name}</h3>
                <p className="speakers__role">{speaker.role}</p>
                <div className="speakers__divider" />
                <p className="speakers__desc">{speaker.description}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="speakers__note">
          Usar las fotografías y datos suministrados por la organización.
        </p>
      </div>
    </section>
  );
}
