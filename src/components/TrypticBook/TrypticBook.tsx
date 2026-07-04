import { useMemo, useState } from "react";
import Panel from "../Panel/Panel";
import Cover from "../Cover/Cover";
import ScheduleTable from "../ScheduleTable/ScheduleTable";
import CultoOrder from "../CultoOrder/CultoOrder";
import Navigation from "../Navigation/Navigation";
import { itinerarioSabado, itinerarioDomingo } from "../../data/itinerario";
import { cultoApertura, ordenSabado, ordenDomingo } from "../../data/cultos";
import { useIsDesktop } from "../../hooks/useIsDesktop";
import "./TrypticBook.css";

type Lado = "A" | "B";

const ETIQUETAS = [
  "Portada",
  "Itinerario · sábado",
  "Itinerario · domingo",
  "Culto de apertura",
  "Orden de culto · sábado",
  "Orden de culto · domingo",
];

function TrypticBook() {
  const [lado, setLado] = useState<Lado>("A");
  const [indiceMovil, setIndiceMovil] = useState(0);
  const esEscritorio = useIsDesktop();

  const actual = useMemo(
    () => (lado === "A" ? indiceMovil : indiceMovil + 3),
    [lado, indiceMovil]
  );

  const voltear = (destino: Lado, indice: number) => {
    setLado(destino);
    setIndiceMovil(indice);
  };

  const irSiguiente = () => {
    if (!esEscritorio && indiceMovil < 2) {
      setIndiceMovil(indiceMovil + 1);
      return;
    }
    voltear(lado === "A" ? "B" : "A", 0);
  };

  const irAnterior = () => {
    if (!esEscritorio && indiceMovil > 0) {
      setIndiceMovil(indiceMovil - 1);
      return;
    }
    voltear(lado === "A" ? "B" : "A", esEscritorio ? 0 : 2);
  };

  const irA = (indiceGlobal: number) => {
    const destino: Lado = indiceGlobal < 3 ? "A" : "B";
    voltear(destino, indiceGlobal % 3);
  };

  const desplazamientoFila = esEscritorio ? "none" : `translateX(-${indiceMovil * 100}%)`;

  return (
    <div className="libro">
      <div className="libro__escenario">
        <div className={`libro__hoja${lado === "B" ? " libro__hoja--volteada" : ""}`}>
          <div className="libro__cara libro__cara--frontal">
            <div className="libro__fila" style={{ transform: desplazamientoFila }}>
              <Panel isActive={lado === "A" && indiceMovil === 0} pliegue="derecho">
                <Cover />
              </Panel>
              <Panel isActive={lado === "A" && indiceMovil === 1} pliegue="derecho">
                <ScheduleTable bloque={itinerarioSabado} />
              </Panel>
              <Panel isActive={lado === "A" && indiceMovil === 2} pliegue="ninguno">
                <ScheduleTable bloque={itinerarioDomingo} />
              </Panel>
            </div>
          </div>

          <div className="libro__cara libro__cara--trasera">
            <div className="libro__fila" style={{ transform: desplazamientoFila }}>
              <Panel isActive={lado === "B" && indiceMovil === 0} pliegue="derecho">
                <CultoOrder culto={cultoApertura} />
              </Panel>
              <Panel isActive={lado === "B" && indiceMovil === 1} pliegue="derecho">
                <CultoOrder culto={ordenSabado} />
              </Panel>
              <Panel isActive={lado === "B" && indiceMovil === 2} pliegue="ninguno">
                <CultoOrder culto={ordenDomingo} />
              </Panel>
            </div>
          </div>
        </div>
      </div>

      <Navigation
        total={6}
        current={actual}
        onPrev={irAnterior}
        onNext={irSiguiente}
        onGoTo={irA}
        labels={ETIQUETAS}
      />
    </div>
  );
}

export default TrypticBook;
