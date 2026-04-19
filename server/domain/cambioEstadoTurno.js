import { Turno } from "./turno";
import { Usuario } from "./usuario";
import { EstadoTurno } from "./estadoTurno";

export class CambioEstadoTurno{
    constructor(fechaHoraIngreso, estadoTurno, turno, usuario, motivo){
        this.fecha = fechaHoraIngreso;
        this.estado = estadoTurno;
        this.turno = turno;
        this.usuario = usuario;
        this.motivo = motivo;
    }
}