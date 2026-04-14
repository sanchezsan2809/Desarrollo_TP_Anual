import { Usuario } from "./usuario";

export class Notificacion{
    constructor(id, destinatario, remitente, mensaje, fechaHoraCreacion, fechaHoraLeida, leida){
        this.id = id;
        this.destinatario = destinatario;
        this.remitente = remitente;
        this.mensaje = mensaje;
        this.fechaHoraCreacion = fechaHoraCreacion;
        this.fechaHoraLeida = fechaHoraLeida;
        this.leida = leida;
    }

    marcarComoLeida(){
        this.leida=true;
        this.fechaHoraLeida=new Date();
    }
}