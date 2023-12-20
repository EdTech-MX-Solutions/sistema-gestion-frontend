import InterfaceProfessor from "@/data/interfaces/professor";
import React, { useEffect, useState } from "react";
import ButtonComponent from "../elements/Buttons/ButtonComponent";
import { useRouter } from "next/router";
import { useProfesores } from "../context/ProfesorProvider";
import { TableVistaTelefonos } from "./TableVistaTelefonos";
import SIGEAPICollection from "@/data/calls/apiHandler";
import { useCookies } from "react-cookie";
import { Alert, Button } from "@material-tailwind/react";
import InterfaceTel from "@/data/interfaces/numeroTelefonico";
import AlertComponent from "../elements/Alert";

interface FormProfessorProps {
  professor: InterfaceProfessor;
  isNewUser: boolean;
}

export const FormProfessor = ({ professor, isNewUser }: FormProfessorProps) => {
  const router = useRouter();
  const { id } = router.query;
  const [alerta, setAlerta] = useState(true);
  const [requiredCamposCompletos, setRequiredCamposCompletos] = useState(false);
  const [cookies, setCookie] = useCookies(["token"]);
  const [telefonos, setTelefonos] = useState<InterfaceTel[]>([]);
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

  const handleVerTelefonos = async () => {
    const api = new SIGEAPICollection();
    const token = cookies.token;
    try {
      const response = await api.sharedCollection.executeGetTelefonos(
        token,
        id + ""
      );
      if (response.ok) {
        const data = await response.json();
        if (!data || data.length == 0) {
          console.error("Respuesta fallida");
          return;
        }
        setTelefonos(data);
      } else {
        console.error(
          `Error en la solicitud. Código de estado: ${response.status}`
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInscribirProfesor = async (nuevoProfesor: InterfaceProfessor) => {
    if (requiredCamposCompletos) {
      const api = new SIGEAPICollection();
      const token = cookies.token;
      const response = await api.directivosCollection.executePostNuevoProfesor(
        token,
        nuevoProfesor
      );
      if (response.status == 201) {
        const response2 = await api.directivosCollection.executeGetProfessors(
          token
        );
        if (response2.ok) {
          const data = await response2.json();
          console.log("Profesor inscrito con exito");
          updateProfesor(data);

          setFormData({
            idProfesor: "",
            nombre: "",
            apellidoPaterno: "",
            apellidoMaterno: "",
            email: "",
            activo: false,
            diretivo: false,
            noCedulaProfesional: "",
            numero: [],
          });
        }
      }
    } else {
      console.log("SI hay campos obligatorios vacios");
    }
  };

  const handleCamposEnBlanco = () => {
    const requiredFields = [
      "nombre",
      "apellidoPaterno",
      "apellidoMaterno",
      "email",
      "activo",
    ];

    const emptyRequiredFields = requiredFields.filter(
      (field) => !formData[field as keyof InterfaceProfessor]
    );

    if (emptyRequiredFields.length == 0) {
      console.log("NO hay campos obligatorios vacios");
      setRequiredCamposCompletos(true);
      setAlerta(false);
    } else {
      console.log("SI hay campos obligatorios vacios");
      setRequiredCamposCompletos(false);
      setAlerta(true);
    }
  };

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
    handleVerTelefonos();
  }, [id, profesores]);

  useEffect(() => {
    handleCamposEnBlanco();
  }, [formData]);


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
      {alerta && (
        <div
          className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <svg
            className="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Campos Obligatorios Vacios!</span>{" "}
            Recuerda que todos los campos con un asterisco (*) deben ser
            llenados.
          </div>
        </div>
      )}
      {requiredCamposCompletos && (
        <div
          className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-100 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <svg
            className="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Campos Obligatorios Completos!</span>{" "}
            Todos los campos obligatorios han sido llenados.
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-lg">
          <h4 className="text-xl block mb-2 text-sm font-bold text-gray-900 pl-5 pt-3">
            Datos personales
          </h4>
          <div className="p-5 grid grid-cols-3 gap-4 items-center">
            <div>
              <label
                htmlFor=""
                className="text-xl block mb-2 text-sm font-medium text-gray-900"
              >
                No. Empleado:
              </label>
              <label className="text-xl block mb-2 text-sm font-medium text-gray-900">
                {isNewUser ? "Nuevo profesor" : formData.idProfesor}
              </label>
            </div>

            <div>
              <label
                htmlFor="apellidoPaterno"
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
                htmlFor="apellidoMaterno"
                className="text-xl block mb-2 text-sm font-medium text-gray-900"
              >
                Apellido Materno<span>*</span>:
              </label>
              <input
                type="text"
                name="apellidoMaterno"
                id="apellidoMaterno"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={formData.apellidoMaterno}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label
                htmlFor="nombre"
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
                htmlFor="noCedulaProfesional"
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
                htmlFor="activo"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                ¿Usuario activo?<span>*</span>
              </label>
              <select
                id="activo"
                name="activo"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                value={formData.activo ? "true" : "false"}
                onChange={handleInputChange}
                required
              >
                <option value=""> Seleccione una opción</option>
                <option value={"true"}> Si </option>
                <option value={"false"}> No </option>
              </select>
            </div>
          </div>

          <div className="px-5 pb-5">
            <h4 className="text-xl block mb-2 text-sm font-bold text-gray-900 pb-2">
              Datos de contacto
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="text-xl block mb-2 text-sm font-medium text-gray-900"
                >
                  Correo electrónico<span>*</span>:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="px-2 pb-2">
            <TableVistaTelefonos telefonos={telefonos}></TableVistaTelefonos>
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
              onClick={() => {
                if (requiredCamposCompletos == true) {
                  handleInscribirProfesor(formData);
                } else {
                  console.log("Campos obligatorios vacios");
                }
               
              }}
            ></ButtonComponent>
            <ButtonComponent
              title={"Dar de baja Profesor"}
              color={"blue"}
              onClick={() => {
                
              }}
            ></ButtonComponent>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormProfessor;
