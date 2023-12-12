import PrincipalTitle from "@/components/directive/Principal.Title";
import { ReactNode, useEffect, useState } from "react";
import FormGroup from "@/components/directive/FormGroup";
import TableStudentsGroup from "@/components/directive/TableStudentsGroup";
import ButtonComponent from "@/components/ButtonComponent";
import { useRouter } from "next/router";
import InterfaceGrupo from "@/data/interfaces/grupos";
import InterfaceAlumno from "@/data/interfaces/alumno";
import SIGEAPICollection from "@/data/calls/apiHandler";
import { useCookies } from "react-cookie";
import InterfaceUsuarioPendiente from "@/data/interfaces/usuarioPendiente";
import CardView from "@/components/CardView";
import TableStudentsPendientes from "@/components/directive/TableStudentsPendientes";

interface DefaultLayoutProps {
  children: ReactNode;
}

function ModifyGroup() {
  const router = useRouter();
  const { id } = router.query;
  const [gruposDetails, setGruposDetails] = useState<InterfaceGrupo>({
    idGrupo: "cargando...",
    grado: "cargando...",
    subGrado: "cargando...",
    turno: "cargando...",
    responsable: "cargando...",
    idResponsable: 0,
    cupos: 0,
    salon: "",
    inscritos: 0,
    cicloEscolar: "cargando...",
  });

  const [cookies, setCookie] = useCookies(["token", "idGrupo", "childs"]);
  const [alumnosInscritos, setAlumnosInscritos] = useState<InterfaceAlumno[]>([]);
  const [alumnosPendientes, setAlumnosPendientes] = useState<InterfaceAlumno[]>([]);

  const fetchAlumnosInscritos = async () => {
    const api = new SIGEAPICollection();
    const token = cookies.token;
    const idGrupoSeleccionado = router.query.id + "";
    if (idGrupoSeleccionado === undefined) {
      return;
    } else {
      try {
        const response = await api.sharedCollection.executeGetAlumnosGrupo(
          token,
          idGrupoSeleccionado
        );
        if (response.ok) {
          const data = await response.json();
          let newAlumnos: InterfaceAlumno[] = [];
          for (let i = 0; i < data.length; i++) {
            const element = data[i];
            const sexo = element.sexo === "M" ? "Masculino" : "Femenino";
            const newAlumno: InterfaceAlumno = {
              no_boleta: element.noBoleta,
              curp: element.curp,
              nombre: element.nombres,
              apellido_paterno: element.apellidoPaterno,
              apellido_materno: element.apellidoMaterno,
              fecha_nacimiento: element.fechaNacimiento,
              sexo: sexo,
              estatus: element.estatus,
              entidad_nacimiento: element.entidad,
              pais_origen: element.paisOrigen,
              edad: element.edad,
              aniosPreescolar: element.aniosPreescolar,
              grado: element.grado,
              grupo: element.grupo,
              actualizarDatosMedicos: element.actualizarDatosMedicos,
            };
            newAlumnos.push(newAlumno);
          }
          setAlumnosInscritos(newAlumnos);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const fetchAlumnosPendientesReinscripcion = async () => {
    try {
      const api = new SIGEAPICollection();
      const token = cookies.token;
      const response =
        await api.directivosCollection.executeGetAlumnosPendientesReiscripcion(
          token
        );
      if (response.ok) {
        const data = await response.json();
        let newAlumnosPendiente: InterfaceAlumno[] = [];
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          const sexo = element.alumno.sexo === "M" ? "Masculino" : "Femenino";
          const newAlumno: InterfaceAlumno = {
            no_boleta: element.alumno.noBoleta,
            curp: element.alumno.curp,
            nombre: element.alumno.nombres,
            apellido_paterno: element.alumno.apellidoPaterno,
            apellido_materno: element.alumno.apellidoMaterno,
            fecha_nacimiento: element.alumno.fechaNacimiento,
            sexo: sexo,
            estatus: element.alumno.estatus,
            entidad_nacimiento: element.alumno.entidad,
            pais_origen: element.alumno.paisOrigen,
            edad: element.alumno.edad,
            aniosPreescolar: element.alumno.aniosPreescolar,
            grado: element.alumno.grado,
            grupo: element.alumno.grupo,
            actualizarDatosMedicos: element.alumno.actualizarDatosMedicos,
          };

          const newUsuarioPendiente: InterfaceUsuarioPendiente = {
            estatus: element.estatus,
            gradoSolicitado: element.gradoSolicitado,
            idTramite: element.idTramite,
            noBoleta: element.noBoleta,
            nombre: element.nombre,
            alumno: newAlumno,
          };
          newAlumnosPendiente.push(newUsuarioPendiente.alumno);
        }
        setAlumnosPendientes(newAlumnosPendiente);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAlumnosInscritos();
    fetchAlumnosPendientesReinscripcion();
  }, [id, gruposDetails]);

  

  const handleDarDeBajaAlumnoDeGrupo = (alumno : any) =>{
    const newAlumnosInscritos = alumnosInscritos.filter((alumnoInscrito) => alumnoInscrito.no_boleta !== alumno.no_boleta);
    const nuevoAlumnoPendiente = [...alumnosPendientes, alumno];
    setAlumnosInscritos(newAlumnosInscritos);
    setAlumnosPendientes(nuevoAlumnoPendiente);
  };

  const handleInscribirlumnoDeGrupo = (alumno : any) =>{
    const newAlumnosPendiente = alumnosPendientes.filter((alumnoPendiente) => alumnoPendiente.no_boleta !== alumno.no_boleta);
    const nuevoAlumnoInscrito = [...alumnosInscritos, alumno];
    setAlumnosInscritos(nuevoAlumnoInscrito);
    setAlumnosPendientes(newAlumnosPendiente);
  };

  const title = `Detalles del grupo`;

  return (
    <>
      <CardView title={""} description={""}>
        <PrincipalTitle title={title}></PrincipalTitle>
        <div className="grid grid-rows-12 gap-6 bg-white rounded-lg">
          <FormGroup grupo={gruposDetails} isNewGroup={false}></FormGroup>
          <TableStudentsGroup
            titleBtn1={"Ver Datos del Alumno"}
            titleBtn2={"Dar de Baja del Grupo"}
            titleTable={"Listado de Alumnos inscritos en el grupo"}
            alumnosInscritos={alumnosInscritos}
            evento={handleDarDeBajaAlumnoDeGrupo}
          ></TableStudentsGroup>
          <TableStudentsGroup
            titleBtn1={"Ver Datos del Alumno"}
            titleBtn2={"Inscribir al Grupo"}
            titleTable={"Listado de Alumnos que solicitan reinscripción a este grado"}
            alumnosInscritos={alumnosPendientes}
            evento={handleInscribirlumnoDeGrupo}
          ></TableStudentsGroup>
          <div className="grid grid-cols-2 row-span-2 gap-4 items-center text-center rounded-lg">
            <ButtonComponent title={"Guardar"} color={"blue"}></ButtonComponent>
            <ButtonComponent
              title={"Dar de baja Grupo"}
              color={"red"}
            ></ButtonComponent>
          </div>
        </div>
      </CardView>
    </>
  );
}

export default ModifyGroup;
