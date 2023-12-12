import InterfacePreguntasCondiciones from "./preguntasCondiciones"
import InterfacePreguntasHereditarias from "./preguntasHereditarias"
import InterfacePreguntasMedicas from "./preguntasMedicas"

interface InterfaceDatosMedicos{
    tipoSanguineo: string,
    peso: number,
    talla: number,
    zapatoOrtopedico: boolean,
    lentes: boolean,
    seguroMedico: string,
    recomendacionesEspeciales: string, 
    nombreMedicoFamiliar: string,
    telefonoMedicoFamiliar: string,
    enfermadesFrecuentes: string,
    enfermadesUltimoAnio: string,
    alergias: string,
    respuestasPreguntasMedicas : InterfacePreguntasMedicas,
    respuestasPreguntasHereditarias : InterfacePreguntasHereditarias,
    respuestasCondicionesMedicas : InterfacePreguntasCondiciones
}

export default InterfaceDatosMedicos