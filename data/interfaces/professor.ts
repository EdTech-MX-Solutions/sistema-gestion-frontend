import InterfaceTel from "./numeroTelefonico";

interface InterfaceProfessor {
    idProfesor : string;
    nombre : string;
    apellidoPaterno : string;
    apellidoMaterno : string;
    email : string;
    activo : boolean;
    diretivo : boolean;
    noCedulaProfesional : number;
    numero : InterfaceTel[]
}

export default InterfaceProfessor;