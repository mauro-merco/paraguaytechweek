import { useEffect, useRef } from 'react';
import mariaImg from '../assets/images/María_Bretón_Gallego-.png';
import marceloImg from '../assets/images/Marcelo_García_Cisneros-.png';
import martinImg from '../assets/images/Martín_Vivas-.jpg';
import './Speakers.css';

const SPEAKERS = [
  {
    name: 'María Bretón Gallego',
    country: 'España',
    role: 'Consultora en IA aplicada a los negocios y docente en Marketing Digital',
    description: 'Experta en Inteligencia Artificial, transformación digital e innovación, con más de 18 años de trayectoria liderando estrategias digitales para empresas internacionales. Actualmente desarrolla soluciones basadas en IA y machine learning para acelerar el crecimiento y la competitividad de las organizaciones.',
    photo: mariaImg,
  },
  {
    name: 'Marcelo García Cisneros',
    country: 'Argentina',
    role: 'Cofundador & CEO de Wego Digital Hub',
    description: 'Especialista en transformación digital, eCommerce e inteligencia artificial.',
    photo: marceloImg,
  },
  {
    name: 'Martín Vivas',
    country: 'Argentina',
    role: 'CEO y cofundador de BeyondFuture.tech',
    description: 'Especialista en innovación e inteligencia artificial, cuenta con más de 12 años de experiencia asesorando a grandes empresas, gobiernos y startups de alto potencial, además de ser mentor en programas como Google for Startups y Techstars.',
    photo: martinImg,
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
                <img src={speaker.photo} alt={speaker.name} className="speakers__photo" />
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
      </div>
    </section>
  );
}
