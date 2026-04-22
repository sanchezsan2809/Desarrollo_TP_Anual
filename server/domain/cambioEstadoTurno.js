import { Turno } from "./turno";
import { Usuario } from "./usuario";
import { EstadoTurno } from "./estadoTurno";

export class CambioEstadoTurno{
    constructor(fechaHoraIngreso, estado, turno, usuario, motivo){
        this.fechaHoraIngreso = fechaHoraIngreso;
        this.estado = estadoTurno;
        this.turno = turno;
        this.usuario = usuario;
        this.motivo = motivo;
    }
}