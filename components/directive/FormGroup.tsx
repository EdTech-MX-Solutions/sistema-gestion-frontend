import React, { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";
import InterfaceGrupo from "@/data/interfaces/grupos";
import { useGrupos } from "../context/GruposProvides";
import { useRouter } from "next/router";
import SIGEAPICollection from "@/data/calls/apiHandler";
import { useCookies } from "react-cookie";
import { Alert, Button } from "@material-tailwind/react";
import InterfaceProfessor from "@/data/interfaces/professor";

interface FormGroupProps {
  grupo: InterfaceGrupo;
  isNewGroup: boolean;
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

export const FormGroup = ({ grupo, isNewGroup }: FormGroupProps) => {
  const router = useRouter();
  const { id } = router.query;
  const [open, setOpen] = useState(false);
  const [cookies, setCookie] = useCookies(["token"]);
  const [profesoresDisponibles, setProfesoresDisponibles] = useState<
    InterfaceProfessor[]
  >([]);
  const [formData, setFormData] = useState({
    idGrupo: isNewGroup ? "" : grupo.idGrupo,
    grado: isNewGroup ? "" : grupo.grado,
    subGrado: isNewGroup ? "" : grupo.subGrado,
    turno: isNewGroup ? "" : grupo.turno,
    responsable: isNewGroup ? "" : grupo.responsable,
    idResponsable: isNewGroup ? 0 : grupo.idResponsable,
    cupos: isNewGroup ? 0 : grupo.cupos,
    salon: isNewGroup ? "" : grupo.salon,
    inscritos: isNewGroup ? 0 : grupo.inscritos,
    cicloEscolar: isNewGroup ? "" : grupo.cicloEscolar,
  });

  const { grupos, updateGrupo } = useGrupos();

  const handleCrearGrupo = async (nuevoGrupo: InterfaceGrupo) => {
    const requiredFields = ["grado", "subGrado", "turno", "salon", "inscritos"];

    const emptyRequiredFields = requiredFields.filter(
      (field) => !formData[field as keyof InterfaceGrupo]
    );

    if (emptyRequiredFields.length > 0) {
      //alert("Por favor, completa todos los campos obligatorios.");
      setOpen(true);
      return;
    } else {
      const api = new SIGEAPICollection();
      const token = cookies.token;
      const response = await api.directivosCollection.executePostNuevoGrupo(
        token,
        nuevoGrupo
      );
      if (response.status == 200) {
        const response2 = await api.directivosCollection.executeGetGrupos(
          token
        );

        if (response2.ok) {
          const data = await response2.json();
          console.log("Profesor inscrito con exito");
          updateGrupo(data);

          setFormData({
            idGrupo: "",
            grado: "",
            subGrado: "",
            turno: "",
            responsable: "",
            idResponsable: 0,
            cupos: 0,
            salon: "",
            inscritos: 0,
            cicloEscolar: "",
          });
        }
      }
    }
  };

  const fetchProfesoresDisponibles = async () => {
    const api = new SIGEAPICollection();
    const token = cookies.token;

    try {
      const response =
        await api.directivosCollection.executGetProfesoresSinAsignar(token);
      if (response.ok) {
        const data = await response.json();
        let newProfesoresDisponibles: InterfaceProfessor[] = [];
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          const newProfesorDisponible: InterfaceProfessor = {
            idProfesor: element.idProfesor,
            nombre: element.nombre,
            apellidoPaterno: element.apellidoPaterno,
            apellidoMaterno: element.apellidoMaterno,
            email: element.email,
            activo: element.activo,
            diretivo: element.directivo,
            noCedulaProfesional: element.noCedulaProfesional,
            numero: element.numero,
          };
          newProfesoresDisponibles.push(newProfesorDisponible);
        }
        setProfesoresDisponibles(newProfesoresDisponibles);
      } else {
        console.error(
          `Error en la solicitud. Código de estado: ${response.status}`
        );
      }
    } catch (error) {
      console.error("Error de solicitud:", error);
    }
  };

  useEffect(() => {
    if (id && grupos && grupos.length > 0) {
      const foundGroup = grupos.find((grupo) => grupo.idGrupo == id);
      if (foundGroup) {
        setFormData(foundGroup);
      } else {
        console.error(`No se encontro un grupo con la ID: ${id}`);
      }
    }

    fetchProfesoresDisponibles();
  }, [id, grupos]);

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("Datos", formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-4 items-center px-5 pt-5">
          <div>
            <label
              htmlFor="grado"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Grado<span>*</span>:
            </label>
            <select
              id="grado"
              name="grado"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
              value={formData.grado}
              onChange={handleInputChange}
              required
            >
              <option value=""> Seleccione una opción </option>
              <option value={"Primero"}> Primero </option>
              <option value={"Segundo"}> Segundo </option>
              <option value={"Tercero"}> Tercero </option>
              <option value={"Cuarto"}> Cuarto </option>
              <option value={"Quinto"}> Quinto </option>
              <option value={"Sexto"}> Sexto </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="subGrado"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Grupo<span>*</span>:
            </label>
            <select
              id="subGrado"
              name="subGrado"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
              value={formData.subGrado}
              onChange={handleInputChange}
              required
            >
              <option value=""> Seleccione una opción </option>
              <option value={"A"}> A </option>
              <option value={"B"}> B </option>
              <option value={"C"}> C </option>
              <option value={"D"}> D </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="turno"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Turno<span>*</span>:
            </label>
            <select
              id="subGrado"
              name="subGrado"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
              value={formData.subGrado}
              onChange={handleInputChange}
              required
            >
              <option value=""> Seleccione una opción </option>
              <option value={"Matutino"}> Matutino </option>
              <option value={"Vespertino"}> Vespertino </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="responsable"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Responsable<span>*</span>:
            </label>
            <select
              id="responsable"
              name="responsable"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
              value={formData.responsable}
              onChange={handleInputChange}
              required
            >
              {profesoresDisponibles.map((profesor) => (
                <option value={profesor.idProfesor} key={profesor.idProfesor}>
                  {profesor.nombre}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="salon"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Salón<span>*</span>:
            </label>
            <input
              type="text"
              name="salon"
              id="salon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
              value={formData.salon}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="text-center">
          {!open && (
            <ButtonComponent
              title={"Guardar"}
              color={"blue"}
              onClick={() => {
                if (isNewGroup) {
                  //handleCrearGrupo(formData);
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
          </div>
        </div>
      </form>
    </>
  );
};

export default FormGroup;
