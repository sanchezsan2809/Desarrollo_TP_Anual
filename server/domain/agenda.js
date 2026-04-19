import { Medico } from "./medico";
import { Turno } from "./turno";
import { Practica } from "./practica";
import { Especialidad } from "./especialidad";
import { EstadoTurno } from "./estadoTurno";
import { horaAMinutos } from "./fecha";

export class Agenda{

    //generarTurnosPara(Oftamologia,medico)
    //generarTurnoPara(ecografia,medico)
    generarTurnosPara(especialidad, medico){     
        const turnos = [] 

        medico.disponibilidades.forEach(disponibilidad =>{
            
            let horaDesde = horaAMinutos(disponibilidad.horaDesde)
            const horaHasta = horaAMinutos(disponibilidad.horaHasta)

            const duracion = especialidad.duracionTurnoEnMins

            while(horaDesde + duracion <= horaHasta){
                medico.sedes.forEach(sede => {
                    const turno = new Turno(
                        Turno.generarId(),
                        medico,
                        new Date(horaDesde),
                        sede,
                        EstadoTurno[1]
                    )
                    turnos.push(turno)
                })

                horaDesde += duracion
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