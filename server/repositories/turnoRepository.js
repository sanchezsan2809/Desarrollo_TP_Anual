import { Turno } from "../domain/paciente.js";
import {
    BadRequestError,
    TurnoNotFoundError,
    UnprocessableEntityError
} from "../errors/appError.js"


export class TurnoRepository{
    async save(turno){
        throw new Error("Not implemented")
    }

    async findById(id){
        throw new Error("Not implemented")
    }

    async findall({pacienteId, medicoId, estado, fechaDesde, fechaHasta} = {}){
        throw new Error("Not implemented")
    }
}

export class TurnoRepositoryMock extends TurnoRepository{
    constructor(){
        super()
        this.turnos = []
        this.nextId = 1
    }

    async save(turno){
        if(!turno.id){
            turno.id = this.nextId++
            this.turnos.push(turno)
        }else{
            const index = this.turnos.findIndex(t => t.id === turno.id)
            this.turnos[index] = turno
        }

        return turno
    }

    async findById(id){
        return this.turnos.find(t => t.id === id)
    }

    async findall({ pacienteId, medicoId, estado, fechaDesde, fechaHasta}){
        return this.turnos.filter(turno => {
        if (filtros.pacienteId && turno.paciente?.usuario?.id !== filtros.pacienteId) return false;
        if (filtros.medicoId && turno.medico?.usuario?.id !== filtros.medicoId) return false;
        if (filtros.estado && turno.estado !== filtros.estado) return false;
        if (filtros.fechaDesde && turno.fechaHora < filtros.fechaDesde) return false;
        if (filtros.fechaHasta && turno.fechaHora > filtros.fechaHasta) return false;

        return true;
        })
    }
}