import { NotFoundError } from "./appError";

export function notFoundHandler(req, res, next){
    next(new NotFoundError(`Ruta ${req.originalUrl} no encontrada`))
}