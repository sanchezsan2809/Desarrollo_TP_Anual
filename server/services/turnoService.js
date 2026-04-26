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

    reservar(id, pacienteId){
        const turno = this.obtenerTurnoPorId(id)
        const paciente = this.pacienteRepository.obtenerPorId(pacienteId)
        
        const turnoModificado = turno.asignarPaciente(paciente)

        return this.turnoRepository.guardar(turnoModificado)
    }

    cancelar(id, motivo, idUsuario){
        const turno = this.obtenerTurnoPorId(id)
        let usuario = null

        if(turno.paciente && turno.paciente.usuario.id === idUsuario){
            usuario = turno.paciente.usuario
        } else if(turno.medico && turno.medico.usuario.id === idUsuario){
            usuario = turno.medico.usuario
        }

        if(!usuario){
            throw new NotAllowedError("El usuario no puede cancelar este turno")
        }

        const turnoModificado = turno.actualizarEstado(EstadoTurno.CANCELADO, usuario, motivo)

        return this.turnoRepository.guardar(turnoModificado)
    }

    obtenerTurnoPorId(id){
        const turno = this.turnoRepository.obtenerPorId(id)

        if(!turno){
            throw new TurnoNotFoundError()
        }

        return turno
    }

    obtenerPacientePorId(id){
        const paciente = this.pacienteRepository.obtenerPorId(id)

        if(!paciente){
            throw new PacienteNotFoundError()
        }

        return paciente
    }

    obtenerMedicoPorId(id){
        const medico = this.medicoRepository.obtenerPorId(id)

        if(!medico){
            throw new MedicoNotFoundError()
        }

        return medico
    }
}