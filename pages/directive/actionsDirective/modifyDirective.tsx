import PrincipalTitle from "@/components/directive/Principal.Title";
import { ReactNode} from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

function modifyDirective(){

    const title = "Detalles directivo: [nombre_directivo]"
    return(
        <>
          <PrincipalTitle title={title}></PrincipalTitle>

        <div className="grid grid-rows-6 gap-6">
          <div className="p-5 grid grid-cols-3 row-span-4 gap-4 items-center bg-white rounded-lg">
            <div>
              <label htmlFor="" className="text-xl block mb-2 text-sm font-medium text-gray-900"> No. Empleado: </label>
              <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5" />
            </div>

            <div>
              <label htmlFor="" className="text-xl block mb-2 text-sm font-medium text-gray-900"> Nombre: </label>
              <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5" />
            </div>

            <div>
              <label htmlFor="" className="text-xl block mb-2 text-sm font-medium text-gray-900"> Apellido Paterno: </label>
              <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5" />
            </div>

            <div>
              <label htmlFor="" className="text-xl block mb-2 text-sm font-medium text-gray-900"> Apellido Materno: </label>
              <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5" />
            </div>

            <div>
              <label htmlFor="" className="text-xl block mb-2 text-sm font-medium text-gray-900"> Email: </label>
              <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5" />
            </div>

            <div>
              <label htmlFor="" className="text-xl block mb-2 text-sm font-medium text-gray-900"> Telefono de contacto: </label>
              <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5" />
            </div>
          </div>

          <div className="grid grid-cols-2 row-span-2 gap-4 items-center bg-white text-center rounded-lg">
            <div>
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "> Guardar cambios </button>
            </div>

            <div>
              <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "> Dar de baja</button>
            </div>
          </div>
        </div>
        </>
    );
}

export default modifyDirective;

