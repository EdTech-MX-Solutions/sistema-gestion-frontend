import React, { useEffect } from "react";
import ButtonComponent from "../ButtonComponent";
import InterfaceProfessor from "@/interfaces/professor";
import router, { useRouter } from "next/router";
import { useState } from "react";
import { TableVistaTelefonos } from "./TableVistaTelefonos";
interface CardConsultDirectiveProps {
  directive: InterfaceProfessor;
}

export const CardConsultDirective = ({ directive }: CardConsultDirectiveProps) => {

  const router = useRouter();

  const handleModifyDirective = (directiveId: any) => {
    router.push(`/directive/actionsDirective/modifyDirective?id=${directiveId}`);
  };

  return (
    <>
      <div className="items-center bg-white rounded-lg">
          <div className="p-5 grid grid-cols-3 row-span-4 gap-4 ">
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
                {directive.idProfesor}
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
          </div>

          <TableVistaTelefonos telefonos={[]}></TableVistaTelefonos>

          <div className="grid grid-cols-2 gap-4 row-span-2 items-center text-center">
            <div>
              <ButtonComponent
                title={"Modificar"}
                color={"blue"}
                onClick={() => handleModifyDirective(directive.idProfesor)}
              ></ButtonComponent>
            </div>

            <div>
              <ButtonComponent
                title={"Dar de Baja"}
                color={"blue"}
                
              ></ButtonComponent>
            </div>
          </div>
      </div>
    </>
  );
};

export default CardConsultDirective;
