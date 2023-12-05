import React from "react";

interface FormProfessorProps {
  professor: {
    idProfessor: string
    nombre: string
    apellidoPaterno: string
    apellidoMaterno: string
    cedulaProfesional : string
    email: string
    telefono: string
  };
}

export const FormProfessor = ({professor}: FormProfessorProps) => {
  return (
    <>
      <form>
        <div className="bg-white rounded-lg">
        <h4 className="font-bold p-5"> Datos personales </h4>
          <div className="p-5 grid grid-cols-3 gap-4 items-center">
            <div>
              <label
                htmlFor=""
                className="text-xl block mb-2 text-sm font-medium text-gray-900"
              >
                No. Empleado:
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value = {professor.idProfessor}
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="text-xl block mb-2 text-sm font-medium text-gray-900"
              >
                Nombre(s)<span>*</span>:
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value = {professor.nombre}
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="text-xl block mb-2 text-sm font-medium text-gray-900"
              >
                Apellido Paterno<span>*</span>:
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value = {professor.apellidoPaterno}
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="text-xl block mb-2 text-sm font-medium text-gray-900"
              >
                Apellido Materno<span>*</span>:
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value = {professor.apellidoMaterno}
                required
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="text-xl block mb-2 text-sm font-medium text-gray-900"
              >
                Cedula profesional:
              </label>
              <input
                type="text"
                name=""
                id=""
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value = {professor.cedulaProfesional}
              />
            </div>
          </div>

          

          <div className="px-5 pb-5">
          <h4 className="font-bold pb-5 pt-10"> Datos de contacto </h4>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor=""
                  className="text-xl block mb-2 text-sm font-medium text-gray-900"
                >
                  Correo electrónico:
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={professor.email}
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="text-xl block mb-2 text-sm font-medium text-gray-900"
                >
                  Telefono de contacto<span>*</span>:
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={professor.telefono}
                  required
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 row-span-2 gap-4 items-center bg-white text-center rounded-lg">
            <div className="p-5">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
              >
                Guardar Cambios
              </button>
            </div>

            <div className="p-5">
              <button
                type="button"
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
              >
                Dar de baja Profesor
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormProfessor;
