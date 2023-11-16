import { ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

function registrerDataPersonalStudent() {
  return (
    <>
      <div className="container mx-auto justify-center py-5">
        <h1 className="text-4xl font-bold text-center bg-white p-5 rounded-full"> Registro Alumno </h1>
      </div>

      <div className="grid grid-rows-1 grid-flow-col gap-4">
        <div className="p-7 bg-green-200 rounded-lg">
          <h4 className="font-bold pb-5"> Datos personales Alumno </h4>
          <form>
            <div className="grid grid-cols-3 gap-4 items-center">
              <div>
                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900"> CURP: </label>
                <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5" />
              </div>

              <div>
                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900"> Grado: </label>
                <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5" />
              </div>

              <div>
                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900"> Grupo: </label>
                <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5" />
              </div>

              <div>
                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900"> Apellido Paterno: </label>
                <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5" />
              </div>

              <div>
                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900"> Apellido Materno: </label>
                <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 ps-10 p-2.5" placeholder="Select date" />
              </div>

              <div>
                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900"> Nombre(s): </label>
                <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5" />
              </div>

              <div>
                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900"> Fecha de nacimiento: </label>
                <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5" />
              </div>

              <div>
                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900"> Edad: </label>
                <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5" />
              </div>

              <div>
                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900"> Años preescolar: </label>
                <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5" />
              </div>

              <div>
                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900"> Sexo: </label>
                <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5" />
              </div>
            </div>

            <div className="text-center pt-10">
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"> Siguiente  </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default registrerDataPersonalStudent;

