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

    obtenerCobertura(servicio){
        const cobertura =
            this.coberturasEspecialidad.find(c => c.especialidad.id === servicio.id) ||
            this.coberturasPractica.find(c => c.practica.id === servicio.id);
        
        return cobertura ? cobertura.nivel : NivelCobertura["NO CUBIERTO"];
    }
}