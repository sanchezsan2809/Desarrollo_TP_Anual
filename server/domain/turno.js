import { Medico } from "./medico";
import { Paciente } from "./paciente"
import { Sede } from "./sede"
import { Practica } from "./practica"
import { EstadoTurno } from "./estadoTurno"
import { CambioEstadoTurno } from "./cambioEstadoTurno";
import { FactoryNotificacion } from "./factoryNotificacion";

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
        
        cambioEstado = CambioEstadoTurno(new Date()
        , nuevoEstado
        , this
        , quien
        , motivo) 
        
        this.historialEstados.push(cambioEstado)

        FactoryNotificacion.crearSegunEstadoTurno(this)
    }

    asignarPaciente(paciente){
        this.paciente = paciente
    }

    asignarPractica(practica){
        this.practica = practica
    }

    static generarId(){
        this.numeroTurno = this.numeroTurno + 1
        return this.numeroTurno
    }
    
    remitenteUltimoCambioEstado(){
        indiceUltimoCambio = this.historialEstados.length - 1
        ultimoCambioDeEstado = this.historialEstados[indiceUltimoCambio]
        return ultimoCambioDeEstado.usuario
    }

    destinatarioUltimoCambioEstado(){
        destinatario = this.paciente
        if (this.remitenteUltimoCambioEstado() === this.paciente){
            destinatario = this.medico
        }
        return destinatario.usuario
    }

}
