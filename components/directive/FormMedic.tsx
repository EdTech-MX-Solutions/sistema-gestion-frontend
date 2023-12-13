import React, { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";
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
import { useRouter } from "next/router";

interface FormMedicProps {
  dataMedic: any;
  isNewUsuario : boolean;
}

export const FormMedic = ({ dataMedic, isNewUsuario}: FormMedicProps) => {
  
  const router = useRouter();
  const { id } = router.query;
  
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

  const [formData, setFormData] = useState<InterfaceDatosMedicos>({
    tipoSanguineo: isNewUsuario ?  "" : dataMedic.tipoSanguineo,
    peso: isNewUsuario ? 0 : dataMedic.peso,
    talla: isNewUsuario ? 0 : dataMedic.talla,
    zapatoOrtopedico: isNewUsuario ? null : dataMedic.zapatoOrtopedico,
    lentes: isNewUsuario ? null : dataMedic.lentes,
    seguroMedico: isNewUsuario ? "" : dataMedic.seguroMedico,
    recomendacionesEspeciales: isNewUsuario ? "" : dataMedic.recomendacionesEspeciales, 
    nombreMedicoFamiliar: isNewUsuario ? "" : dataMedic.nombreMedicoFamiliar,
    telefonoMedicoFamiliar: isNewUsuario ? "" : dataMedic.telefonoMedicoFamiliar,
    enfermadesFrecuentes: isNewUsuario ? "" : dataMedic.enfermadesFrecuentes,
    enfermadesUltimoAnio: isNewUsuario ? "" : dataMedic.enfermadesUltimoAnio,
    alergias: isNewUsuario ? "" : dataMedic.alergias,
    respuestasPreguntasMedicas : isNewUsuario ? [] : dataMedic.respuestasPreguntasMedicas,
    respuestasPreguntasHereditarias : isNewUsuario ? [] : dataMedic.respuestasPreguntasHereditarias,
    respuestasCondicionesMedicas : isNewUsuario ? [] : dataMedic.respuestasCondicionesMedicas
  });

  const fetchDatosMedicosAlumno = async () => {
    const api = new SIGEAPICollection();
    const token = cookies.token;
    try{
      const response = await api.directivosCollection.executeGetDatosMedicosAlumnos(
        token, 
        "202301A143" /*id + "" */);
      if(response.ok){
        const data = await response.json();
        const newDatosMedicos : InterfaceDatosMedicos = {
          tipoSanguineo: data.tipoSanguineo,
          peso: data.peso,
          talla: data.talla,
          zapatoOrtopedico: data.zapatoOrtopedico,
          lentes: data.lentes,
          seguroMedico: data.seguroMedico,
          recomendacionesEspeciales: data.recomendacionesEspeciales,
          nombreMedicoFamiliar: data.nombreMedicoFamiliar,
          telefonoMedicoFamiliar: data.telefonoMedicoFamiliar,
          enfermadesFrecuentes: data.enfermadesFrecuentes,
          enfermadesUltimoAnio: data.enfermadesUltimoAnio,
          alergias: data.alergias,
          respuestasPreguntasMedicas : data.respuestasPreguntasMedicas,
          respuestasPreguntasHereditarias : data.respuestasPreguntasHereditarias,
          respuestasCondicionesMedicas : data.respuestasCondicionesMedicas
        }
        setFormData(newDatosMedicos);
        console.log(data);
      }
    }catch(error){
      console.error(error);
    }
  }

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

  console.log(formData.respuestasCondicionesMedicas);

  useEffect(() => {
    fetchPreguntasMedicas();
    fetchPreguntasHereditarias();
    fetchPreguntasCondiciones();
    fetchDatosMedicosAlumno();
  }, []);

  return (
    <>
      <CardView title={""} description={""}>
        <div className="p-7 bg-white rounded-lg">
          <FormBasicDataMedic 
            dataMedic={dataMedic} 
            formData={formData} 
            setFormData={setFormData}
          ></FormBasicDataMedic>

          <FormPreguntasCondiciones
            dataMedic={dataMedic}
            preguntasCondiciones={preguntasCondiciones}
            formData={formData} 
            setFormData={setFormData}
          ></FormPreguntasCondiciones>

          <FormPreguntasMedicas
            preguntasMedicas={preguntasMedicas}
            dataMedic={dataMedic}
            formData={formData} 
            setFormData={setFormData}
          ></FormPreguntasMedicas>

          <FormPreguntasHereditarias
            preguntasHereditarias={preguntasHereditarias}
            dataMedic={dataMedic}
            formData={formData} 
            setFormData={setFormData}
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
