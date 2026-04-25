import { Router } from 'express'
import { TurnoController } from '../controllers/turnoController.js'
import { TurnoService } from "../services/turnoService.js"
import { validate } from '../middlewares/validate.js'
import { 
    reservarTurnoSchema,
    cancelarTurnoRequestSchema
 } from '../schemas/turnoSchemas.js'



 const router = Router()
 const turnoService = new TurnoService()
 const controller = new TurnoController({turnoService})

router.post(
    "/:id/reservar",
    validate(reservarTurnoSchema),
    controller.reservar()
)

router.post(
    "/:id/cancelar",
    validate(cancelarTurnoRequestSchema),
    controller.cancelar()
)

export default router