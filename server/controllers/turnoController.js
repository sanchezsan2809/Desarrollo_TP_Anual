import { TurnoService } from "../services/turnoService.js"

export class TurnoController {
    constructor({ turnoService }){
        this.turnoService = turnoService
    }

    //  Paciente
    reservar = async(req, res) =>{
        try {
            const { id } = req.params
            const{ pacienteId } = req.body

            await this.turnoService.reservar(id, pacienteId)

            res.sendStatus(200)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    cancelarTurno = async(req, res) =>{
        try {
            const { id } = req.params
            const { motivo, idUsuario } = req.body

            await this.turnoService.cancelar(id, motivo, idUsuario)

            res.sendStatus(200)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }
}