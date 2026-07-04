import type { CultoOrdenData } from "../../types";
import "./CultoOrder.css";

interface Props {
  culto: CultoOrdenData;
}

function CultoOrder({ culto }: Props) {
  return (
    <div className="culto">
      <p className="culto__eyebrow">Orden de culto</p>
      <h2 className="culto__titulo">
        {culto.titulo}
        {culto.subtitulo && <span className="culto__subtitulo">{culto.subtitulo}</span>}
      </h2>
      <div className="culto__divisor" aria-hidden="true" />
      <ol className="culto__lista">
        {culto.puntos.map((punto, i) => (
          <li key={i} className="culto__punto">
            <span className="culto__num">{String(i + 1).padStart(2, "0")}</span>
            <span className="culto__texto">{punto}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default CultoOrder;
