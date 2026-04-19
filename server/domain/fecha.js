export function horaAMinutos(horaStr){
        const [horas, minutos] = horaStri.split(":").map(Number)
        return horas * 60 + minutos
}
