import InterfaceDatosMedicos from "@/data/interfaces/datosMedicos";
import InterfacePreguntasCondiciones from "@/data/interfaces/preguntasCondiciones";
import React from "react";

interface FormPreguntasCondicionesProps {
  preguntasCondiciones: InterfacePreguntasCondiciones[];
  dataMedic: InterfaceDatosMedicos;
  formData: InterfaceDatosMedicos;
  setFormData: React.Dispatch<React.SetStateAction<InterfaceDatosMedicos>>;
  isNewUsuario: boolean;
}
export const FormPreguntasCondiciones = ({
  preguntasCondiciones,
  formData,
  setFormData,
  isNewUsuario
}: FormPreguntasCondicionesProps,
) => {

  const respuestasCondiciones = formData.respuestasCondicionesMedicas;

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <form action="">
        <div className="p-2">
          <h3 className="font-bold py-5"> Padecimientos </h3>
          <table className="table-fixed w-full text-sm text-center font-semibold">
            <thead className="text-white uppercase bg-green-700">
              <tr className="">
                <th className="p-3"> Pregunta </th>
                <th colSpan={2}> Respuesta </th>
                <th> Especificación </th>
              </tr>
            </thead>
            <tbody>
              {preguntasCondiciones.map((pregunta) => {
                const respuesta = respuestasCondiciones.find(
                  (resp) =>
                    resp.pregunta.nombreCondicion === pregunta.nombreCondicion
                );

                const isCheckedYes = isNewUsuario
                ? false
                : respuesta
                ? respuesta.respuestaCorta === "Sí"
                : false;
              const isCheckedNo = isNewUsuario
                ? false
                : respuesta
                ? respuesta.respuestaCorta === "No"
                : false;
          
                return (
                  <tr key={pregunta.id}>
                    <td className="p-5"> {pregunta.nombreCondicion} </td>
                    <td>
                      <div className="items-center mb-4 text-center">
                        <input
                          type="radio"
                          id={`si-${pregunta.id}`}
                          name={`radio-${pregunta.id}`}
                          value="si"
                          checked={isCheckedYes}
                          onChange={(e) =>
                            handleInputChange({
                              target: {
                                name: "respuestaCorta",
                                value: e.target.value,
                              },
                            })
                          }
                        />
                        <label
                          htmlFor={`si-${pregunta.id}`}
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Si
                        </label>
                      </div>
                    </td>
                    <td>
                      <div className="items-center mb-4 text-center">
                        <input
                          type="radio"
                          id={`no-${pregunta.id}`}
                          name={`radio-${pregunta.id}`}
                          value="no"
                          checked={isCheckedNo}
                          onChange={(e) =>
                            handleInputChange({
                              target: {
                                name: "respuestaCorta",
                                value: e.target.value,
                              },
                            })
                          }
                        />
                        <label
                          htmlFor={`no-${pregunta.id}`}
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          No
                        </label>
                      </div>
                    </td>
                    <td>
                      <input
                        type="text"
                        name="respuestaEspecifica"
                        id="respuestaEspecifica"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full"
                        value={
                          respuesta ? respuesta.respuestaEspecifica || "" : ""
                        }
                        onChange={handleInputChange}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </form>
    </>
  );
};
