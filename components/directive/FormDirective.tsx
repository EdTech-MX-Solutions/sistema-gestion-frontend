import React from "react";
import ButtonComponent from "@/components/ButtonComponent";

interface FormDirectiveProps {
  directive: {
    idDirective: string;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    email: string;
    telefono: string;
  };
}

export const FormDirective = ({ directive }: FormDirectiveProps) => {
  return (
    <>
      <div className="grid grid-rows-1 grid-flow-col gap-4">
        <div className="p-7 bg-green-200 rounded-lg">
          <h4 className="font-bold pb-5"> Datos personales </h4>
          <form>
            <div className="grid grid-cols-3 gap-4 items-center">
              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Apellido Paterno:
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value = {directive.apellidoPaterno}
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Apellido Materno:
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value = {directive.apellidoMaterno}
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Nombres:
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value = {directive.nombre}
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Cédula Profesional:
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
                  Permisos:
                </label>
                <select
                  name=""
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                >
                  <option value="">Directivo</option>
                  <option value="">Secretario</option>
                  <option value="">Otro</option>
                </select>
              </div>
            </div>

            <h4 className="font-bold pb-5 pt-10"> Datos de contacto </h4>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Correo electronico:
                </label>
                <input
                  type="email"
                  name=""
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value = {directive.email}
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Telefono de contacto
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value = {directive.telefono}
                />
              </div>
            </div>
            <div className="text-center">
            <ButtonComponent
              title={"Registrar Directivo"}
              color={"blue"}
            ></ButtonComponent>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormDirective;
