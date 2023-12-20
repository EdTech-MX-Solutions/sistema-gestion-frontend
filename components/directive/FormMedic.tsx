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
  isNewUsuario: boolean;
}

export const FormMedic = ({ dataMedic, isNewUsuario }: FormMedicProps) => {
  const router = useRouter();
  const { id } = router.query;
  const [alerta, setAlerta] = useState(true);
  const [requiredCamposCompletos, setRequiredCamposCompletos] = useState(false);
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
    tipoSanguineo: isNewUsuario ? "" : dataMedic.tipoSanguineo,
    peso: isNewUsuario ? 0 : dataMedic.peso,
    talla: isNewUsuario ? 0 : dataMedic.talla,
    zapatoOrtopedico: isNewUsuario ? null : dataMedic.zapatoOrtopedico,
    lentes: isNewUsuario ? null : dataMedic.lentes,
    seguroMedico: isNewUsuario ? "" : dataMedic.seguroMedico,
    recomendacionesEspeciales: isNewUsuario
      ? ""
      : dataMedic.recomendacionesEspeciales,
    nombreMedicoFamiliar: isNewUsuario ? "" : dataMedic.nombreMedicoFamiliar,
    telefonoMedicoFamiliar: isNewUsuario
      ? ""
      : dataMedic.telefonoMedicoFamiliar,
    enfermadesFrecuentes: isNewUsuario ? "" : dataMedic.enfermadesFrecuentes,
    enfermadesUltimoAnio: isNewUsuario ? "" : dataMedic.enfermadesUltimoAnio,
    alergias: isNewUsuario ? "" : dataMedic.alergias,
    respuestasPreguntasMedicas: isNewUsuario
      ? []
      : dataMedic.respuestasPreguntasMedicas,
    respuestasPreguntasHereditarias: isNewUsuario
      ? []
      : dataMedic.respuestasPreguntasHereditarias,
    respuestasCondicionesMedicas: isNewUsuario
      ? []
      : dataMedic.respuestasCondicionesMedicas,
  });

  const fetchDatosMedicosAlumno = async () => {
    const api = new SIGEAPICollection();
    const token = cookies.token;
    try {
      const response =
        await api.directivosCollection.executeGetDatosMedicosAlumnos(
          token,
          id+""
        );
      if (response.ok) {
        const data = await response.json();
        const newDatosMedicos: InterfaceDatosMedicos = {
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
          respuestasPreguntasMedicas: data.respuestasPreguntasMedicas,
          respuestasPreguntasHereditarias: data.respuestasPreguntasHereditarias,
          respuestasCondicionesMedicas: data.respuestasCondicionesMedicas,
        };
        setFormData(newDatosMedicos);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDarDeAltaDatosMedicos = async (
    datosMedicos: InterfaceDatosMedicos
  ) => {
    const api = new SIGEAPICollection();
    const token = cookies.token;
    const response = await api.sharedCollection.executePostDatosMedicos(
      token,
      datosMedicos,
      id + ""
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
      respuestasPreguntasMedicas: [],
      respuestasPreguntasHereditarias: [],
      respuestasCondicionesMedicas: [],
    });
  };

  const handleCamposEnBlanco = () => {
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

    if (emptyRequiredFields.length == 0) {
      console.log("NO hay campos obligatorios vacios");
      setRequiredCamposCompletos(true);
      setAlerta(false);
    } else {
      console.log("SI hay campos obligatorios vacios");
      setRequiredCamposCompletos(false);
      setAlerta(true);
    }
  };

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

  useEffect(() => {
    handleCamposEnBlanco();
  }, [formData]);

  return (
    <>
      <CardView title={""} description={""}>
        {alerta && (
          <div
            className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <svg
              className="flex-shrink-0 inline w-4 h-4 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">Campos Obligatorios Vacios!</span>
              Recuerda que todos los campos con un asterisco (*) deben ser
              llenados.
            </div>
          </div>
        )}
        {requiredCamposCompletos && (
          <div
            className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-100 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <svg
              className="flex-shrink-0 inline w-4 h-4 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">
                Campos Obligatorios Completos!
              </span>
              Todos los campos obligatorios han sido llenados.
            </div>
          </div>
        )}

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
            isNewUsuario={isNewUsuario}
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
              onClick={() => {
                if (requiredCamposCompletos == true) {
                  handleDarDeAltaDatosMedicos(formData);
                  handleSiguientePasoRegistroPrimerTutor({ Id: id });
                } else {
                  console.log("Campos obligatorios vacios");
                }
              }}
            ></ButtonComponent>
          </div>
        </div>
      </CardView>
    </>
  );
};
export default FormMedic;
