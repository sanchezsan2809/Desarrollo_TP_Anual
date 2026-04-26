import { z } from "zod";

export const consultarDisponibilidadSchema = z.object({
    params: z.object({
        id: z.string().uuid()
    }),
    body: z.object({
        servicio: z.string().min(5),
        idServicio: z.string().uuid()
    })
})