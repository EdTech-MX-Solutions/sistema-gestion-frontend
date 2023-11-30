import { Gruppo } from "next/font/google";
import React from "react";
import ButtonComponent from "../ButtonComponent";

interface FormGroupProps {
    group : {
        idGrupo : Number,
        grado : string,
        subGrado : string,
        turno : string,
        responsable : string,
        idResponsable : Number,
        cupos : Number,
        salon : string,
        inscritos : Number,
        cicloEscolar : string,
    }
}

export const FormGroup = ({group}: FormGroupProps) => {
  return (
    <>
      <form>
        <div className="grid grid-cols-3 gap-4 items-center px-5 pt-5">
          <div>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Grado:
            </label>
            <input
              type="text"
              name=""
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
              value = {group.grado}
            />
          </div>

          <div>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Grupo:
            </label>
            <input
              type="text"
              name=""
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
              value = {group.subGrado}
            />
          </div>

          <div>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Turno:
            </label>
            <input
              type="text"
              name=""
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
              value = {group.turno}
            />
          </div>

          <div>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Responsable:
            </label>
            <input
              type="text"
              name=""
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
              value = {group.responsable}
            />
          </div>

          <div>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Salon:
            </label>
            <input
              type="text"
              name=""
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
              value = {group.salon}
            />
          </div>
        </div>
        <div className="text-center">
            <ButtonComponent title = {"Guardar"} color = {"blue"}></ButtonComponent>
        </div>
      </form>
    </>
  );
};

export default FormGroup;
