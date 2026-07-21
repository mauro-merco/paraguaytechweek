import { useState, useEffect } from 'react';
import './Header.css';

const NAV_ITEMS = [
  { label: 'Evento', href: '#evento' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Paneles', href: '#paneles' },
  { label: 'Agenda', href: '#agenda' },
  { label: 'Lugar', href: '#lugar' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner section-container">
        <a href="#" className="header__logo" aria-label="CAPACE - Inicio">
          <img src="/paraguaytechweek.png" alt="Paraguay Tech Week" className="header__logo-img" />
        </a>

        <nav className={`header__nav ${mobileOpen ? 'header__nav--open' : ''}`} aria-label="Navegación principal">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="header__nav-link"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#inscripcion"
            className="cta-button header__cta-mobile"
            onClick={() => setMobileOpen(false)}
          >
            Inscribirme
          </a>
        </nav>

        <a href="#inscripcion" className="cta-button header__cta-desktop">
          Reservar mi lugar
        </a>

        <button
          className={`header__burger ${mobileOpen ? 'header__burger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menú"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {mobileOpen && (
        <div className="header__overlay" onClick={() => setMobileOpen(false)} />
      )}
    </header>
  );
}
