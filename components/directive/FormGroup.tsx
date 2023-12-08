import React, { useState } from "react";
import ButtonComponent from "../ButtonComponent";
import InterfaceGrupo from "@/interfaces/grupos";

interface FormGroupProps {
  grupo: InterfaceGrupo;
}

export const FormGroup = ({ grupo }: FormGroupProps) => {
  const [formData, setFormData] = useState({
    idGrupo: grupo.idGrupo,
    grado: grupo.grado,
    subGrado: grupo.subGrado,
    turno: grupo.turno,
    responsable: grupo.responsable,
    idResponsable: grupo.idResponsable,
    cupos: grupo.cupos,
    salon: grupo.salon,
    inscritos: grupo.inscritos,
    cicloEscolar: grupo.cicloEscolar,
  });

  console.log(grupo);

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("Datos", formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-4 items-center px-5 pt-5">
          <div>
            <label
              htmlFor="grado"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Grado<span>*</span>:
            </label>
            <input
              type="text"
              name="grado"
              id="grado"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
              value={formData.grado}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label
              htmlFor="subGrado"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Grupo<span>*</span>:
            </label>
            <input
              type="text"
              name="subGrado"
              id="subGrado"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
              value={formData.subGrado}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label
              htmlFor="turno"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Turno<span>*</span>:
            </label>
            <input
              type="text"
              name="turno"
              id="turno"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
              value={formData.turno}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label
              htmlFor="responsable"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Responsable:
            </label>
            <input
              type="text"
              name="responsable"
              id="responsable"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
              value={formData.responsable}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label
              htmlFor="salon"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Salon:
            </label>
            <input
              type="text"
              name="salon"
              id="salon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
              value={formData.salon}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="text-center">
          <ButtonComponent title={"Guardar"} color={"blue"}></ButtonComponent>
        </div>
      </form>
    </>
  );
};

export default FormGroup;
