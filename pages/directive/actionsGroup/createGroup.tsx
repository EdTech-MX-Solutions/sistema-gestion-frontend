import { ReactNode } from "react";
import PrincipalTitle from "@/components/directive/Principal.Title";

interface DefaultLayoutProps {
  children: ReactNode;
}

function createGroup() {
  const title = "Crear Grupo";

  return (
    <>
      <PrincipalTitle title={title}></PrincipalTitle>

      <div className="justify-center bg-white p-5 rounded-lg">
        <h4 className="font-bold pb-5">Elementos del grupo: </h4>
        <form>
          <div className="grid grid-cols-3 gap-4 items-center">
            <div>
              <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900"> Grado: </label>
              <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"/>
            </div>

            <div>
              <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900"> Grupo: </label>
              <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"/>
            </div>

            <div>
              <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900"> Turno: </label>
              <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"/>
            </div>

            <div>
              <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900"> Responsable: </label>
              <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"/>
            </div>

            <div>
              <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900"> Salon: </label>
              <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"/>
            </div>
          </div>

          <div className="text-center p-8">
              <button type="button" className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"> Crear Grupo </button>
          </div>
        </form>


      </div>

      <div className="justify-center bg-white p-5 rounded-lg">
        <h4 className="font-bold pb-5"> Lista de alumnos disponibles para el grado seleccionado: </h4>
        <table className="table-fixed w-full text-sm text-center font-semibold">
          <thead className="text-white uppercase bg-green-700">
            <tr className="">
              <th className="p-3">Grupo anterior</th>
              <th> Apellido Paterno </th>
              <th> Apellido Materno </th>
              <th> Nombres (s) </th>
              <th> Calificacion grado anterior </th>
              <th> Accion </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-5"> 1A </td>
              <td> Romero </td>
              <td> Angeles </td>
              <td> Abraham </td>
              <td> 10 </td>
              <td> 
                <button type="button" className="text-center focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"> Inscribir </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="justify-center bg-white p-5 rounded-lg">
        <h4 className="font-bold pb-5"> Alumnos inscritos al grupo: </h4>
        <table className="table-fixed w-full text-sm text-center font-semibold">
          <thead className="text-white uppercase bg-green-700">
            <tr className="">
              <th className="p-3">Apellido Paterno </th>
              <th> Apellido Materno </th>
              <th> Nombres (s) </th>
              <th> Calificacion grado anterior </th>
              <th> Accion </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-5"> Romero </td>
              <td> Angeles </td>
              <td> Abraham </td>
              <td> 10 </td>
              <td> 
                <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"> Eliminar </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default createGroup;
