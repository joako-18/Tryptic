import { useState, useRef } from "react";
import Panel from "../Panel/Panel";
import Cover from "../Cover/Cover";
import ScheduleTable from "../ScheduleTable/ScheduleTable";
import CultoOrder from "../CultoOrder/CultoOrder";
import SocialPanel from "../SocialPanel/SocialPanel";
import Navigation from "../Navigation/Navigation";
import { itinerarioSabado, itinerarioDomingo } from "../../data/itinerario";
import { cultoApertura, ordenSabado, ordenDomingo } from "../../data/cultos";
import { sesionUno, sesionDos } from "../../data/sesiones";
import { useIsDesktop } from "../../hooks/useIsDesktop";
import "./TrypticBook.css";

const ETIQUETAS = [
  "Portada",
  "Itinerario · sábado",
  "Itinerario · domingo",
  "Culto de apertura",
  "Orden de culto · sábado",
  "Orden de culto · domingo",
  "1° Sesión de negocios",
  "2° Sesión de negocios",
  "Contacto y redes",
];

function TrypticBook() {
  const [indiceMovil, setIndiceMovil] = useState(0);
  const esEscritorio = useIsDesktop();

  const actual = indiceMovil;

  const page = Math.floor(indiceMovil / 3);
  
  const frontPageRef = useRef(0);
  const backPageRef = useRef(1);

  if (page % 2 === 0) {
    frontPageRef.current = page;
  } else {
    backPageRef.current = page;
  }

  const rotation = page * 180;

  const irSiguiente = () => {
    if (indiceMovil < 8) {
      if (!esEscritorio) {
        setIndiceMovil(indiceMovil + 1);
      } else {
        setIndiceMovil(Math.min(8, (page + 1) * 3));
      }
    }
  };

  const irAnterior = () => {
    if (indiceMovil > 0) {
      if (!esEscritorio) {
        setIndiceMovil(indiceMovil - 1);
      } else {
        setIndiceMovil(Math.max(0, (page - 1) * 3));
      }
    }
  };

  const irA = (indiceGlobal: number) => {
    setIndiceMovil(indiceGlobal);
  };

  const offsetFront = page % 2 === 0 ? indiceMovil % 3 : 0;
  const offsetBack = page % 2 !== 0 ? indiceMovil % 3 : 0;
  
  const transformFront = esEscritorio ? "none" : `translateX(-${offsetFront * 100}%)`;
  const transformBack = esEscritorio ? "none" : `translateX(-${offsetBack * 100}%)`;

  const renderPage = (p: number, isActiveFace: boolean) => {
    switch (p) {
      case 0:
        return (
          <>
            <Panel isActive={isActiveFace && indiceMovil % 3 === 0} pliegue="derecho">
              <Cover />
            </Panel>
            <Panel isActive={isActiveFace && indiceMovil % 3 === 1} pliegue="derecho">
              <ScheduleTable bloque={itinerarioSabado} showScrollButtons={true} />
            </Panel>
            <Panel isActive={isActiveFace && indiceMovil % 3 === 2} pliegue="ninguno">
              <ScheduleTable bloque={itinerarioDomingo} />
            </Panel>
          </>
        );
      case 1:
        return (
          <>
            <Panel isActive={isActiveFace && indiceMovil % 3 === 0} pliegue="derecho">
              <CultoOrder culto={cultoApertura} />
            </Panel>
            <Panel isActive={isActiveFace && indiceMovil % 3 === 1} pliegue="derecho">
              <CultoOrder culto={ordenSabado} />
            </Panel>
            <Panel isActive={isActiveFace && indiceMovil % 3 === 2} pliegue="ninguno">
              <CultoOrder culto={ordenDomingo} />
            </Panel>
          </>
        );
      case 2:
        return (
          <>
            <Panel isActive={isActiveFace && indiceMovil % 3 === 0} pliegue="derecho">
              <CultoOrder culto={sesionUno} eyebrow="Orden del día" showScrollButtons={true} />
            </Panel>
            <Panel isActive={isActiveFace && indiceMovil % 3 === 1} pliegue="derecho">
              <CultoOrder culto={sesionDos} eyebrow="Orden del día" />
            </Panel>
            <Panel isActive={isActiveFace && indiceMovil % 3 === 2} pliegue="ninguno">
              <SocialPanel />
            </Panel>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="libro">
      <div className="libro__escenario">
        <div 
          className="libro__hoja" 
          style={{ transform: `rotateY(${rotation}deg)` }}
        >
          <div className="libro__cara libro__cara--frontal">
            <div className="libro__fila" style={{ transform: transformFront }}>
              {renderPage(frontPageRef.current, page % 2 === 0)}
            </div>
          </div>

          <div className="libro__cara libro__cara--trasera">
            <div className="libro__fila" style={{ transform: transformBack }}>
              {renderPage(backPageRef.current, page % 2 !== 0)}
            </div>
          </div>
        </div>
      </div>

      <Navigation
        total={9}
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
