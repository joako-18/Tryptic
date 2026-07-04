export interface ItemHorario {
  actividad: string;
  horario: string;
  destacado?: boolean;
}

export interface BloqueHorario {
  dia: string;
  fecha: string;
  items: ItemHorario[];
}

export interface CultoOrdenData {
  titulo: string;
  subtitulo?: string;
  pasajes?: string[];
  puntos: string[];
}

export type PanelTheme = "rojo" | "azul" | "negro" | "blanco";

export interface PanelData {
  id: string;
  theme: PanelTheme;
  eyebrow: string;
  kind: "portada" | "horario" | "culto";
}
