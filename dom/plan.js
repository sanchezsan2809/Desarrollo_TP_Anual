import { CoberturaEspecialidad } from "./coberturaEspecialidad";
import { CoberturaPractica } from "./coberturaPractica";
import { NivelCobertura } from "./nivelCobertura"

export class Plan{
    constructor(id, nombre, coberturasEspecialidad, coberturasPractica){
        this.id = id;
        this.nombre = nombre;
        this.coberturasEspecialidad = coberturasEspecialidad;
        this.coberturasPractica = coberturasPractica;
    }

    obtenerCobertura(entidad){
        const cobertura =
            this.coberturasEspecialidad.find(c => c.especialidad.nombre === entidad.nombre) ||
            this.coberturasPractica.find(c => c.practica.nombre === entidad.nombre);
        
        return cobertura ? cobertura.nivel : 3;
    }
}