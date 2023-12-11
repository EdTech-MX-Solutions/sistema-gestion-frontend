import PrincipalTitle from "@/components/directive/Principal.Title";
import { ReactNode, use, useEffect, useState } from "react";
import FormGroup from "@/components/directive/FormGroup";
import TableStudentsGroup from "@/components/directive/TableStudentsGroup";
import ButtonComponent from "@/components/ButtonComponent";
import { useRouter } from "next/router";
import InterfaceGrupo from "@/data/interfaces/grupos";
import InterfaceAlumno from "@/data/interfaces/alumno";
import SIGEAPICollection from "@/data/calls/apiHandler";
import { useCookies } from "react-cookie";
import InterfaceUsuarioPendiente from "@/data/interfaces/usuarioPendiente";
import { useAlumno } from "@/components/context/AlumnoProvider";

interface DefaultLayoutProps {
  children: ReactNode;
}

function ModifyGroup() {

  const router = useRouter();
  const { id } = router.query;
  const {alumnos} = useAlumno();
  const [gruposDetails, setGruposDetails] = useState<InterfaceGrupo>({
    idGrupo: "cargando...",
    grado: "cargando...",
    subGrado: "cargando...",
    turno: "cargando...",
    responsable: "cargando...",
    idResponsable: 0,
    cupos: 0,
    salon: "cargando...",
    inscritos: 0,
    cicloEscolar: "cargando...",
  });

  const [cookies, setCookie] = useCookies(["token", "idGrupo", "childs"]);
  const [alumnosInscritos, setAlumnosInscritos] = useState<InterfaceAlumno[]>([]);
  const [usuariosPendientes, setusuariosPendientes] = useState<InterfaceUsuarioPendiente[]>([]);


  const fetchAlumnosInscritos = async () => {
    const api = new SIGEAPICollection();
    const token = cookies.token;
    const idGrupoSeleccionado = router.query.id + "";
    if(idGrupoSeleccionado === undefined){
      return;
    }
    else{
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
    };
  }

  const fetchAlumnosPendientesReinscripcion = async () => {
    try {
      const api = new SIGEAPICollection();
      const token = cookies.token;
      const response = await api.directivosCollection.executeGetAlumnosPendientesReiscripcion(token);
      if (response.ok) {
        const data = await response.json();
        let newUsuariosPendiente: InterfaceUsuarioPendiente[] = [];
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          const newUsuarioPendiente : InterfaceUsuarioPendiente = {
            estatus: element.estatus,
            gradoSolicitado: element.gradoSolicitado,
            idTramite: element.idTramite,
            noBoleta: element.noBoleta,
          };
          newUsuariosPendiente.push(newUsuarioPendiente);
        }
        setusuariosPendientes(newUsuariosPendiente);
      }
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
   fetchAlumnosInscritos();    
   fetchAlumnosPendientesReinscripcion();
  }, [id, gruposDetails])


  const title = `Detalles grupo: ${gruposDetails.grado} ${gruposDetails.subGrado}`;

  return (
    <>
      <PrincipalTitle title={title}></PrincipalTitle>
      <div className="grid grid-rows-12 gap-6 bg-white rounded-lg">
        <FormGroup grupo = {gruposDetails} isNewGroup = {false}></FormGroup>
        <TableStudentsGroup
          titleBtn1={"Ver Datos del Alumno"}
          titleBtn2={"Dar de Baja del Grupo"}
          titleTable={"Listado de Alumnos inscritos en el grupo"}
          alumnosInscritos = {alumnosInscritos}
        ></TableStudentsGroup>
        <TableStudentsGroup
          titleBtn1={"Ver Datos del Alumno"}
          titleBtn2={"Inscribir al Grupo"}
          titleTable={"Listado de Alumnos disponibles para el grupo seleccionado"}
          alumnosInscritos = {alumnosInscritos}
        ></TableStudentsGroup>
        <div className="grid grid-cols-2 row-span-2 gap-4 items-center text-center rounded-lg">
          <ButtonComponent 
            title={"Guardar"} 
            color={"blue"}
          ></ButtonComponent>
          <ButtonComponent
            title={"Dar de baja Grupo"}
            color={"red"}
          ></ButtonComponent>
        </div>
      </div>
    </>
  );
}

export default ModifyGroup;
