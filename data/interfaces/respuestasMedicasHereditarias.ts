import InterfacePreguntasHereditarias from "./preguntasHereditarias"

interface InterfaceRespuestasMedicasHereditarias{
    pregunta : InterfacePreguntasHereditarias,
    respuestaCorta : string,
    respuestaEspecifica : string | null,
}
export default InterfaceRespuestasMedicasHereditarias;