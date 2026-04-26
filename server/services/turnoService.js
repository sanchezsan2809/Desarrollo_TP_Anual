import{ Turno } from "../domain/turno.js"
import { Paciente } from "../domain/paciente.js";
import { Medico } from "../domain/medico.js";
import { EstadoTurno } from "../domain/estadoTurno.js";
import { TurnoRepository } from "../repositories/turnoRepository.js";
import { PacienteRepository } from "../repositories/pacienteRepocitory.js"
import { MedicoRepository } from "../repositories/medicoRepository.js"
import { 
    BadRequestError, 
    PacienteNotFoundError,
    NotAllowedError, 
    TurnoNotFoundError, 
    MedicoNotFoundError, 
    ConflictError, 
    UnprocessableEntityError
} from "../errors/appError.js";

export class TurnoService{
    constructor({ turnoRepository, pacienteRepository, medicoRepository }){
        this.turnoRepository = turnoRepository
        this.pacienteRepository = pacienteRepository
        this.medicoRepository = medicoRepository
    }

    async reservar({id, pacienteId}){
        const turno = await this.findById(id)
        const paciente = await this.pacienteRepository.findById(pacienteId)
        
        const turnoModificado = turno.asignarPaciente(paciente)

        return this.turnoRepository.save(turnoModificado)
    }

    async cancelar({id, motivo, idUsuario}){
        const turno = await this.findById(id)
        let usuario = null

        usuario = turno.obtenerUsuario(idUsuario)

        if(!usuario){
            throw new NotAllowedError("El usuario no puede cancelar este turno")
        }

        const turnoModificado = turno.actualizarEstado(
            EstadoTurno.CANCELADO, 
            usuario, 
            motivo)

        return this.turnoRepository.save(turnoModificado)
    }

    obtenerHistorial({ pacienteId, estado, fechaDesde, fechaHasta}){
        return this.turnoRepository.findAll({
            pacienteId,
            estado,
            fechaDesde,
            fechaHasta
        })
    }

    async findById(id){
        const turno = await this.turnoRepository.findById(id)

        if(!turno){
            throw new TurnoNotFoundError("Turno no encontrado")
        }

        return turno
    }

    async obtenerPacientePorId(id){
        const paciente = await this.pacienteRepository.findById(id)

        if(!paciente){
            throw new PacienteNotFoundError("Paciente no encontrado")
        }

        return paciente
    }

    async obtenerMedicoPorId(id){
        const medico = await this.medicoRepository.findById(id)

        if(!medico){
            throw new MedicoNotFoundError("Medico no encontrado")
        }

        return medico
    }
}