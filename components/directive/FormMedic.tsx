import React from "react";
import ButtonComponent from "../ButtonComponent";
import { data } from "autoprefixer";

interface Respuesta<T> {
  pregunta: T;
  respuestaCorta: string;
  respuestaEspecifica: string;
}

interface PreguntaMedica {
  id: number;
  pregunta: string;
}

interface PreguntaHereditaria {
  id: number;
  pregunta: string;
}

interface CondicionMedica {
  id: number;
  nombreCondicion: string;
}

interface FormMedicProps {
  dataMedic: {
    tipoSanguineo: string;
    peso: number;
    talla: number;
    zapatoOrtopedico: Boolean;
    lentes: Boolean;
    seguroMedico: string;
    recomendacionesEspeciales: string;
    nombreMedicoFamiliar: string;
    telefonoMedicoFamiliar: string;
    enfermadesFrecuentes: string; //separados por coma
    enfermadesUltimoAnio: string; //separados por coma
    alergias: string; //separados por coma
    respuestasPreguntasMedicas: Respuesta<PreguntaMedica>[];
    respuestasPreguntasHereditarias: Respuesta<PreguntaHereditaria>[];
    respuestasCondicionesMedicas: Respuesta<CondicionMedica>[];
  };
}

/*
  Padecimientos
Preguntas medicas
Hereditarios */
export const FormMedic = ({ dataMedic }: FormMedicProps) => {
  return (
    <>
      <div className="p-7 bg-white rounded-lg">
        <h4 className="font-bold pb-5"> Datos Médicos </h4>
        <form>
          <div className="grid grid-cols-3 gap-4 items-center">
            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Tipo Sanguineo:
              </label>
              <select
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={dataMedic.tipoSanguineo}
              >
                <option value="O-"> O- </option>
                <option value="O+"> O+ </option>
                <option value="A+"> A+ </option>
                <option value="A-"> A- </option>
                <option value="B+"> B+ </option>
                <option value="B-"> B- </option>
                <option value="AB+"> AB+ </option>
                <option value="AB-"> AB- </option>
              </select>
            </div>

            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Peso (kg):
              </label>
              <input
                type="number"
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={dataMedic.peso}
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Altura (cm):
              </label>
              <input
                type="number"
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={dataMedic.peso}
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                ¿Usa zapato o plantillas ortopedicas?
              </label>
              <select
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={dataMedic.zapatoOrtopedico ? "s" : "n"}
              >
                <option value="s"> Sí </option>
                <option value="n"> No </option>
              </select>
            </div>

            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                ¿Usa lentes?
              </label>
              <select
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={dataMedic.lentes ? "s" : "n"}
              >
                <option value="s"> Sí </option>
                <option value="n"> No </option>
              </select>
            </div>

            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Servicio Médico:
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={dataMedic.seguroMedico}
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Recomendaciones Especiales:
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={dataMedic.recomendacionesEspeciales}
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Médico Familiar:
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={dataMedic.nombreMedicoFamiliar}
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Numero del médico familiar
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Enfermedades Frecuentes (si es mas de una separe por comas):
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={dataMedic.enfermadesFrecuentes}
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Enfermedades en el ultimo año (si es mas de una separe por
                comas):
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={dataMedic.enfermadesUltimoAnio}
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Alergias (si es mas de una separe por comas):
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={dataMedic.alergias}
              />
            </div>
          </div>

          <div className="justify-center bg-white p-5 rounded-lg">
            <h4 className="font-bold py-5"> Cuestionario Médico </h4>
            <h3 className="font-bold py-5"> Padecimientos </h3>
            <table className="table-fixed w-full text-sm text-center font-semibold">
              <thead className="text-white uppercase bg-green-700">
                <tr className="">
                  <th className="p-3"> Pregunta </th>
                  <th> Sí </th>
                  <th> No </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-5"> Sobrepeso u Obesidad </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="p-5"> Anemia </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="p-5"> Bronquitis </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="p-5"> Hemorragias </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="p-5"> Fiebre Reumatica </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="p-5"> Problemas en el habla </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="p-5"> Diabetes (Azúcar en la sangre) </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="p-5"> Epilepsia (Ataques o convulsiones)</td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="p-5"> Enfermedades del corazón </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="p-5"> Hepatitis </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="p-5"> Caries </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="p-5"> Pie plano </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="p-5"> Amigdalitis (Anginas) </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="p-5"> Cáncer </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="p-5"> Neoplasias </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="p-5"> ¿Le duelen las piernas en la noche? </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-5"> ¿Se desmaya con frecuencia? </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-5"> ¿Ha recibido alguna vez transfuciones de sangre? </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-5"> ¿Duerme bien en la noche? </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-5"> Le da fiebre con frecuencia </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-5"> ¿Le falta el aire al realizar ejercicios fisicos? </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-5"> ¿Presenta hemorragias (sangrados) recientemente? </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="p-5"> ¿Ha sido intervenido quirúrgicamente? </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="font-bold py-5"> Preguntas Médicas </h3>
            <div className="items-center">
              <div className="grid grid-cols-2 gap-4 items-center">
                <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    ¿Padece alguna discapacidad motriz?
                  </label>
                  <select
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  >
                    <option value="s"> Sí </option>
                    <option value="n"> No </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    ¿Cúal?:
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  />
                </div>

                <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    ¿Padece alguna enfermedad o problemas oculares?
                  </label>
                  <select
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  >
                    <option value="s"> Sí </option>
                    <option value="n"> No </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    ¿Cúal?:
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  />
                </div>

                <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    ¿Padece alguna enfermedad o problemas auditivos?
                  </label>
                  <select
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  >
                    <option value="s"> Sí </option>
                    <option value="n"> No </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    ¿Cúal?:
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    ¿Padece alguna enfermedad crónica?
                  </label>
                  <select
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  >
                    <option value="s"> Sí </option>
                    <option value="n"> No </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    ¿Cúal?:
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    ¿Es alérgico(a) a la picadura de algún insecto?
                  </label>
                  <select
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  >
                    <option value="s"> Sí </option>
                    <option value="n"> No </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    ¿Cúal?:
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    ¿Es alérgico(a) a algún medicamento?
                  </label>
                  <select
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  >
                    <option value="s"> Sí </option>
                    <option value="n"> No </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    ¿Cúal?:
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    ¿Es alérgico(a) a la picadura de algún alimento bebida?
                  </label>
                  <select
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  >
                    <option value="s"> Sí </option>
                    <option value="n"> No </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    ¿Cúal?:
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    ¿Presenta algún antecedente médico que le prohíba a su hijo(a) realizar
                    actividades deportivas?
                  </label>
                  <select
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  >
                    <option value="s"> Sí </option>
                    <option value="n"> No </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    ¿Cúal?:
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold py-5"> Cuestiones Hereditarias </h4>
            <div className="grid grid-cols-2 gap-4 items-center">
              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Tiene algún familiar diabetico:
                </label>
                <select
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                >
                  <option value="s"> Sí </option>
                  <option value="n"> No </option>
                </select>
              </div>
              <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    ¿Cúal?:
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  />
                </div>
              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Tiene algún familiar enfermo del corazón:
                </label>
                <select
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                >
                  <option value="s"> Sí </option>
                  <option value="n"> No </option>
                </select>
              </div>
              <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    ¿Cúal?:
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  />
                </div>
              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Tiene algún familiar hipertenso:
                </label>
                <select
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                >
                  <option value="s"> Sí </option>
                  <option value="n"> No </option>
                </select>
              </div>
              <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    ¿Cúal?:
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  />
                </div>
              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Tiene algún familiar enfermo de cancer:
                </label>
                <select
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                >
                  <option value="s"> Sí </option>
                  <option value="n"> No </option>
                </select>
              </div>
              <div>
                  <label
                    htmlFor=""
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    ¿Cúal?:
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  />
                </div>
            </div>
          </div>

          <div className="text-center pt-10">
            <ButtonComponent
              title={"Siguiente"}
              color={"blue"}
            ></ButtonComponent>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormMedic;
