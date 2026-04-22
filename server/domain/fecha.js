import { DisponibilidadHoraria } from "./disponibilidadHoraria"

export function horaAMinutos(horaStr){
        const [horas, minutos] = horaStri.split(":").map(Number)
        return horas * 60 + minutos
}

export function fechaDesdeDisponibilidad(diaSemanaEnum, horaDesde){
        const hoy = new Date()

        const diaActual = hoy.getDay()
        

        let diferencia = diaSemanaEnum - diaActual
        if(diferencia <= 0) diferencia += 7

        const fecha = new Date(hoy)
        fecha.setDate(hoy.getDate() + diferencia)

        const [horas, minutos] =  horaDesde.split(":").map(Number)
        fecha.setHours(horas, minutos, 0, 0)

        return fecha
}