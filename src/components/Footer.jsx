import './Footer.css';

const SOCIAL_LINKS = [
  { name: 'LinkedIn', href: '[REDES_SOCIALES_CAPACE]' },
  { name: 'Instagram', href: '[REDES_SOCIALES_CAPACE]' },
  { name: 'Twitter/X', href: '[REDES_SOCIALES_CAPACE]' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner section-container">
        <div className="footer__top">
          <div className="footer__brand">
            <img src="/capacelogo.png" alt="CAPACE" className="footer__logo-img" />
            <p className="footer__full-name">Cámara Paraguaya de Comercio Electrónico</p>
          </div>

          <nav className="footer__nav" aria-label="Navegación del pie de página">
            <a href="#evento">Evento</a>
            <a href="#speakers">Speakers</a>
            <a href="#paneles">Paneles</a>
            <a href="#agenda">Agenda</a>
            <a href="#lugar">Lugar</a>
            <a href="#inscripcion">Inscripción</a>
          </nav>

          <div className="footer__social">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2026 CAPACE — Cámara Paraguaya de Comercio Electrónico. Todos los derechos reservados.
          </p>
          <div className="footer__legal">
            <a href="[URL_POLITICA_PRIVACIDAD]">Política de privacidad</a>
            <span className="footer__legal-sep">·</span>
            <a href="#">Términos y condiciones</a>
          </div>
          <p className="footer__contact">
            Contacto: <a href="mailto:[EMAIL_CONTACTO]">[EMAIL_CONTACTO]</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
