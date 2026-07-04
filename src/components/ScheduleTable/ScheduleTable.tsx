import type { BloqueHorario } from "../../types";
import "./ScheduleTable.css";

interface Props {
  bloque: BloqueHorario;
}

function ScheduleTable({ bloque }: Props) {
  return (
    <div className="horario">
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
  );
}

export default ScheduleTable;
