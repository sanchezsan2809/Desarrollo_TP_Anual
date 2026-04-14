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

    obtenerCobertura(especialidad){
        return especialidad.NivelCobertura
    } // devuelve NivelCobertura

    obtenerCobertura(practica){
        return practica.NivelCobertura
    }// devuelve NivelCobertura
}