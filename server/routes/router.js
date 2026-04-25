import express from "express"
import healthRoutes from "./healthRoutes.js"
import turnoRoutes from "./turnoRoutes.js"

const router = express.Router()

router.use('/health', healthRoutes)
router.use('/turnos', turnoRoutes)


export default router