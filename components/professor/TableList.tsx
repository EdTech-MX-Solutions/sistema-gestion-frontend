import React from "react";
import ButtonComponent from "../ButtonComponent";

interface TableListprops {
  lista : Array<{
    no_boleta: string;
    curp: string;
    nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
    aniosPreescolar: number;
    fecha_nacimiento: string;
    edad: number;
    pais_origen: string;
    sexo: string;
    estatus: string;
    entidad_nacimiento: string,
  }>
}

const TableList = ({lista}: TableListprops) => {
  return (
    <>
      <form>
      <div className="justify-center bg-white p-5 rounded-lg">
        <table className="table-fixed w-full text-sm text-center font-semibold">
          <thead className="text-white uppercase bg-green-700">
            <tr className="">
              <th className="p-3"> No. Lista </th>
              <th> Apellido Paterno </th>
              <th> Apellido Materno </th>
              <th> Nombres (s) </th>
              <th colSpan={2}> Acciones </th>
              <th> 06/11/2023 </th>
            </tr>
          </thead>
          <tbody>
            {lista.map((alumno) => (
              <tr key = {alumno.no_boleta}>
                <td className="p-5"> 1 </td>
                <td> {alumno.nombre} </td>
                <td> {alumno.apellido_paterno} </td>
                <td> {alumno.apellido_materno} </td>
                <td>
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                    <span className="relative px-1 py-0.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                      Ver Datos
                    </span>
                  </button>
                </td>
                <td>
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-600 to-red-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                    <span className="relative px-1 py-0.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                      Reporte
                    </span>
                  </button>
                </td>

                <td>
                  <div className="items-center p-1 rounded">
                    <input
                      id="bordered-checkbox-1"
                      type="checkbox"
                      className="w-7 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </div>
                </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center">
        <ButtonComponent title = {"Cerrar asistencia"} color = {"green"}></ButtonComponent>
      </div>
      </form>
    </>
  );
};

export default TableList;
