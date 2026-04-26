export class AppError extends Error{
    constructor(message){
        super(message)
        this.timestamp = new Date().toISOString()
    }
}

export class BadRequestError extends AppError{}

export class NotFoundError extends AppError{}

export class TurnoNotFoundError extends NotFoundError{}

export class PacienteNotFoundError extends NotFoundError{}

export class MedicoNotFoundError extends NotFoundError{}

export class ConflictError extends AppError{}

export class NotAllowedError extends AppError{}

export class UnprocessableEntityError extends AppError{}