import "./Cover.css";

function Cover() {
  return (
    <div className="cover">
      <div className="cover__logo" aria-hidden="true" />
      <p className="cover__eyebrow">XII Convención Bianual</p>
      <h1 className="cover__titulo">
        UPSEC
        <span className="cover__titulo-linea">JEZREEL</span>
      </h1>
      <div className="cover__divisor" aria-hidden="true" />
      <p className="cover__fecha">4 &amp; 5 de julio</p>
      <p className="cover__lugar">Itinerario y órdenes de culto</p>
    </div>
  );
}

export default Cover;
