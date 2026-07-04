import { useRef } from "react";
import type { BloqueHorario } from "../../types";
import ScrollButtons from "../ScrollButtons/ScrollButtons";
import "./ScheduleTable.css";

interface Props {
  bloque: BloqueHorario;
}

function ScheduleTable({ bloque }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="horario" ref={scrollRef}>
        <p className="horario__eyebrow">Itinerario</p>
        <h2 className="horario__dia">
          {bloque.dia}
          <span className="horario__fecha">{bloque.fecha}</span>
        </h2>
        <div className="horario__divisor" aria-hidden="true" />
        <ol className="horario__lista">
          {bloque.items.map((item, i) => (
            <li
              key={i}
              className={`horario__item${item.destacado ? " horario__item--destacado" : ""}`}
            >
              <span className="horario__hora">{item.horario}</span>
              <span className="horario__actividad">{item.actividad}</span>
            </li>
          ))}
        </ol>
      </div>
      <ScrollButtons targetRef={scrollRef} />
    </>
  );
}

export default ScheduleTable;
