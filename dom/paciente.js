import { Usuario } from "./usuario";
import { ObraSocial } from "./obraSocial";
import { Plan } from "./plan";

export class Paciente{
    constructor(id, usuario, dni, nombre, obraSocial, plan){
        this.id = id;
        this.usuario = usuario;
        this.dni = dni;
        this.nombre = nombre;
        this.obraSocial = obraSocial;
        this.plan = plan;
    }
}