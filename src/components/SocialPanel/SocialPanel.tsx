import "./SocialPanel.css";

function SocialPanel() {
  return (
    <div className="social-panel">
      <p className="social-panel__eyebrow">Contacto y Redes</p>
      
      <blockquote className="social-panel__cita">
        "Y la paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones y vuestros pensamientos en Cristo Jesús."
      </blockquote>
      <p className="social-panel__cita-ref">Filipenses 4:7</p>

      <div className="social-panel__divisor" aria-hidden="true" />

      <div className="social-panel__redes">
        <a href="https://www.facebook.com/profile.php?id=100064847044210" className="social-panel__red" target="_blank" rel="noopener noreferrer">
          <svg className="social-panel__icon" viewBox="0 0 24 24">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
          UPSEC Jezreel
        </a>
      </div>
    </div>
  );
}

export default SocialPanel;
