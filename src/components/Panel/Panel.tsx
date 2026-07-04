import type { ReactNode } from "react";
import "./Panel.css";

interface Props {
  children: ReactNode;
  isActive: boolean;
  pliegue?: "izquierdo" | "derecho" | "ninguno";
}

function Panel({ children, isActive, pliegue = "ninguno" }: Props) {
  return (
    <div
      className={`panel${isActive ? " panel--activo" : ""} panel--pliegue-${pliegue}`}
      aria-hidden={!isActive}
    >
      {children}
    </div>
  );
}

export default Panel;
