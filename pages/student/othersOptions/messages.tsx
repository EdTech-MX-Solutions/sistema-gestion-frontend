import { ReactNode, useState } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

function messages() {
  return (
    <>
      <div className="container mx-auto justify-center py-5">
        <h1 className="text-4xl font-bold text-center bg-white p-3 rounded-full"> Mensajes y avisos </h1>
      </div>

        <div className="grid grid-cols-2 gap-4 p-5">

          <div className="col-span-1">

            <div className="grid grid-rows-10 gap-2">

              <div className="p-4 grid grid-rows-2">
                <h4> Buzón de entrada </h4>
                <label htmlFor="opc" className="block mb-2 text-sm font-medium text-gray-900"> Selecione la opcion que desea visualizar:  </label>
                <select name="opc" id="opc" className="w-full p-5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                  <option selected> Selecciona.... </option>
                  <option value="primerAño"> Ver mensajes </option>
                  <option value="segundoAño"> Ver reportes </option>
                </select>
              </div>

              <div className="p-4 row-span-9 bg-gray-200 border overflow-y-auto grid grid-rows-8">
                <div className="max-w-sm p-6 bg-white m-5 border border-gray-200 rounded-lg shadow">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-center">Mensaje 2</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Mensaje por mala conducta</p>
                  <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Ver detalles
                      <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </a>
                </div>

                <div className="max-w-sm p-6 bg-white m-5 border border-gray-200 rounded-lg shadow">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-center">Mensaje 2</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Mensaje por mala conducta</p>
                  <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Ver detalles
                      <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </a>
                </div>

                <div className="max-w-sm p-6 bg-white m-5 border border-gray-200 rounded-lg shadow">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-center">Mensaje 2</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Mensaje por mala conducta</p>
                  <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Ver detalles
                      <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </a>
                </div>
              </div>

            </div>

          </div>

          <div className="col-span-1">

            <div className="grid grid-rows-1 gap-2">

              <div className="p-4">
                <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow">
                    <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">No. de reporte: 1</h5>
da
                    <h6 className="mb-5 text-base text-gray-500 sm:text-lg"> Motivo: Mala conducta</h6>

                    <p className="mb-5 text-base text-gray-900 sm:text-lg"> Detalles del mensaje </p>
                    
                    <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt modi itaque quo ut accusamus ad voluptate quos reiciendis consequatur, obcaecati magnam deleniti! Id, dicta! Sapiente eaque ipsum ea maxime quos!</p>
                    </div>
                  </div>
              </div>
              <div className="p-4 bg-white">
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
                <p className="ml-auto text-xs text-gray-500 dark:text-gray-400"> Recuerda que el mensaje que escribas aqui es directamente para la directora.</p>
              </div>

            </div>

          </div>

        </div>


    </>
  );
}

export default messages;