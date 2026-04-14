import { Notificacion } from "./notificacion";
import { Turno } from "./turno";

export class FactoryNotificacion {

    crearSegunEstadoTurno(turno) {
        let horaCreacion = new Date();
        let horaLeida = 0;

        if (turno.ultimoEstado() !== "DISPONIBLE" | turno.ultimoEstado() !== "REALIZADO") {
            return new Notificacion(
                turno.id,
                turno.destinatario(),
                turno.remitente(),
                "El turno para " + turno.practica + " fue " + turno.ultimoEstado(),
                horaCreacion,
                horaLeida,
                false);

        }
    }

    crearRecordatorio(turno){
        const fechaDeHoy = new Date();

        if ()
    }
    
}
