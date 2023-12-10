interface InterfacePeriodo {
    anioInicio: number;
    anioFin: number;
    periodoCalificaciones: boolean;
    periodoPreinscripciones: boolean;
    periodoReinscripciones?: boolean;
    finalizado?: boolean;
}

export default InterfacePeriodo;