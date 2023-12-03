import { ReactNode } from "react";
import PrincipalTitle from "@/components/directive/Principal.Title";
import FormMedic from "@/components/directive/FormMedic";

interface DefaultLayoutProps {
  children: ReactNode;
}

function registrerDataMedicStudent() {

  const dataMedic = {
    "tipoSanguineo": "AB+",
    "peso": 70,
    "talla": 175,
    "zapatoOrtopedico": false,
    "lentes": true,
    "seguroMedico": "SeguroXYZ",
    "recomendacionesEspeciales": "Evitar esfuerzos excesivos",
    "nombreMedicoFamiliar": "Dr. Rodríguez",
    "telefonoMedicoFamiliar": "555-1234",
    "enfermadesFrecuentes": "Resfriado, Gripe, Asma",
    "enfermadesUltimoAnio": "Gripe, Bronquitis",
    "alergias": "Polen, Ácaros", 
    "respuestasPreguntasMedicas" : [
      {
        "pregunta" : {
          "id" : 1,
          "pregunta" : "Sobrepeso u Obesidad"
        },
        "respuestaCorta": "No",
        "respuestaEspecifica": ""
      },
      {
        "pregunta" : {
          "id" : 2,
          "pregunta" : "Anemia"
        },
        "respuestaCorta": "No",
        "respuestaEspecifica": ""
      },
      {
        "pregunta" : {
          "id" : 3,
          "pregunta" : "Bronquitis"
        },
        "respuestaCorta": "No",
        "respuestaEspecifica": ""
      },
      {
        "pregunta" : {
          "id" : 4,
          "pregunta" : "Hemorragias"
        },
        "respuestaCorta": "No",
        "respuestaEspecifica": ""
      },
      {
        "pregunta" : {
          "id" : 5,
          "pregunta" : "Fiebre Reumatica"
        },
        "respuestaCorta": "No",
        "respuestaEspecifica": ""
      },
      {
        "pregunta" : {
          "id" : 6,
          "pregunta" : "Problemas en el habla"
        },
        "respuestaCorta": "No",
        "respuestaEspecifica": ""
      }
    ],

    "respuestasPreguntasHereditarias" : [
      {
        "pregunta": {
          "id": 1,
          "pregunta": "¿Tiene algún familiar diabetico?"
        },
        "respuestaCorta": "Sí",
        "respuestaEspecifica": "Padre"
      },
      {
        "pregunta": {
          "id": 2,
          "pregunta": "¿Tiene algún familiar enfermo del corazón?"
        },
        "respuestaCorta": "Sí",
        "respuestaEspecifica": "Padre"
      },
      {
        "pregunta": {
          "id": 3,
          "pregunta": "¿Tiene algún familiar hipertenso?"
        },
        "respuestaCorta": "Sí",
        "respuestaEspecifica": "Padre"
      },
      {
        "pregunta": {
          "id": 4,
          "pregunta": "¿Tiene algún familiar enfermo de cancer?"
        },
        "respuestaCorta": "Sí",
        "respuestaEspecifica": "Padre"
      },
    ],

    "respuestasCondicionesMedicas" : [
      {
        "pregunta": {
          "id": 1,
          "nombreCondicion": "Asma"
        },
        "respuestaCorta": "Sí",
        "respuestaEspecifica": "Controlado con medicación"
      },
    ]
  };

  return (
    <>
      <PrincipalTitle title={"Registro Datos Médicos Alumno"}></PrincipalTitle>
      <FormMedic dataMedic={dataMedic}></FormMedic>
    </>
  );
}

export default registrerDataMedicStudent;
