import { useRef } from "react";
import type { CultoOrdenData } from "../../types";
import ScrollButtons from "../ScrollButtons/ScrollButtons";
import "./CultoOrder.css";

interface Props {
  culto: CultoOrdenData;
  eyebrow?: string;
  showScrollButtons?: boolean;
}

function CultoOrder({ culto, eyebrow = "Orden de culto", showScrollButtons = false }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="culto" ref={scrollRef}>
        <p className="culto__eyebrow">{eyebrow}</p>
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
      {showScrollButtons && <ScrollButtons targetRef={scrollRef} />}
    </>
  );
}

export default CultoOrder;
