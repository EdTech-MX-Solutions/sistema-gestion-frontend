import InterfacePreguntasCondiciones from "./preguntasCondiciones";

interface InterfaceRespuestasMedicasCondiciones{
    pregunta : InterfacePreguntasCondiciones,
    respuestaCorta : string,
    respuestaEspecifica : string | null,
}
export default InterfaceRespuestasMedicasCondiciones;