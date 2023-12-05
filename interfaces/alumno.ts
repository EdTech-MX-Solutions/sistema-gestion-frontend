interface InterfaceAlumno {
    no_boleta: string;
    curp: string;
    nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
    aniosPreescolar: number;
    fecha_nacimiento: string;
    edad: number;
    pais_origen: string;
    sexo: string;
    estatus: string;
    entidad_nacimiento: string,
    grado: string | null,
    grupo: string | null,
    actualizarDatosMedicos: boolean | null,
}

export default InterfaceAlumno;
