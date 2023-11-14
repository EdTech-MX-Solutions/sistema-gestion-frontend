import { ReactNode} from "react";
import PrincipalTitle from "@/components/directive/Principal.Title";


interface DefaultLayoutProps {
  children: ReactNode;
}

function stadistics(){

    const title = "Estadisticas"

    return(
        <>
          <PrincipalTitle title = {title} ></PrincipalTitle>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-lg">
              <h4 className="font-bold pb-3">Filtros: </h4>
              <form>
                <div>
                  <div className="p-2">
                    <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900"> Grupo: </label>
                    <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"/>
                  </div>

                  <div className="p-2">
                    <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900"> Grado: </label>
                    <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"/>
                  </div>

                  <div className="p-2">
                    <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900"> Materia: </label>
                    <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"/>
                  </div>

                  <div className="p-2">
                    <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900"> Ciclo escolar: </label>
                    <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"/>
                  </div>

                  <div className="p-2">
                    <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900"> Boleta del alumno: </label>
                    <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"/>
                  </div>

                  <div className="p-2">
                    <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900"> Elementos de consulta: </label>
                    <input type="text" name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"/>
                  </div>
                </div>

                <div className="p-5 text-center">
                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"> Buscar </button>
                </div>
              </form>
            </div>

            <div className="text-center">
              Grafica
            </div>
          </div>
        </>
    );
}

export default stadistics;

