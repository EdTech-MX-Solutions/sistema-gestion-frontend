import InterfaceTel from "./numeroTelefonico";

interface InterfaceParent {
    id: number;
    curp: string;
    leerYescribir: string;
    gradoMaximoDeEstudios: string;
    ocupacion: string;
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    correo: string;
    fechaNacimiento: string;
    sexo: string;
    paisOrigen: string;
    estadoOrigen: string;
    redesSociales: string[];
    tipoIdentificacion: string;
    noIdentificacion: string;
    esPrincipal: string;
    parentesco: string;
    estadoCivil: string;
    numeros: InterfaceTel[];
}

export default InterfaceParent;
