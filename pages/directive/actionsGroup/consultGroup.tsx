import PrincipalTitle from "@/components/directive/Principal.Title";
import { ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

function consultGroup() {
  const title = "Detalles grupo: [grado+grupo]";

  return (
    <>
      <PrincipalTitle title={title}></PrincipalTitle>

      <div className="grid grid-rows-12 gap-6">
        <div className="p-5 grid grid-cols-3 row-span-2 grid-rows-3 gap-4 items-center bg-white rounded-lg">
          <div>
            <label
              htmlFor=""
              className="text-xl block mb-2 text-sm font-medium text-gray-900"
            >
              {" "}
              Grado:{" "}
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              {" "}
              1{" "}
            </label>
          </div>

          <div>
            <label
              htmlFor=""
              className="text-xl block mb-2 text-sm font-medium text-gray-900"
            >
              {" "}
              Grupo:{" "}
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              {" "}
              A{" "}
            </label>
          </div>

          <div>
            <label
              htmlFor=""
              className="text-xl block mb-2 text-sm font-medium text-gray-900"
            >
              {" "}
              Turno:{" "}
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              {" "}
              Matutino{" "}
            </label>
          </div>

          <div>
            <label
              htmlFor=""
              className="text-xl block mb-2 text-sm font-medium text-gray-900"
            >
              {" "}
              Profesor Responsable:{" "}
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              {" "}
              Abraham Romero Angeles{" "}
            </label>
          </div>

          <div>
            <label
              htmlFor=""
              className="text-xl block mb-2 text-sm font-medium text-gray-900"
            >
              {" "}
              Cupos Disponibles:{" "}
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              {" "}
              0{" "}
            </label>
          </div>

          <div>
            <label
              htmlFor=""
              className="text-xl block mb-2 text-sm font-medium text-gray-900"
            >
              {" "}
              Salon:{" "}
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              {" "}
              S-1{" "}
            </label>
          </div>

          <div>
            <label
              htmlFor=""
              className="text-xl block mb-2 text-sm font-medium text-gray-900"
            >
              {" "}
              Cantidad de alumnos inscritos:{" "}
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              {" "}
              S-1{" "}
            </label>
          </div>
        </div>

        <div className="row-span-11 bg-white p-5">
          <h4 className="p-3 font-bold text-gray-900 ">
            {" "}
            Listado de alumnos inscritos
          </h4>
          <table className="table-fixed w-full text-sm text-center font-semibold">
            <thead className="text-white uppercase bg-green-700">
              <tr className="">
                <th className="p-3">No. Lista</th>
                <th>Apellido Paterno</th>
                <th>Apellido Materno</th>
                <th>Nombres (s)</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-8"> 3 </td>
                <td> Romero </td>
                <td> Angeles </td>
                <td> Abraham </td>
                <td>
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                    <span className="relative px-1 py-0.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                      Ver Datos de alumno
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-2 row-span-1 gap-4 items-center bg-white text-center rounded-lg">
          <div className="p-5">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
            >
              {" "}
              Modificar{" "}
            </button>
          </div>

          <div className="p-5">
            <button
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
            >
              {" "}
              Dar de baja Grupo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default consultGroup;
