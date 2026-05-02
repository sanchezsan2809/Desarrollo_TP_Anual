import { AppError, NotAllowedError, NotFoundError, PacienteNotFoundError, TurnoNotFoundError } from "./appError"

export const errorHandler = (err, req, res, next) =>{
    console.error({
        timeStamp: new Date().toISOString(), 
        method: req.method,
        path: req.originalUrl,
        error: {
            name: err.name,
            message: err.message, 
            stack: err.stack
        }
    })

    if(err instanceof AppError)
    {
        return res.status(err.statusCode)
        .json( {
            status: err.status,
            message: err.message,
            timeStamp: err.timeStamp
        })

    }
    
    return res.status(500)

    
}