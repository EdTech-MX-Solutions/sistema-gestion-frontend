import React from "react";
import ButtonComponent from "../ButtonComponent";
import InterfaceProfessor from "@/interfaces/professor";

interface CardConsultProfessorProps {
  professor : InterfaceProfessor
}

export const CardConsultProfessor = ({professor}: CardConsultProfessorProps) => {
  
  return (
    <>
    <div className="bg-white rounded-lg">
    <div className="grid grid-rows-12 gap-6">
        <div className="p-5 grid grid-cols-3 row-span-10 gap-4 items-center bg-white rounded-lg">
          <div>
            <label
              htmlFor=""
              className="text-xl block mb-2 text-sm font-medium text-gray-900"
            >
              No. Empleado:
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              {professor.idProfesor}
            </label>
          </div>

          <div>
            <label
              htmlFor=""
              className="text-xl block mb-2 text-sm font-medium text-gray-900"
            >
              Nombre:
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              {professor.nombre}
            </label>
          </div>

          <div>
            <label
              htmlFor=""
              className="text-xl block mb-2 text-sm font-medium text-gray-900"
            >
              Apellido Paterno:
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              {professor.apellidoPaterno}
            </label>
          </div>

          <div>
            <label
              htmlFor=""
              className="text-xl block mb-2 text-sm font-medium text-gray-900"
            >
              Apellido Materno:
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              {professor.apellidoMaterno}
            </label>
          </div>

          <div>
            <label
              htmlFor=""
              className="text-xl block mb-2 text-sm font-medium text-gray-900"
            >
              Email:
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              {professor.email}
            </label>
          </div>

          <div>
            <label
              htmlFor=""
              className="text-xl block mb-2 text-sm font-medium text-gray-900"
            >
              Telefono de contacto:
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              56494949
            </label>
          </div>
        </div>

        <div className="grid grid-cols-2 row-span-2 gap-4 items-center bg-white text-center">
          <ButtonComponent title = {"Modificar"} color = {"blue"}></ButtonComponent>
          <ButtonComponent title = {"Dar de Baja"} color = {"red"}></ButtonComponent>
          </div>
      </div>
    </div>
    </>
  );
};

export default CardConsultProfessor;
