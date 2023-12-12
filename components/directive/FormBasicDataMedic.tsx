import InterfaceDatosMedicos from "@/data/interfaces/datosMedicos";
import React from "react";

interface FormBasicDataMedicProps {
    dataMedic : InterfaceDatosMedicos;
}

export const FormBasicDataMedic = ({dataMedic}: FormBasicDataMedicProps) => {
  return (
    <>
      <div className="">
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
                <option value=""> Selecciona una opción </option>
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
                <option value=""> Selecciona una opción </option>
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
                <option value=""> Selecciona una opción </option>
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
        </form>
      </div>
    </>
  );
};
