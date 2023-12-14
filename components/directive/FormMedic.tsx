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
import { Alert, Button } from "@material-tailwind/react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
interface FormMedicProps {
  dataMedic: any;
  isNewUsuario : boolean;
}

export const FormMedic = ({ dataMedic, isNewUsuario}: FormMedicProps) => {
  
  const router = useRouter();
  const { id } = router.query;
  const [open, setOpen] = useState(false);
  const [cookies, setCookie] = useCookies(["token", "", "childs"]);
  const [requiredCampos, setRequiredCampos] = useState(false);
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
        id+"");
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

  const handleDarDeAltaDatosMedicos = async (datosMedicos : InterfaceDatosMedicos) => {
    const requiredFields = [
      "tipoSanguineo",
      "peso",
      "talla",
      "zapatoOrtopedico",
      "lentes",
      "seguroMedico",
      "recomendacionesEspeciales",
      "nombreMedicoFamiliar",
      "telefonoMedicoFamiliar",
      "enfermadesFrecuentes",
      "enfermadesUltimoAnio",
      "alergias",
    ];

    const emptyRequiredFields = requiredFields.filter(
      (field) => !formData[field as keyof InterfaceDatosMedicos] 
    );

    if (emptyRequiredFields.length > 0) {
      //alert("Por favor, completa todos los campos obligatorios.");
      setOpen(true);
      return;
    }
    else{
      const api = new SIGEAPICollection();
      const token = cookies.token;
      setRequiredCampos(true);
      const response = await api.sharedCollection.executePostDatosMedicos(
        token,
        datosMedicos,
        id+""
      );

      setFormData({
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
      });
    }
  }

  const handleSiguientePasoRegistroPrimerTutor = ({ Id }: { Id: any }) => {
    router.push(`/directive/actionsStudent/registrerDataFirstTutor?id=${Id}`);
  };

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

          {!open && (
            <div className="text-center pt-10">
            <ButtonComponent
              title={"Siguiente"}
              color={"blue"}
              onClick={() => {
                if(requiredCampos){
                  handleDarDeAltaDatosMedicos(formData);
                  handleSiguientePasoRegistroPrimerTutor({ Id: id });
                }
                setOpen(true);
              }}
            ></ButtonComponent>
          </div>
          )}
           <div className="p-5 flex justify-center items-center">
              <Alert
                variant="gradient"
                className="bg-black text-white text-center p-5"
                open={open}
                icon={<Icon />}
              >
                Campo obligatorio en blanco
                <Button
                  variant="text"
                  color="white"
                  size="sm"
                  className="!absolute top-3 right-3 text-center border-solid border-2 border-white rounded-full items-center justify-center"
                  onClick={() => setOpen(false)}
                >
                  Cerrar
                </Button>
              </Alert>
            </div>
        </div>
      </CardView>
    </>
  );
};
export default FormMedic;
