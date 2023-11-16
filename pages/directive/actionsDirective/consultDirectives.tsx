import { ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

function consultDirective() {
  return (
    <>
      <div className="container mx-auto justify-center py-5">
        <h1 className="text-4xl font-bold text-center bg-white p-5 rounded-full">
          Consultar Directivos
        </h1>
      </div>

      <div className="grid grid-rows-4 gap-4 bg-green-200">
        <div className="p-5 grid grid-cols-1 gap-4 row-span-1">
          <div>
            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900"> Busqueda: </label>
            <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5" />
            <p className="ml-auto text-xs text-gray-500 dark:text-gray-400 p-2">
              Recuerda que puedes buscar a un directivo por nombre, apellidos o
              No. de empleado.
            </p>
          </div>
        </div>

        <div className="p-5 bg-white row-span-3">
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
                <tr>
                  <td className="p-5"> 1 </td>
                  <td colSpan={2}> Romero Angeles Abraham </td>
                  <td> Consulta y modificacion </td>
                  <td> alguien@gmail.com </td>
                  <td> 5511223344 </td>
                  <td>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                      <span className="relative px-1 py-0.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                        Consultar
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

export default consultDirective;

