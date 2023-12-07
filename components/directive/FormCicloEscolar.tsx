import React from "react";
import ButtonComponent from "../ButtonComponent";

interface FormCicloEscolarProps {}

export const FormCicloEscolar = ({}: FormCicloEscolarProps) => {
  return (
    <>
      <div className="p-5 bg-white rounded-lg">
        <h4 className="font-bold pb-5"> Nuevo Ciclo Escolar </h4>
        <form>
          <div className="grid grid-cols-2 gap-4 items-center">
            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Año inicio del ciclo escolar:
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
                Año de finalizacion del ciclo escolar:
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
                Periodo de Preiscripciones:
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
                Periodo de calificaciones:
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
              />
            </div>
          </div>
          <div className="text-center pt-10">
           <ButtonComponent 
            title = {"Crear"} 
            color = {"blue"}
            ></ButtonComponent>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormCicloEscolar;
