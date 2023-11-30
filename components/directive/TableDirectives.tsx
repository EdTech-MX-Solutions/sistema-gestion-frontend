import React from "react";

interface TableDirectivesProps {
  directives: Array<{
    idDirective: string
    nombre: String
    apellidoPaterno: String
    apellidoMaterno: String
    email: String
    telefono : String
  }>;
}

export const TableDirectives = ({ directives }: TableDirectivesProps) => {
  return (
    <>
      <div className="p-5 bg-white">
        <h4 className="font-bold text-gray-900">Listado de directivos</h4>
        <div className="justify-center bg-white p-5 rounded-lg">
          <table className="table-fixed w-full text-sm text-center font-semibold">
            <thead className="text-white uppercase bg-green-700">
              <tr className="">
                <th className="p-3">No. Empleado</th>
                <th colSpan={2}>
                  Apellido Paterno Apellido Materno Nombres (s)
                </th>
                <th> Permisos </th>
                <th> Email </th>


                <th> Telefono </th>
                <th> Acciones </th>
              </tr>
            </thead>
            <tbody>
              {directives.map((directive) => (
                <tr key = {directive.idDirective}>
                  <td className="p-5"> {directive.idDirective} </td>
                  <td colSpan={2}> {`${directive.nombre}  ${directive.apellidoPaterno}  ${directive.apellidoMaterno}`} </td>
                  <td> Consulta y modificacion </td>
                  <td> {directive.email} </td>
                  <td> {directive.telefono} </td>
                  <td>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                      <span className="relative px-1 py-0.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                        Consultar
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TableDirectives;
