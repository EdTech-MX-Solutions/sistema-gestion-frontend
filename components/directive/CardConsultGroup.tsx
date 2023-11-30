import React from 'react'

interface CardConsultGroupProps{

}

export const CardConsultGroup = ({} : CardConsultGroupProps) => {
  return (
    <>
        <div className="p-5 grid grid-cols-3 row-span-2 grid-rows-3 gap-4 items-center bg-white rounded-lg">
          <div>
            <label
              htmlFor=""
              className="text-xl block mb-2 text-sm font-medium text-gray-900"
            >
              Grado:
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              1
            </label>
          </div>

          <div>
            <label
              htmlFor=""
              className="text-xl block mb-2 text-sm font-medium text-gray-900"
            >
              Grupo:
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              A
            </label>
          </div>

          <div>
            <label
              htmlFor=""
              className="text-xl block mb-2 text-sm font-medium text-gray-900"
            >
              Turno:
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Matutino
            </label>
          </div>

          <div>
            <label
              htmlFor=""
              className="text-xl block mb-2 text-sm font-medium text-gray-900"
            >
              Profesor Responsable:
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Abraham Romero Angeles
            </label>
          </div>

          <div>
            <label
              htmlFor=""
              className="text-xl block mb-2 text-sm font-medium text-gray-900"
            >
              Cupos Disponibles:
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              0
            </label>
          </div>

          <div>
            <label
              htmlFor=""
              className="text-xl block mb-2 text-sm font-medium text-gray-900"
            >
              Salon:
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              S-1
            </label>
          </div>

          <div>
            <label
              htmlFor=""
              className="text-xl block mb-2 text-sm font-medium text-gray-900"
            >
              Cantidad de alumnos inscritos:
            </label>
            <label
              htmlFor=""
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              S-1
            </label>
          </div>
        </div>
    </>
  )
}

export default CardConsultGroup;