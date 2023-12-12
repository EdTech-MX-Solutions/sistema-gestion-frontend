import { ReactNode } from "react";
import PrincipalTitle from "@/components/directive/Principal.Title";
import FormMedic from "@/components/directive/FormMedic";
import CardView from "@/components/CardView";

interface DefaultLayoutProps {
  children: ReactNode;
}

function registrerDataMedicStudent() {
  const InitialDataMedic = {
    tipoSanguineo: "",
    peso: 0,
    talla: 0,
    zapatoOrtopedico: true,
    lentes: true,
    seguroMedico: "",
    recomendacionesEspeciales: "",
    nombreMedicoFamiliar: "",
    telefonoMedicoFamiliar: "",
    enfermadesFrecuentes: "",
    enfermadesUltimoAnio: "",
    alergias: "",
    respuestasPreguntasMedicas: [
      {
        pregunta: {
          id: 1,
          pregunta: "Sobrepeso u Obesidad",
        },
        respuestaCorta: "",
        respuestaEspecifica: "",
      },
      {
        pregunta: {
          id: 2,
          pregunta: "Anemia",
        },
        respuestaCorta: "",
        respuestaEspecifica: "",
      },
      {
        pregunta: {
          id: 3,
          pregunta: "Bronquitis",
        },
        respuestaCorta: "",
        respuestaEspecifica: "",
      },
      {
        pregunta: {
          id: 4,
          pregunta: "Hemorragias",
        },
        respuestaCorta: "",
        respuestaEspecifica: "",
      },
      {
        pregunta: {
          id: 5,
          pregunta: "Fiebre Reumatica",
        },
        respuestaCorta: "",
        respuestaEspecifica: "",
      },
      {
        pregunta: {
          id: 6,
          pregunta: "Problemas en el habla",
        },
        respuestaCorta: "",
        respuestaEspecifica: "",
      },
    ],

    respuestasPreguntasHereditarias: [
      {
        pregunta: {
          id: 1,
          pregunta: "¿Tiene algún familiar diabetico?",
        },
        respuestaCorta: "",
        respuestaEspecifica: "",
      },
      {
        pregunta: {
          id: 2,
          pregunta: "¿Tiene algún familiar enfermo del corazón?",
        },
        respuestaCorta: "",
        respuestaEspecifica: "",
      },
      {
        pregunta: {
          id: 3,
          pregunta: "¿Tiene algún familiar hipertenso?",
        },
        respuestaCorta: "",
        respuestaEspecifica: "",
      },
      {
        pregunta: {
          id: 4,
          pregunta: "¿Tiene algún familiar enfermo de cancer?",
        },
        respuestaCorta: "",
        respuestaEspecifica: "",
      },
    ],

    respuestasCondicionesMedicas: [
      {
        pregunta: {
          id: 1,
          nombreCondicion: "",
        },
        respuestaCorta: "",
        respuestaEspecifica: "",
      },
    ],
  };

  return (
    <>
      <CardView title={""} description={""}>
        <PrincipalTitle
          title={"Registro Datos Médicos Alumno"}
        ></PrincipalTitle>
        <FormMedic dataMedic={InitialDataMedic}></FormMedic>
      </CardView>
    </>
  );
}

export default registrerDataMedicStudent;
