import { Turno } from "../domain/paciente.js";
import {
    BadRequestError,
    TurnoNotFoundError,
    UnprocessableEntityError
} from "../errors/appError.js"


export class TurnoRepository{
    save(turno){
        throw new Error("Not implemented")
    }

    findById(id){
        throw new Error("Not implemented")
    }

    findall(){
        throw new Error("Not implemented")
    }
}

export class TurnoRepositoryMock extends TurnoRepository{
    constructor(){
        super()
        this.turnos = []
        this.nextId = 1
    }

    save(turno){
        if(!turno.id){
            turno.id = this.nextId++
            this.turnos.push(turno)
        }else{
            const index = this.turnos.findIndex(t => t.id === turno.id)
            this.turnos[index] = turno
        }

        return turno
    }

    findById(id){
        return this.turnos.find(t => t.id === id)
    }

    findall(){
        return this.turnos
    }
}