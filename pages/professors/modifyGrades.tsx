import { ReactNode, useState } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

function modifyGrades() {
  
  return (
    <>
      <div className="container mx-auto justify-center py-5">
        <h1 className="text-4xl font-bold text-center bg-white p-3 rounded-full">
          Registro de calificaciones [Periodo_actual]
        </h1>
      </div>

      <div className="p-4">
        <label htmlFor="periodo" className="block mb-2 text-sm font-medium text-gray-900"> Seleciona una materia: </label>
        <select name="periodo" id="periodo" className="w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
          <option selected> Selecciona.... </option>
          <option value="math"> Matematicas </option>
        </select>
      </div>

      <div className="flex mx-auto justify-center bg-white p-5 rounded-lg">
        <table className="table-fixed w-full text-sm text-center font-semibold">
          <thead className="text-white uppercase bg-green-700">
            <tr className="">
              <th className="p-3">No. Lista</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
              <th>Nombres (s)</th>
              <th>Calificación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-5"> 1 </td>
              <td> Romero </td>
              <td> Angeles </td>
              <td> Abraham </td>
              <td>
                <div className="w-1/2 h-auto max-w-lg mx-auto">
                  <input type="number" id="default-input" className="bg-gray-50 border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-center" value={10}/>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex mx-auto justify-center p-5 m-3">
        <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">GUARDAR</button>
      </div>
    </>
  );
}

export default modifyGrades;

