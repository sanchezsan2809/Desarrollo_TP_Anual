import { Medico } from "../domain/medico.js";
import {
    BadRequestError,
    TurnoNotFoundError,
    UnprocessableEntityError
} from "../errors/appError.js"


export class MedicoRepository{
    save(medico) {
        throw new Error("Not implemented");
    }

    findById(id) {
        throw new Error("Not implemented");
    }

    findAll() {
        throw new Error("Not implemented");
    }
}




