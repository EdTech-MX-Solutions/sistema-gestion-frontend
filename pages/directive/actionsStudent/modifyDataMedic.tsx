import { ReactNode } from "react";
import PrincipalTitle from "@/components/directive/Principal.Title";
import FormMedic from "@/components/directive/FormMedic";
import InterfaceDatosMedicos from "@/data/interfaces/datosMedicos";

interface DefaultLayoutProps {
  children: ReactNode;
}

function registrerDataMedicStudent() {

  const dataMedic : InterfaceDatosMedicos = {
    tipoSanguineo: "",
    peso: 0,
    talla: 0,
    zapatoOrtopedico: null,
    lentes: null,
    seguroMedico: "",
    recomendacionesEspeciales: "", 
    nombreMedicoFamiliar: "",
    telefonoMedicoFamiliar: "",
    enfermadesFrecuentes: "",
    enfermadesUltimoAnio: "",
    alergias: "",
    respuestasPreguntasMedicas : [],
    respuestasPreguntasHereditarias : [],
    respuestasCondicionesMedicas : []
  };

  return (
    <>
      <PrincipalTitle title={"Registro Datos Médicos Alumno"}></PrincipalTitle>
      <FormMedic dataMedic={dataMedic} isNewUsuario = {false}></FormMedic>
    </>
  );
}

export default registrerDataMedicStudent;