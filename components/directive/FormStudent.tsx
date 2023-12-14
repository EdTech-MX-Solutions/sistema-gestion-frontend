import React, { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";
import InterfaceAlumno from "@/data/interfaces/alumno";
import SIGEAPICollection from "@/data/calls/apiHandler";
import { useCookies } from "react-cookie";
import router from "next/router";
import { Alert, Button } from "@material-tailwind/react";
import { useAlumno } from "../context/AlumnoProvider";

interface FormStudentProps {
  student: InterfaceAlumno;
  isNewUser: boolean;
}

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

export const FormStudent = ({ student, isNewUser }: FormStudentProps) => {
  const [formData, setFormData] = useState<InterfaceAlumno>({
    noBoleta: isNewUser ? "" : student.noBoleta,
    curp: isNewUser ? "" : student.curp,
    nombres: isNewUser ? "" : student.nombres,
    apellidoPaterno: isNewUser ? "" : student.apellidoPaterno,
    apellidoMaterno: isNewUser ? "" : student.apellidoMaterno,
    aniosPreescolar: isNewUser ? 0 : student.aniosPreescolar,
    fechaNacimiento: isNewUser ? "" : student.fechaNacimiento,
    edad: isNewUser ? 0 : student.edad,
    paisOrigen: isNewUser ? "México" : student.paisOrigen,
    sexo: isNewUser ? "" : student.sexo,
    estatus: isNewUser ? "NUEVO_INGRESO" : student.estatus,
    entidad: isNewUser ? "" : student.entidad,
    grado: isNewUser ? null : student.grado,
    grupo: isNewUser ? null : student.grado,
    actualizarDatosMedicos: isNewUser ? true : student.actualizarDatosMedicos,
  });

  const [open, setOpen] = useState(false);
  const [cookies, setCookie] = useCookies(["token", "idProfesor", "childs"]);
  const [paises, setPaises] = useState([]);
  const [estados, setEstados] = useState([]);
  const [requiredCampos, setRequiredCampos] = useState(false);

  const handlePasoSiguienteDireccion = (boleta: any) => {
    router.push(`/directive/actionsStudent/registrer/?boleta=${boleta}`);
  };

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;

    if(name == "aniosPreescolar"){
      setFormData({
        ...formData,
        [name]: parseInt(value),
      });
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const fetchPaises = async () => {
    const api = new SIGEAPICollection();
    const token = cookies.token;
    try {
      const response = await api.sharedCollection.executeGetSEPOMEXPaises(
        token
      );
      if (response.ok) {
        console.log("Generando lista de paises");
        const data = await response.json();
        if (!data || data.length == 0) {
          console.error("Respuesta fallida");
          return;
        }
        setPaises(data);
      } else {
        console.error(
          `Error en la solicitud. Código de estado: ${response.status}`
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchEstados = async () => {
    const api = new SIGEAPICollection();
    const token = cookies.token;
    try {
      const response = await api.sharedCollection.executeGetSEPOMEXEstados(
        token
      );
      if (response.ok) {
        console.log("Generando lista de estados");
        const data = await response.json();
        if (!data || data.length == 0) {
          console.error("Respuesta fallida");
          return;
        }
        setEstados(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("Datos: ", formData);
  };

  const handleSiguientePasoMedic = ({id} : {id: string}) => {
    router.push(`/directive/actionsStudent/registrerMedic/?boleta=${id}`);
  }

  const {alumnos, updateAlumno} = useAlumno();

  const handleInscribirDataNuevoAlumno = async (nuevoAlumno : InterfaceAlumno) => {
    const requiredFields = [
      "nombres",
      "apellidoPaterno",
      "apellidoMaterno",
      "aniosPreescolar",
      "fechaNacimiento",
      "paisOrigen",
      "sexo",
      "entidad",
      "curp"
    ];

    const emptyRequiredFields = requiredFields.filter(
      (field) => !formData[field as keyof InterfaceAlumno]
    );

    if (emptyRequiredFields.length > 0) {
      setOpen(true);
      return;
    }
    else{
      const api = new SIGEAPICollection();
      const token = cookies.token;
      setRequiredCampos(true);
      const response = await api.directivosCollection.executePostNuevoAlumno(
        token,
        nuevoAlumno
      );
      if(response.status == 200){
          const response2 = await api.sharedCollection.executeGetAlumnos(
          token
          );

          if(response2.ok){
            const data = await response2.json();
            console.log("Alumno inscrito con exito");
            updateAlumno(data);

            setFormData({
              noBoleta: "",
              curp: "",
              nombres: "",
              apellidoPaterno: "",
              apellidoMaterno: "",
              aniosPreescolar: 0,
              fechaNacimiento: "",
              edad: 0,
              paisOrigen: "México",
              sexo: "",
              estatus: "",
              entidad: "",
              grado: null,
              grupo: null,
              actualizarDatosMedicos: true,
            })
          }
      }
    }
  }

  useEffect(() => {
    fetchPaises();
    fetchEstados();
  }, []);

  

  return (
    <>
      <div className="grid grid-rows-1 grid-flow-col gap-4">
        <div className="p-7 bg-white rounded-lg">
          <h4 className="font-bold pb-5"> Datos Personales Alumno </h4>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 gap-4 items-center">
              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  CURP<span>*</span>:
                </label>
                <input
                  type="text"
                  name="curp"
                  id="curp"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  required
                  value={formData.curp}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Grado:
                </label>
                <input
                  type="text"
                  name="grado"
                  id="grado"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={formData.grupo || null || ""}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Grupo:
                </label>
                <input
                  type="text"
                  id="grupo"
                  name="grupo"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={formData.grupo || null || ""}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor="apellidoPaterno"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Apellido Paterno<span>*</span>:
                </label>
                <input
                  type="text"
                  name="apellidoPaterno"
                  id="apellidoPaterno"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  required
                  value={formData.apellidoPaterno}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor="apellidoMaterno"
                  className="block mb-2 text-sm font-medium text-gray-900"
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
                />
              </div>

              <div>
                <label
                  htmlFor="nombre"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Nombre(s)<span>*</span>:
                </label>
                <input
                  type="text"
                  name="nombres"
                  id="nombres"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  required
                  value={formData.nombres}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor="fechaNacimiento"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Fecha de nacimiento<span>*</span>:
                </label>
                <input
                  type="date"
                  name="fechaNacimiento"
                  id="fechaNacimiento"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 ps-10 p-2.5"
                  placeholder="Select date"
                  required
                  value={formData.fechaNacimiento}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Años preescolar<span>*</span>:
                </label>
                <select
                  id="aniosPreescolar"
                  name="aniosPreescolar"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={formData.aniosPreescolar}
                  onChange={handleInputChange}
                >
                  <option value = {0}> Seleccione una opción </option>
                  <option value = {1}> 1 </option>
                  <option value = {2}> 2 </option>
                  <option value = {3}> 3 </option>
                  <option value = {4}> 4 </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Sexo<span>*</span>:
                </label>
                <select
                  id="sexo"
                  name="sexo"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  value={formData.sexo}
                  onChange={handleInputChange}
                >
                  <option value=""> Seleccione una opción</option>
                  <option value="M"> Masculino </option>
                  <option value="F"> Femenino </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="entidad"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Estado de Origen<span>*</span>:
                </label>
                <select
                  id="entidad"
                  name="entidad"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  required
                  value={formData.entidad}
                  onChange={handleInputChange}
                >
                  <option value=""> Selecciona un estado </option>
                  {estados.map((estado: any, index) => (
                    <option key={index} value={estado.id}>
                      {estado.nombre}
                    </option>
                  ))}
                  <option value = {"33"}> No es originario de México </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  País de Origen<span>*</span>:
                </label>
                <select
                  id="paisOrigen"
                  name="paisOrigen"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
                  required
                  value={formData.paisOrigen}
                  onChange={handleInputChange}
                >
                  <option value=""> Selecciona un país </option>
                  {paises.map((pais: any, index) => (
                    <option key={index} value={pais.nombre}>
                      {pais.nombre}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-center pt-10">
              {!open && (
                <ButtonComponent
                  title={"Siguiente"}
                  color={"blue"}
                  onClick={() => {
                    //if(requiredCampos){
                      handleInscribirDataNuevoAlumno(formData);
                      //handleSiguientePasoMedic({ id: formData.noBoleta })
                    //}
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
          </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormStudent;
