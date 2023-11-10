import { ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

function studentReport() {
  return (
    <>
      <div className="container mx-auto justify-center py-5">
        <h1 className="text-4xl font-bold text-center bg-white p-3 rounded-full">
          Reporte
        </h1>
      </div>

      <div className="justify-center bg-white p-5 rounded-lg">
        <div className="p-5">
          <h4 className="font-bold text-gray-700"> Alumno : [Nombre del alumno]</h4>
        </div>

        <div className="p-3 bg-green-400 rounded-lg justify-center text-center">
          <h5 className="p-2 text-center font-bold text-gray-700"> En este espacio puedes escribir cualquier conducta que crea importante reportar a direccion y tutores del alumno</h5>
        </div>

        <div className="py-5">
          <form>
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
              <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                <textarea id="comment" rows={4} className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
              </div>
            </div>

            <div className="p-1 text-center">
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">ENVIAR</button>
            </div>
          </form>
          <p className="ml-auto text-xs text-gray-500 dark:text-gray-400"> Recuerda que el mensaje que escribas aqui es directamente para la directora.</p>
        </div>

      </div>
    </>
  );
}

export default studentReport;

