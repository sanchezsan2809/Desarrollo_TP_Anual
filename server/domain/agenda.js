import { Medico } from "./medico";
import { Turno } from "./turno";
import { Practica } from "./practica";
import { Especialidad } from "./especialidad";
import { EstadoTurno } from "./estadoTurno";
import { horaAMinutos, fechaDesdeDisponibilidad } from "./fecha";

export class Agenda{

    generarTurnosPara(especialidad, medico){     
        const turnos = [] 

        medico.disponibilidades.forEach(disponibilidad =>{
            
            let inicio = horaAMinutos(disponibilidad.horaDesde)
            const fin = horaAMinutos(disponibilidad.horaHasta)

            const duracion = especialidad.duracionTurnoEnMins

            while(inicio + duracion <= fin){

                const fecha = fechaDesdeDisponibilidad(
                    disponibilidad.diaSemana,
                    inicio
                )

                medico.sedes.forEach(sede => {
                    const turno = new Turno(
                        medico,
                        fecha,
                        EstadoTurno.DISPONIBLE
                    )

                    turnos.push(turno)
                })

                inicio += duracion
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