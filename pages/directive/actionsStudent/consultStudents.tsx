import { ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

function consultStudents() {
  return (
    <>
      <div className="container mx-auto justify-center py-5">
        <h1 className="text-4xl font-bold text-center bg-white p-5 rounded-full">
          Consultar Alumnos
        </h1>
      </div>

      <div className="grid grid-rows-12 gap-2 bg-green-200">
        <div className="p-5 row-span-2">
          <div>
            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900"> Busqueda: </label>
            <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5" />
            <p className="ml-auto text-xs text-gray-500 dark:text-gray-400">
              Recuerda que puedes buscar a un alumno por nombre, apellidos o
              boleta
            </p>
          </div>
        </div>

        <div className="p-5 bg-white row-span-10">
          <h4 className="font-bold text-gray-900">Listado de alumnos</h4>
          <div className="justify-center bg-white p-5 rounded-lg">
            <table className="table-fixed w-full text-sm text-center font-semibold">
              <thead className="text-white uppercase bg-green-700">
                <tr className="">
                  <th className="p-3">Boleta</th>
                  <th colSpan={2}>
                    Apellido Paterno Apellido Materno Nombres (s)
                  </th>
                  <th> Grado y Grupo </th>
                  <th> Acciones </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-5"> 1 </td>
                  <td colSpan={2}> Romero Angeles Abraham </td>
                  <td> 1A</td>
                  <td>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                      <span className="relative px-1 py-0.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                        Ver detalles
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default consultStudents;

