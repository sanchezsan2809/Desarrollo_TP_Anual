import { Medico } from "./medico";
import { Paciente } from "./paciente"
import { Sede } from "./sede"
import { Practica } from "./practica"
import { EstadoTurno } from "./estadoTurno"
import { CambioEstadoTurno } from "./cambioEstadoTurno";

export class Turno {
    static numeroTurno = 0

    constructor(id, medico, fechaHora, sede, estado) {
        this.id = id
        this.medico = medico, 
        this.fechaHora = fechaHora,
        this.sede = sede, 
        this.estado = estado,
        this.historialEstados = []
    }

    actualizarEstado(nuevoEstado, quien, motivo){
        this.estado = nuevoEstado 
        
        cambioEstado = CambioEstadoTurno(Date.prototype.getDay()
        , nuevoEstado
        , this
        , quien
        , motivo) 
        
        this.historialEstados.push(cambioEstado)
    }

    asignarPaciente(paciente){
        this.paciente = paciente
    }

    asignarPractica(practica){
        this.practica = practica
    }

    static generarId(){
        numeroTurno = this.numeroTurno + 1
        return this.numeroTurno
    }

    ultimoEstado(){
        return this.historialEstados.at(this.historialEstados.length -1)
    }
    
    remitente(){
        ultimoCambioDeEstado = this.ultimoEstado()
        return ultimoCambioDeEstado.usuario
    }

    destinatario(){
        destinatario = this.paciente
        if (this.remitente() === this.paciente){
            destinatario = this.medico
        }
        return destinatario.usuario
    }

}
