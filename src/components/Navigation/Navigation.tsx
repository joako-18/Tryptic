import "./Navigation.css";

interface Props {
  total: number;
  current: number;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;
  labels: string[];
}

function Navigation({ total, current, onPrev, onNext, onGoTo, labels }: Props) {
  return (
    <div className="nav">
      <button className="nav__flecha" onClick={onPrev} aria-label="Página anterior">
        ‹
      </button>

      <div className="nav__centro">
        <p className="nav__etiqueta">{labels[current]}</p>
        <div className="nav__puntos" role="tablist" aria-label="Páginas del tríptico">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              className={`nav__punto${i === current ? " nav__punto--activo" : ""}`}
              onClick={() => onGoTo(i)}
              aria-label={`Ir a ${labels[i]}`}
              aria-selected={i === current}
              role="tab"
            />
          ))}
        </div>
      </div>

      <button className="nav__flecha" onClick={onNext} aria-label="Página siguiente">
        ›
      </button>
    </div>
  );
}

export default Navigation;
