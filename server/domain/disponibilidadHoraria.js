import { DiaSemana } from "./diaSemana";
import { Practica } from "./practica";
import { Especialidad } from "./especialidad";
import { horaAMinutos } from "./fecha";

export class DisponibilidadHoraria {
    constructor(diaSemana, horaDesde, horaHasta) {
        this.diaSemana = diaSemana;
        this.horaDesde = horaDesde;
        this.horaHasta = horaHasta;
    }

    validarSesion(servicio){
        const duracionDisponibilidad = horaAMinutos(this.horaHasta - this.horaDesde);
        return duracionDisponibilidad >= servicio.duracionTurnoEnMins;
    }
    
}
