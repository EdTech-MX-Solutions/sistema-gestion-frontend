import InterfaceAlumno from "./alumno"

interface InterfaceUsuarioPendiente{
    estatus: string,
    gradoSolicitado: string,
    idTramite: number,
    noBoleta: string
    nombre: string,
    alumno : InterfaceAlumno
}

export default InterfaceUsuarioPendiente;