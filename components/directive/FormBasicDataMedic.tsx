import InterfaceDatosMedicos from "@/data/interfaces/datosMedicos";
import React from "react";

interface FormBasicDataMedicProps {
  dataMedic: InterfaceDatosMedicos;
  formData: InterfaceDatosMedicos;
  setFormData: React.Dispatch<React.SetStateAction<InterfaceDatosMedicos>>; 
}

export const FormBasicDataMedic = ({ dataMedic, formData ,setFormData }: FormBasicDataMedicProps) => {
  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
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
                id="tipoSanguineo"
                name="tipoSanguineo"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={formData.tipoSanguineo}
                onChange={handleInputChange}
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
                name="peso"
                id="peso"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={formData.peso}
                onChange={handleInputChange}
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
                name="peso"
                id="peso"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={formData.peso}
                onChange={handleInputChange}
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
                id="zapatoOrtopedico"
                name="zapatoOrtopedico"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={formData.zapatoOrtopedico ? "s" : "n"}
                onChange={handleInputChange}
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
                id="lentes"
                name="lentes"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={formData.lentes ? "s" : "n"}
                onChange={handleInputChange}
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
                name="seguroMedico"
                id="seguroMedico"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={formData.seguroMedico}
                onChange={handleInputChange}
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
                name="recomendacionesEspeciales"
                id="recomendacionesEspeciales"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={formData.recomendacionesEspeciales}
                onChange={handleInputChange}
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
                name="nombreMedicoFamiliar"
                id="nombreMedicoFamiliar"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={formData.nombreMedicoFamiliar}
                onChange={handleInputChange}
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
                name="telefonoMedicoFamiliar"
                id="telefonoMedicoFamiliar"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={formData.telefonoMedicoFamiliar}
                onChange={handleInputChange}
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
                name="enfermadesFrecuentes"
                id="enfermadesFrecuentes"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={formData.enfermadesFrecuentes}
                onChange={handleInputChange}
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
                name="enfermadesUltimoAnio"
                id="enfermadesUltimoAnio"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={formData.enfermadesUltimoAnio}
                onChange={handleInputChange}
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
                name="alergias"
                id="alergias"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={formData.alergias}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
