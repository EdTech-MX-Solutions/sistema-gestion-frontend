import InterfacePreguntasMedicas from "./preguntasMedicas"

interface InterfaceRespuestasPreguntasMedicas{
    pregunta : InterfacePreguntasMedicas,
    respuestaCorta : string,
    respuestaEspecifica : string | null,
}
export default InterfaceRespuestasPreguntasMedicas;