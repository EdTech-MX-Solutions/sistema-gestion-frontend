import { ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

function dataUpload(){
    return(
        <>
            <div className="container mx-auto justify-center py-5">
                <h1 className="text-4xl font-bold text-center bg-white p-5 rounded-full"> Carga Por Lote </h1>
            </div>

            <div className="grid grid-rows-4 grid-flow-col gap-4 p-5 bg-green-100">
                <div className="text-center row-span-2">
                    <h4 className="font-bold pb-5"> Recuerda que en el CSV que subas debe tener 30 columnas y debe ser el que descargaste del formulario de google docs </h4>
                </div>

                <div className="text-center row-span-2">
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"> Cargar archivo</button>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Archivo: carga.csv </label>
                </div>
            </div>
        </>
    );
}

export default dataUpload;
