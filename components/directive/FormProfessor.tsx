import InterfaceProfessor from "@/data/interfaces/professor";
import React, { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";
import { useRouter } from "next/router";
import { useProfesores } from "../context/ProfesorProvider";
import { TableVistaTelefonos } from "./TableVistaTelefonos";
import SIGEAPICollection from "@/data/calls/apiHandler";
import { useCookies } from "react-cookie";
import { Alert, Button } from "@material-tailwind/react";
import InterfaceTel from "@/data/interfaces/numeroTelefonico";
import AlertComponent from "../elements/Alert";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

interface FormProfessorProps {
  professor: InterfaceProfessor;
  isNewUser: boolean;
}

export const FormProfessor = ({ professor, isNewUser }: FormProfessorProps) => {
  const router = useRouter();
  const { id } = router.query;
  const [open, setOpen] = useState(false);
  const [requiredCampos, setRequiredCampos] = useState(false);
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

    if (emptyRequiredFields.length > 0) {
      //alert("Por favor, completa todos los campos obligatorios.");
      setOpen(true);
      return;
    } else {
      const api = new SIGEAPICollection();
      const token = cookies.token;
      const response = await api.directivosCollection.executePostNuevoProfesor(
        token,
        nuevoProfesor
      );
      if (response.status == 200) {
        const response2 = await api.directivosCollection.executeGetProfessors(
          token
        );
        if (response2.ok) {
          const data = await response2.json();
          console.log("Profesor inscrito con exito");
          updateProfesor(data);
          setRequiredCampos(true);

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

  const [baja, setBaja] = useState(false);

  const handleBaja = () => {
    setBaja(true);
  };

  return (
    <>
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
              {" "}
              Datos de contacto{" "}
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
            {!open && (
              <ButtonComponent
                title={"Guardar"}
                color={"blue"}
                onClick={() => {
                  if (isNewUser && requiredCampos) {
                    handleInscribirProfesor(formData);
                  }
                  setOpen(true);
                }}
              ></ButtonComponent>
            )}
            <div className="p-5 flex justify-center items-center">
              <Alert
                variant="gradient"
                className="bg-black text-white text-center p-5"
                open={open}
                icon={<Icon />}
              >
                Campo obligatorio en blanco
                <Button
                  variant="text"
                  color="white"
                  size="sm"
                  className="!absolute top-3 right-3 text-center border-solid border-2 border-white rounded-full items-center justify-center"
                  onClick={() => setOpen(false)}
                >
                  Cerrar
                </Button>
              </Alert>

              <ButtonComponent
                title={"Dar de baja Profesor"}
                color={"blue"}
                onClick={() => {
                  handleBaja();
                }}
              ></ButtonComponent>
            </div>
          </div>
          {baja && (
            <div>
              <div className="p-5 bg-red">
              <AlertComponent
                bgColor="green-100 bg-opacity-40"
                borderColor="green-100"
                textColor="green-100 dark:text-gray-200"
                title="Exitoso! "
                message={`El profesor ${formData.nombre} ${formData.apellidoPaterno} ${formData.apellidoMaterno} fue dado de baja`}
              />
            </div><div className="hidden bg-green-100"></div>
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default FormProfessor;
