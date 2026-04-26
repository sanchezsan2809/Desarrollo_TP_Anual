import { MedicoRepository } from "../repositories/medicoRepository.js";
import { Medico } from "../domain/medico.js";
import { DisponibilidadHoraria } from "../domain/disponibilidadHoraria.js";
import { 
    BadRequestError, 
    PacienteNotFoundError,
    NotAllowedError, 
    MedicoNotFoundError, 
    ConflictError, 
    UnprocessableEntityError
} from "../errors/appError.js";

export class MedicoService{
    constructor({medicoRepository}){
        this.medicoRepository = medicoRepository
    }

    consultarDisponibilidades({idMedico, servicio, idServicio}){
        
        
        const medico = await this.findById(idMedico)
        const servicios = this.especialidades.concat(this.practicas)
        
        if(!medico.puedePracticar(servicio)){
            throw new BadRequestError("El médico no realiza esta práctica o especialidad")
        }
        
        const disponibilidades = medico.disponibilidades.filter(
            (disponibilidad) =>{
                disponibilidad.validarSesion(servicio)
        })

        return disponibilidades
    }

    findById(idMedico){
        
        const medico = await this.medicoRepository.findById(idMedico)

        if(!medico){
            throw new MedicoNotFoundError("No se encontró el médico")
        }
    }
}