import InterfaceProfessor from "@/data/interfaces/professor";
import React, { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";
import { useRouter } from "next/router";
import { useProfesores } from "../context/ProfesorProvider";
import { TableVistaTelefonos } from "./TableVistaTelefonos";
import SIGEAPICollection from "@/data/calls/apiHandler";
import { cookies } from "next/dist/client/components/headers";
import { useCookies } from "react-cookie";

interface FormProfessorProps {
  professor: InterfaceProfessor;
  isNewUser: boolean;
}

export const FormProfessor = ({ professor, isNewUser }: FormProfessorProps) => {
  const router = useRouter();
  const { id } = router.query;

  const [cookies, setCookie] = useCookies(["token"]);

  const [formData, setFormData] = useState<InterfaceProfessor>({
    idProfesor: isNewUser ? "" : professor.idProfesor,
    nombre: isNewUser ? "" : professor.nombre,
    apellidoPaterno: isNewUser ? "" : professor.apellidoPaterno,
    apellidoMaterno: isNewUser ? "" : professor.apellidoMaterno,
    email: isNewUser ? "" : professor.email,
    activo: isNewUser ? false : professor.activo,
    diretivo: isNewUser ? false : professor.diretivo,
    noCedulaProfesional: isNewUser ? "" : professor.noCedulaProfesional,
    numero: isNewUser ? [] : professor.numero,
  });

  const { profesores, updateProfesor } = useProfesores();

  const handleInscribirProfesor = async (nuevoProfesor : InterfaceProfessor) =>{
    const api = new SIGEAPICollection();
    const token = cookies.token;
    const response = await api.directivosCollection.executePostNuevoProfesor(
      token,
      nuevoProfesor
    );

    if(response.status == 200){
      const response2 = await api.directivosCollection.executeGetProfessors(
        token,
      );

      if(response2.ok){
        const data = await response2.json();
        console.log("Profesor inscrito con exito");
        updateProfesor(data);
      }
    }
  }

  useEffect(() => {
    if (id && profesores && profesores.length > 0) {
      const foundProfesor = profesores.find(
        (profesor) => profesor.idProfesor == id
      );
      if (foundProfesor) {
        setFormData(foundProfesor);
      } else {
        console.error(`No se encontro un profesor con la ID: ${id}`);
      }
    }
  }, [id, profesores]);

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("Datos: ", formData);
  };

  const handleModifyTelefonos = ({ profesorId }: { profesorId: any }) => {
    router.push(`/directive/registrerTelefonos/?id=${profesorId}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
              <label
                htmlFor=""
                className="text-xl block mb-2 text-sm font-medium text-gray-900"
              >
                {isNewUser ? "Nuevo profesor" : formData.idProfesor}
              </label>
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
                name="apellidoPaterno"
                id="apellidoPaterno"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={formData.apellidoPaterno}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="text-xl block mb-2 text-sm font-medium text-gray-900"
              >
                Apellido Materno:
              </label>
              <input
                type="text"
                name="apellidoMaterno"
                id="apellidoMaterno"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={formData.apellidoMaterno}
                onChange={handleInputChange}
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
                name="nombre"
                id="nombre"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={formData.nombre}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="text-xl block mb-2 text-sm font-medium text-gray-900"
              >
                Cédula profesional:
              </label>
              <input
                type="text"
                name="noCedulaProfesional"
                id="noCedulaProfesional"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={formData.noCedulaProfesional}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                ¿Usuario activo?
              </label>
              <select
                id="activo"
                name="activo"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={formData.activo ? "true" : "false"}
                onChange={handleInputChange}
              >
                <option value=""> Seleccione una opción</option>
                <option value = {"true"}> Si </option>
                <option value = {"false"}> No </option>
              </select>
            </div>
          </div>

          <div className="px-5 pb-5">
            <h4 className="font-bold pb-5 pt-10"> Datos de contacto </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor=""
                  className="text-xl block mb-2 text-sm font-medium text-gray-900"
                >
                  Correo electrónico:
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="px-5 pb-5">
            <TableVistaTelefonos
              telefonos={formData.numero}
            ></TableVistaTelefonos>
            <div className="text-center">
              <ButtonComponent
                title={"Modificar numero telefonicos"}
                color={"blue"}
                onClick={() =>
                  handleModifyTelefonos({ profesorId: formData.idProfesor })
                }
              ></ButtonComponent>
            </div>
          </div>

          <div className="grid grid-cols-2 row-span-2 gap-4 items-center bg-white text-center rounded-lg">
            <ButtonComponent 
              title={"Guardar"} 
              color={"blue"}
              onClick={() => handleInscribirProfesor(formData)}
            ></ButtonComponent>
            <ButtonComponent
              title={"Dar de baja Profesor"}
              color={"red"}
            ></ButtonComponent>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormProfessor;