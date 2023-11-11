import { ReactNode, useState } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

function suggestions(){
    return (
        <>
            <div className="container mx-auto justify-center py-5">
                <h1 className="text-4xl font-bold text-center bg-white p-3 rounded-full"> Quejas o sugerencia </h1>
            </div>

            <div className="p-5 m-5 text-center bg-blue-200 font-bold rounded-lg">
                <p> En este espacio podrás escribir de manera anónima cualquier asunto relacionado con una conducta inapropiada o incorrecta del profesor </p>
            </div>

            <div className="p-2 bg-white">
                <form>
                  <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <h5 className="p-2 text-center font-bold text-gray-700">Escribir mensaje </h5>
                      <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                          <label htmlFor="comment" className="sr-only">Comentario</label>
                          <textarea id="comment" rows={4} className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
                      </div>
                  </div>

                  <div className="p-1 text-center">
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Enviar</button>
                  </div>
                </form>
                <p className="ml-auto text-xs text-gray-500 dark:text-gray-400"> Recuierda que el mensaje que escribas aqui es directamente para la directora.</p>
            </div>
        </>
    );
}

export default suggestions;