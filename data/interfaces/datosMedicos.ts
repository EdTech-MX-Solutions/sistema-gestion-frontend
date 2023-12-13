import InterfaceRespuestasMedicasCondiciones from "./respuestasMedicasCondiciones"
import InterfaceRespuestasPreguntasMedicas from "./respuestasMedicasPreguntasMedicas"
import InterfaceRespuestasMedicasHereditarias from "./respuestasMedicasHereditarias"

interface InterfaceDatosMedicos{
    tipoSanguineo: string,
    peso: number,
    talla: number,
    zapatoOrtopedico: boolean | null,
    lentes: boolean | null,
    seguroMedico: string,
    recomendacionesEspeciales: string, 
    nombreMedicoFamiliar: string,
    telefonoMedicoFamiliar: string,
    enfermadesFrecuentes: string,
    enfermadesUltimoAnio: string,
    alergias: string,
    respuestasPreguntasMedicas : InterfaceRespuestasPreguntasMedicas[],
    respuestasPreguntasHereditarias : InterfaceRespuestasMedicasHereditarias[],
    respuestasCondicionesMedicas : InterfaceRespuestasMedicasCondiciones[]
}

export default InterfaceDatosMedicos