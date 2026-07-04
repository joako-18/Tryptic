import type { BloqueHorario } from "../types";

export const itinerarioSabado: BloqueHorario = {
  dia: "Sábado",
  fecha: "4 de julio",
  items: [
    { actividad: "Inscripción", horario: "9:00 – 10:00 AM" },
    { actividad: "Culto de apertura", horario: "10:00 – 10:30 AM", destacado: true },
    { actividad: "Rompehielos", horario: "10:30 – 11:00 AM" },
    { actividad: "Primera reunión", horario: "11:00 – 12:30 PM" },
    { actividad: "Receso", horario: "12:30 – 1:00 PM" },
    { actividad: "Continúa la reunión", horario: "1:00 – 2:00 PM" },
    { actividad: "Comida", horario: "2:00 – 3:00 PM" },
    { actividad: "Taller: la labor de los ministerios", horario: "3:00 – 4:00 PM" },
    { actividad: "Aseo personal", horario: "4:00 – 5:30 PM" },
    { actividad: "Taller: la labor de la directiva", horario: "5:30 – 6:00 PM" },
    { actividad: "Dinámicas", horario: "6:00 – 6:30 PM" },
    { actividad: "Culto unido y toma de protesta", horario: "6:30 – 8:00 PM", destacado: true },
    { actividad: "Cena", horario: "8:00 – 9:00 PM" },
    { actividad: "Planeación por ministerios", horario: "9:00 – 11:00 PM" },
  ],
};

export const itinerarioDomingo: BloqueHorario = {
  dia: "Domingo",
  fecha: "5 de julio",
  items: [
    { actividad: "Desayuno", horario: "7:00 – 8:00 AM" },
    { actividad: "Segunda reunión", horario: "8:00 – 10:00 AM" },
    { actividad: "Arreglarse para el culto", horario: "10:00 – 10:45 AM" },
    { actividad: "Culto de clausura", horario: "10:45 – 1:00 PM", destacado: true },
    { actividad: "Comida", horario: "1:00 – 2:00 PM" },
    { actividad: "Regreso a casa", horario: "2:00 PM" },
  ],
};
