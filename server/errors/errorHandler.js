import { NotAllowedError, NotFoundError, PacienteNotFoundError, TurnoNotFoundError } from "./appError"

export const errorHandler = (err, req, res, next) =>{
    if(err instanceof TurnoNotFoundError){
        return res.status(404).json({ error: err.message})
    }

    if(err instanceof PacienteNotFoundError){
        return res.status(404).json({ error: err.message})
    }

    if(err instanceof NotAllowedError){
        return res.status(403).json({ error: err.message})
    }

    if(err.name === "ZodError"){
        return res.status(400).json({ error: err.errors})
    }

    //  Fallback
    console.error(err)
    return res.status(500).json({error: "Error interno del servidor"})
}