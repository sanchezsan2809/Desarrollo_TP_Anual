import { Medico } from "./medico";
import { Turno } from "./turno";
import { Practica } from "./practica";
import { Especialidad } from "./especialidad";
import { EstadoTurno } from "./estadoTurno";
import { horaAMinutos } from "../fecha";

export class Agenda{

    //generarTurnosPara(Oftamologia,medico)
    //generarTurnoPara(ecografia,medico)
    generarTurnosPara(especialidad, medico){     
        turnos = [] 

        medico.disponibilidades.forEach(disponibilidad =>{
            
            const horaDesde = horaAMinutos(disponibilidad.horaDesde)
            const horaHasta = horaAMinutos(disponibilidad.horaHasta)

            const duracion = especialidad.duracionTurnoEnMins

            if(duracion < horaHasta - horaDesde){
                medico.sedes.forEach(sede => {
                    turno = new Turno(Turno.generarId()
                    , medico
                    , new Date(disponibilidad.horaDesde())
                    , sede
                    , EstadoTurno[1])

                    turnos.push(turno)
                })
            }
        })

        return turnos
    }

    generarTurnosPara(practica, medico){
        //return turno
        
    }

    refrescarTurnosSegunDisponibilidadDe(medico){
        //return turno
    }


}