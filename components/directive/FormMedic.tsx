import React, { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";
import { data } from "autoprefixer";
import InterfaceDatosMedicos from "@/data/interfaces/datosMedicos";
import InterfacePreguntasHereditarias from "@/data/interfaces/preguntasHereditarias";
import InterfacePreguntasCondiciones from "@/data/interfaces/preguntasCondiciones";
import InterfacePreguntasMedicas from "@/data/interfaces/preguntasMedicas";
import SIGEAPICollection from "@/data/calls/apiHandler";
import { useCookies } from "react-cookie";
import { FormBasicDataMedic } from "./FormBasicDataMedic";
import { FormPreguntasCondiciones } from "./FormPreguntasCondiciones";
import { FormPreguntasMedicas } from "./FormPreguntasMedicas";
import { FormPreguntasHereditarias } from "./FormPreguntasHereditarias";
import CardView from "../CardView";
import { da } from "@faker-js/faker";

interface FormMedicProps {
  dataMedic: InterfaceDatosMedicos;
  isNewUsuario : boolean;
}

export const FormMedic = ({ dataMedic, isNewUsuario}: FormMedicProps) => {
  const [cookies, setCookie] = useCookies(["token", "", "childs"]);
  const [preguntasCondiciones, setPreguntasCondiciones] = useState<
    InterfacePreguntasCondiciones[]
  >([]);
  const [preguntasHereditarias, setPreguntasHereditarias] = useState<
    InterfacePreguntasHereditarias[]
  >([]);
  const [preguntasMedicas, setPreguntasMedicas] = useState<
    InterfacePreguntasMedicas[]
  >([]);

  const [formData, setFormData] = useState({
    tipoSanguineo: isNewUsuario ?  "" : dataMedic.tipoSanguineo,
    peso: isNewUsuario ? "" : dataMedic.peso,
    talla: isNewUsuario ? "" : dataMedic.talla,
    zapatoOrtopedico: isNewUsuario ? "" : dataMedic.zapatoOrtopedico,
    lentes: isNewUsuario ? "" : dataMedic.lentes,
    seguroMedico: isNewUsuario ? "" : dataMedic.seguroMedico,
    recomendacionesEspeciales: isNewUsuario ? "" : dataMedic.recomendacionesEspeciales, 
    nombreMedicoFamiliar: isNewUsuario ? "" : dataMedic.nombreMedicoFamiliar,
    telefonoMedicoFamiliar: isNewUsuario ? "" : dataMedic.telefonoMedicoFamiliar,
    enfermadesFrecuentes: isNewUsuario ? "" : dataMedic.enfermadesFrecuentes,
    enfermadesUltimoAnio: isNewUsuario ? "" : dataMedic.enfermadesUltimoAnio,
    alergias: isNewUsuario ? "" : dataMedic.alergias,
    respuestasPreguntasMedicas : [],
    respuestasPreguntasHereditarias : [],
    respuestasCondicionesMedicas : []
  });

  const fetchPreguntasMedicas = async () => {
    const api = new SIGEAPICollection();
    const token = cookies.token;
    try {
      const response =
        await api.directivosCollection.executeGetPreguntasMedicas(token);
      if (response.ok) {
        const data = await response.json();
        let newPreguntasMedicas: InterfacePreguntasMedicas[] = [];
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          const newPreguntaMedica: InterfacePreguntasMedicas = {
            id: element.id,
            pregunta: element.pregunta,
          };
          newPreguntasMedicas.push(newPreguntaMedica);
        }
        setPreguntasMedicas(newPreguntasMedicas);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPreguntasHereditarias = async () => {
    const api = new SIGEAPICollection();
    const token = cookies.token;
    try {
      const response =
        await api.directivosCollection.executeGetPreguntasHereditarias(token);
      if (response.ok) {
        const data = await response.json();
        let newPreguntasHereditarias: InterfacePreguntasHereditarias[] = [];
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          const newPreguntaHereditaria: InterfacePreguntasHereditarias = {
            id: element.id,
            pregunta: element.pregunta,
          };
          newPreguntasHereditarias.push(newPreguntaHereditaria);
        }
        setPreguntasHereditarias(newPreguntasHereditarias);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPreguntasCondiciones = async () => {
    const api = new SIGEAPICollection();
    const token = cookies.token;
    try {
      const response =
        await api.directivosCollection.executeGetPadecimientosMedicos(token);
      if (response.ok) {
        const data = await response.json();
        let newPreguntasCondiciones: InterfacePreguntasCondiciones[] = [];
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          const newPreguntaCondicion: InterfacePreguntasCondiciones = {
            id: element.id,
            nombreCondicion: element.nombreCondicion,
          };
          newPreguntasCondiciones.push(newPreguntaCondicion);
        }
        setPreguntasCondiciones(newPreguntasCondiciones);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPreguntasMedicas();
    fetchPreguntasHereditarias();
    fetchPreguntasCondiciones();
  }, []);

  return (
    <>
      <CardView title={""} description={""}>
        <div className="p-7 bg-white rounded-lg">
          <FormBasicDataMedic dataMedic={dataMedic}></FormBasicDataMedic>

          <FormPreguntasCondiciones
            dataMedic={dataMedic}
            preguntasCondiciones={preguntasCondiciones}
          ></FormPreguntasCondiciones>

          <FormPreguntasMedicas
            preguntasMedicas={preguntasMedicas}
            dataMedic={dataMedic}
          ></FormPreguntasMedicas>

          <FormPreguntasHereditarias
            preguntasHereditarias={preguntasHereditarias}
            dataMedic={dataMedic}
          ></FormPreguntasHereditarias>

          <div className="text-center pt-10">
            <ButtonComponent
              title={"Siguiente"}
              color={"blue"}
            ></ButtonComponent>
          </div>
        </div>
      </CardView>
    </>
  );
};
export default FormMedic;
