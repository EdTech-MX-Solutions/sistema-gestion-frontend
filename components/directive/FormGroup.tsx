import React, { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";
import InterfaceGrupo from "@/data/interfaces/grupos";
import { useGrupos } from "../context/GruposProvides";
import { useRouter } from "next/router";
import SIGEAPICollection from "@/data/calls/apiHandler";
import { useCookies } from "react-cookie";
import InterfaceProfessor from "@/data/interfaces/professor";

interface FormGroupProps {
  grupo: InterfaceGrupo;
  isNewGroup: boolean;
}

export const FormGroup = ({ grupo, isNewGroup }: FormGroupProps) => {
  const router = useRouter();
  const { id } = router.query;
  const [alerta, setAlerta] = useState(true);
  const [requiredCamposCompletos, setRequiredCamposCompletos] = useState(false);
  const [cookies, setCookie] = useCookies(["token"]);
  const [profesoresDisponibles, setProfesoresDisponibles] = useState<
    InterfaceProfessor[]
  >([]);
  const [formData, setFormData] = useState<InterfaceGrupo>({
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

  const handleModificarGrupo = async (grupo: InterfaceGrupo) => {
    const api = new SIGEAPICollection();
    const token = cookies.token;

    try {
      const response = await api.directivosCollection.executePutGrupo(
        token,
        grupo
      );
      if (response.status == 201) {
        const response2 = await api.directivosCollection.executeGetGrupos(
          token
        );
        if (response2.ok) {
          const data = await response2.json();
          console.log("Grupo modificado con exito");
          updateGrupo(data);
        }
      }
    } catch (error) {
      console.error("Error de solicitud:", error);
    }
  };

  const handleCamposEnBlanco = () => {
    const requiredFields = [
      "grado",
      "subGrado",
      "turno",
      "salon",
      "idResponsable",
    ];

    const emptyRequiredFields = requiredFields.filter(
      (field) => !formData[field as keyof InterfaceGrupo]
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

  const handleCrearGrupo = async (nuevoGrupo: InterfaceGrupo) => {
    if (requiredCamposCompletos) {
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
    } else {
      console.log("SI hay campos obligatorios vacios");
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
    if (name == "idResponsable") {
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

  useEffect(() => {
    handleCamposEnBlanco();
  }, [formData]);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("Datos", formData);
  };

  const filtredProfesores = profesoresDisponibles.filter(
    (profesor) => profesor.diretivo === false
  );

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
              id="turno"
              name="turno"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
              value={formData.turno}
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
              id="idResponsable"
              name="idResponsable"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5"
              value={formData.idResponsable}
              onChange={handleInputChange}
              required
            >
              {filtredProfesores.map((profesor) => (
                <option value={profesor.idProfesor} key={profesor.idProfesor}>
                  {`${profesor.nombre} ${profesor.apellidoPaterno} ${profesor.apellidoMaterno}`}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="salon"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Salon<span>*</span>:
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
          <ButtonComponent
            title={"Guardar"}
            color={"blue"}
            onClick={() => {
              if (requiredCamposCompletos == true) {
                if (isNewGroup == true) {
                  handleCrearGrupo(formData);
                } else {
                  handleModificarGrupo(formData);
                }
              } else {
                console.log("Campos obligatorios vacios");
              }
            }}
          ></ButtonComponent>
        </div>
      </form>
    </>
  );
};

export default FormGroup;
