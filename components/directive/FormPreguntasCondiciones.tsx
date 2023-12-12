import InterfaceDatosMedicos from "@/data/interfaces/datosMedicos";
import InterfacePreguntasCondiciones from "@/data/interfaces/preguntasCondiciones";
import React from "react";

interface FormPreguntasCondicionesProps {
  preguntasCondiciones: InterfacePreguntasCondiciones[];
  dataMedic: InterfaceDatosMedicos;
}

export const FormPreguntasCondiciones = ({
  preguntasCondiciones,
}: FormPreguntasCondicionesProps) => {
  console.log(preguntasCondiciones);
  return (
    <>
      <form action="">
        <div className="p-2">
          <h3 className="font-bold py-5"> Padecimientos </h3>
          <table className="table-fixed w-full text-sm text-center font-semibold">
            <thead className="text-white uppercase bg-green-700">
              <tr className="">
                <th className="p-3"> Pregunta </th>
                <th> Sí </th>
                <th> No </th>
              </tr>
            </thead>
            <tbody>
              {preguntasCondiciones.map((pregunta) => (
                <tr key={pregunta.id}>
                  <td className="p-5"> {pregunta.nombreCondicion} </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                      <label
                        htmlFor="default-radio-1"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Si
                      </label>
                    </div>
                  </td>
                  <td>
                    <div className="items-center mb-4 text-center">
                      <input
                        id=""
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                      <label
                        htmlFor="default-radio-1"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        No
                      </label>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
    </>
  );
};
