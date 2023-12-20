import InterfaceGrupo from "@/data/interfaces/grupos";
import React, { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";
import TableStudentsGroup from "./TableStudentsGroup";
import router from "next/router";
import InterfaceAlumno from "@/data/interfaces/alumno";
import SIGEAPICollection from "@/data/calls/apiHandler";
import { useCookies } from "react-cookie";

interface CardConsultGroupProps {
  group: InterfaceGrupo;
}

export const CardConsultGroup = ({ group }: CardConsultGroupProps) => {
  const handleModifyGroup = (gropoId: any) => {
    router.push(`/directive/actionsGroup/modifyGroup?id=${gropoId}`);
  };

  const [cookies, setCookie] = useCookies(["token", "idGrupo", "childs"]);
  const [alumnos, setAlumnos] = useState<InterfaceAlumno[]>([]);

  const fetchAlumnosInscritos = async () => {
    const api = new SIGEAPICollection();
    const token = cookies.token;
    const idGrupoSeleccionado = router.query.id + "";
    if(idGrupoSeleccionado === undefined){
      return;
    }
    else{
      try {
        const response = await api.sharedCollection.executeGetAlumnosGrupo(
          token,
          idGrupoSeleccionado
        );
        if (response.ok) {
          const data = await response.json();
  
          let newAlumnos: InterfaceAlumno[] = [];
          for (let i = 0; i < data.length; i++) {
            const element = data[i];
            const sexo = element.sexo === "M" ? "Masculino" : "Femenino";
            const newAlumno: InterfaceAlumno = {
              noBoleta: element.noBoleta,
              curp: element.curp,
              nombres: element.nombres,
              apellidoPaterno: element.apellidoPaterno,
              apellidoMaterno: element.apellidoMaterno,
              fechaNacimiento: element.fechaNacimiento,
              sexo: sexo,
              estatus: element.estatus,
              entidad: element.entidad,
              paisOrigen: element.paisOrigen,
              edad: element.edad,
              aniosPreescolar: element.aniosPreescolar,
              grado: element.grado,
              grupo: element.grupo,
              actualizarDatosMedicos: element.actualizarDatosMedicos,
            };
            newAlumnos.push(newAlumno);
          }
          setAlumnos(newAlumnos);
        }
      } catch (error) {
        console.error(error);
      }
    };
  }
   

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetchAlumnosInscritos();
  }, []);

  console.log(alumnos);

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
              Salón:
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
          <ButtonComponent title={"Eliminar"} color={"red"}></ButtonComponent>
        </div>

        <TableStudentsGroup
          titleBtn1={"Ver Datos del Alumno"}
          titleBtn2={"Ver Datos Del Alumno"}
          titleTable={"Listado de Alumnos inscritos"}
          alumnosInscritos={alumnos}
          evento={() => {}}
        ></TableStudentsGroup>
      </div>
    </>
  );
};

export default CardConsultGroup;
