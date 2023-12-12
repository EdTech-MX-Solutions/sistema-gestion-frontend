import InterfaceDatosMedicos from "@/data/interfaces/datosMedicos";
import InterfacePreguntasHereditarias from "@/data/interfaces/preguntasHereditarias";
import React from "react";

interface FormPreguntasHereditariasProps {
    preguntasHereditarias: InterfacePreguntasHereditarias[];
    dataMedic: InterfaceDatosMedicos;
}

export const FormPreguntasHereditarias =
  ({preguntasHereditarias}: FormPreguntasHereditariasProps) => {
    return (
      <>
        <form action="">
          <div className="p-2">
            <h3 className="font-bold py-5"> Preguntas Hereditarias </h3>
            <table className="table-fixed w-full text-sm text-center font-semibold">
              <thead className="text-white uppercase bg-green-700">
                <tr className="">
                  <th className="p-3"> Pregunta </th>
                  <th> Sí </th>
                  <th> No </th>
                  <th> Espesificación </th>
                </tr>
              </thead>
              <tbody>
                {preguntasHereditarias.map((pregunta) => (
                  <tr key={pregunta.id}>
                    <td className="p-5"> {pregunta.pregunta} </td>
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
                    <td>
                      <label
                        htmlFor=""
                        className="block mb-2 text-sm font-medium text-gray-900 text-center"
                      >
                        ¿Cúal?
                      </label>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full"
                      />
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
