interface InterfaceAlumno {
    noBoleta: string,
    nombres: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    aniosPreescolar: number;
    fechaNacimiento: string,
    edad: number | null;
    paisOrigen: string,
    sexo: string,
    estatus: string,
    entidad: string,
    grado: string | null,
    grupo: string | null,
    actualizarDatosMedicos: boolean | null,
    curp: string
}

export default InterfaceAlumno;
