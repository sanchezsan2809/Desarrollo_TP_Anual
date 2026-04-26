import { TurnoService } from "../services/turnoService.js"


export class TurnoController {
    constructor({ turnoService }){
        this.turnoService = turnoService
    }

    //  Paciente
    reservar = async(req, res, next) =>{
        try {
            const { id } = req.params
            const{ pacienteId } = req.body

            const turno = await this.turnoService.reservar({id, pacienteId})

            res.status(200).json(turno)
        } catch (error) {
            next(error)
        }
    }

    cancelarTurno = async(req, res, next) =>{
        try {
            const { id } = req.params
            const { motivo } = req.body
            const { idUsuario } = req.query

            await this.turnoService.cancelar({
                id, 
                motivo, 
                idUsuario})

            res.sendStatus(204)
        } catch (error) {
            next(error)
        }
    }

    obtenerHistorialTurnos = async(req, res, next) =>{
        const { pacienteId, estado, fechaDesde, fechaHasta } = req.query
        
        try {
            const turnos = await this.turnoService.obtenerHistorial({
                pacienteId, 
                estado,
                fechaDesde,
                fechaHasta
            })

            res.json(turnos)
        } catch (error) {
            next(error)
        }
    }
}