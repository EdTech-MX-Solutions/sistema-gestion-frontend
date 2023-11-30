import React from "react";
import ButtonComponent from "../ButtonComponent";

interface CardConsultDirectiveProps {
    directive : {
        idDirective: string
        nombre: String
        apellidoPaterno: String
        apellidoMaterno: String
        email: String
        telefono : String
    }
}

export const CardConsultDirective = ({directive}: CardConsultDirectiveProps) => {
  return (
    <>
      <div className="grid grid-rows-6 gap-6 bg-white rounded-lg">
        <div className="p-5 grid grid-cols-3 row-span-4 gap-4 items-center">
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
              {directive.idDirective}
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
              {directive.nombre}
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
              {directive.apellidoPaterno}
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
              {directive.apellidoMaterno}
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
              {directive.email}
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
              {directive.telefono}
            </label>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 row-span-2 items-center text-center">
          <div>
            <ButtonComponent
              title={"Modificar"}
              color={"blue"}
            ></ButtonComponent>
          </div>

          <div>
            <ButtonComponent
              title={"Dar de Baja"}
              color={"red"}
            ></ButtonComponent>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardConsultDirective;
