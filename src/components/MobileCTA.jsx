import './MobileCTA.css';

export default function MobileCTA() {
  return (
    <div className="mobile-cta" aria-label="Inscripción rápida">
      <div className="mobile-cta__inner">
        <span className="mobile-cta__date">03 AGO 2026 · Hotel La Misión</span>
        <a href="#inscripcion" className="cta-button mobile-cta__btn">
          Inscribirme
        </a>
      </div>
    </div>
  );
}
