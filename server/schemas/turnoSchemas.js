import { z } from "zod";

export const reservarTurnoSchema = z.object({
    params: z.object({
        id: z.string().uuid()
    }),
    body: z.object({
        pacienteId: z.string().uuid()
    })
})

export const cancelarTurnoRequestSchema = z.object({
    params: z.object({
        id: z.string().uuid()
    }), 
    body: z.object({
        motivo: z.string.min(5),
        idUsuario: z.string().uuid()
    })
})

export const obtenerHistorialTurnosSchema = z.object({
    pacienteId: z.string().uuid(),
})