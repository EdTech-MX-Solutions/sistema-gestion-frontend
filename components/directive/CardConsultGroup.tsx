import InterfaceGrupo from "@/interfaces/grupos";
import React from "react";
import ButtonComponent from "../ButtonComponent";
import TableStudentsGroup from "./TableStudentsGroup";
import router from "next/router";
import { useAlumno } from "../context/AlumnoProvider";
interface CardConsultGroupProps {
  group: InterfaceGrupo;
}

export const CardConsultGroup = ({ group }: CardConsultGroupProps) => {
  
  const handleModifyGroup = (gropoId: any) => {
    router.push(`/directive/actionsGroup/modifyGroup?id=${gropoId}`)
  }

  const { alumno } = useAlumno();
  console.log(alumno);

  return (
    <>
      <div className="rounded-lg bg-white">
        <div className="p-5 grid grid-cols-3 row-span-2 grid-rows-3 gap-4 items-center bg-white rounded-lg">
          <div>
            <label
              htmlFor=""
              className="text-xl block mb-2 text-sm font-medium text-gray-900"
            >
              Grado:
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              {group.grado}
            </label>
          </div>

          <div>
            <label
              htmlFor=""
              className="text-xl block mb-2 text-sm font-medium text-gray-900"
            >
              Grupo:
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              {group.subGrado}
            </label>
          </div>

          <div>
            <label
              htmlFor=""
              className="text-xl block mb-2 text-sm font-medium text-gray-900"
            >
              Turno:
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              {group.turno}
            </label>
          </div>

          <div>
            <label
              htmlFor=""
              className="text-xl block mb-2 text-sm font-medium text-gray-900"
            >
              Profesor Responsable:
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              {group.responsable}
            </label>
          </div>

          <div>
            <label
              htmlFor=""
              className="text-xl block mb-2 text-sm font-medium text-gray-900"
            >
              Cupos Disponibles:
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              {group.cupos}
            </label>
          </div>

          <div>
            <label
              htmlFor=""
              className="text-xl block mb-2 text-sm font-medium text-gray-900"
            >
              Salon:
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              {group.salon}
            </label>
          </div>

          <div>
            <label
              htmlFor=""
              className="text-xl block mb-2 text-sm font-medium text-gray-900"
            >
              Cantidad de alumnos inscritos:
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              {group.inscritos}
            </label>
          </div>
        </div>
        <div className="grid grid-cols-2 row-span-1 gap-4 items-center text-center">
          <ButtonComponent
            title={"Modificar Grupo"}
            color={"blue"}
            onClick={() => handleModifyGroup(group.idGrupo)}
          ></ButtonComponent>
          <ButtonComponent 
            title={"Eliminar"} 
            color={"red"}
          ></ButtonComponent>
        </div>

        <TableStudentsGroup
            titleBtn1={"Ver Datos del Alumno"}
            titleBtn2={"Ver Datos Del Alumno"}
            titleTable={
              "Listado de Alumnos disponibles para el grupo seleccionado"
            }
          ></TableStudentsGroup>
      </div>
    </>
  );
};

export default CardConsultGroup;
