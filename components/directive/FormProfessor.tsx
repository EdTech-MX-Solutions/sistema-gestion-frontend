import InterfaceProfessor from "@/interfaces/professor";
import React, { useState } from "react";
import ButtonComponent from "../ButtonComponent";

interface FormProfessorProps {
  professor: InterfaceProfessor;
}

export const FormProfessor = ({ professor }: FormProfessorProps) => {
  const [formData, setFormData] = useState({
    idProfesor: professor.idProfesor,
    nombre: professor.nombre,
    apellidoPaterno: professor.apellidoPaterno,
    apellidoMaterno: professor.apellidoMaterno,
    email: professor.email,
    activo: professor.activo,
    diretivo: professor.diretivo,
    noCedulaProfesional: professor.noCedulaProfesional,
    numero: professor.numero,
  });

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("Datos: ", formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-lg">
          <h4 className="font-bold p-5"> Datos personales </h4>
          <div className="p-5 grid grid-cols-3 gap-4 items-center">
            <div>
              <label
                htmlFor=""
                className="text-xl block mb-2 text-sm font-medium text-gray-900"
              >
                No. Empleado:
              </label>
              <input
                type="text"
                name="idProfesor"
                id="idProfesor"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={formData.idProfesor}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="text-xl block mb-2 text-sm font-medium text-gray-900"
              >
                Nombre(s)<span>*</span>:
              </label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={formData.nombre}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="text-xl block mb-2 text-sm font-medium text-gray-900"
              >
                Apellido Paterno<span>*</span>:
              </label>
              <input
                type="text"
                name="apellidoPaterno"
                id="apellidoPaterno"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={formData.apellidoPaterno}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="text-xl block mb-2 text-sm font-medium text-gray-900"
              >
                Apellido Materno:
              </label>
              <input
                type="text"
                name="apellidoMaterno"
                id="apellidoMaterno"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={formData.apellidoMaterno}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="text-xl block mb-2 text-sm font-medium text-gray-900"
              >
                Cedula profesional:
              </label>
              <input
                type="text"
                name="noCedulaProfesional"
                id="noCedulaProfesional"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={formData.noCedulaProfesional}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="px-5 pb-5">
            <h4 className="font-bold pb-5 pt-10"> Datos de contacto </h4>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor=""
                  className="text-xl block mb-2 text-sm font-medium text-gray-900"
                >
                  Correo electrónico:
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 row-span-2 gap-4 items-center bg-white text-center rounded-lg">
            <ButtonComponent 
              title={"Guardar"} 
              color={"blue"}
            ></ButtonComponent>
            <ButtonComponent
              title={"Dar de baja Profesor"}
              color={"red"}
            ></ButtonComponent>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormProfessor;
