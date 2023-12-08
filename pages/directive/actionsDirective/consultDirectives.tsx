import { ReactNode, useEffect, useState } from "react";
import InputSearch from "@/components/template/InputSearch";
import TableDirectives from "@/components/directive/TableDirectives";
import InterfaceProfessor from "@/interfaces/professor";
import SIGEAPICollection from "@/api/apiHandler";
import { useCookies } from "react-cookie";
import CardView from "@/components/CardView";
import PrincipalTitle from "@/components/directive/Principal.Title";
import { useNavigate } from "react-router-dom";

interface DefaultLayoutProps {
  children: ReactNode;
}

function ConsultDirective() {

  const [cookies, setCookie] = useCookies(["token", "idProfessor", "childs"]);
  const [profesores, setProfesores] = useState<InterfaceProfessor[]>([]);
  const [hayProfesores, setHayProfesores] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProfesores = async () => {
    const api = new SIGEAPICollection();
    const token = cookies.token;

    try {
      const response = await api.directivosCollection.executeGetProfessors(
        token
      );
      if (response.ok) {
        console.log("Generando lista de profesores....");
        const data = await response.json();
        console.log(data);
        if (!data || data.length == 0) {
          setHayProfesores(false);
          setLoading(false);
          return;
        } else {
          setHayProfesores(true);
        }
        let newProfessors: InterfaceProfessor[] = [];
        console.log("Entrando");

        for (let i = 0; i < data.length; i++) {
          const element = data[i];

          const newProfessor: InterfaceProfessor = {
            idProfesor: element.idProfesor,
            nombre: element.nombre,
            apellidoPaterno: element.apellidoPaterno,
            apellidoMaterno: element.apellidoMaterno,
            email: element.email,
            activo: false,
            diretivo: false,
            noCedulaProfesional: 0,
            numero: [],
          };
          newProfessors.push(newProfessor);
        }
        console.log("Alumnos obtenidos ");
        setProfesores(newProfessors);
        setHayProfesores(true);
        setLoading(false);
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
    fetchProfesores();
  }, []);

  return (
    <>
      
      <CardView title = {"title"} customtitle = {true} description = {""}>
        <PrincipalTitle title = {"Consultar directivos"}></PrincipalTitle>
        <InputSearch
          searchDataAutomcomplete={[
            ...profesores.map((professor) => ({
              key: professor.idProfesor,
              value: professor.idProfesor,
            })),
            ...profesores.map((professor) => ({
              key: professor.idProfesor,
              value: `${professor.nombre} ${professor.apellidoPaterno} ${professor.apellidoMaterno}`,
            })),
          ]}
          comment={"Recuerda que puedes bucar por numero de empleado y nombre"}
        ></InputSearch>
        <TableDirectives directives={profesores}></TableDirectives>
        </CardView>
    </>
  );
}

export default ConsultDirective;
