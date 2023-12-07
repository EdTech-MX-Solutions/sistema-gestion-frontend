import { ReactNode, useEffect, useState } from "react";
import InputSearch from "@/components/template/InputSearch";
import TableGroups from "@/components/directive/TableGroups";
import PrincipalTitle from "@/components/directive/Principal.Title";
import SIGEAPICollection from "@/api/apiHandler";
import { useCookies } from "react-cookie";
import InterfaceGrupo from "@/interfaces/grupos";


interface DefaultLayoutProps {
  children: ReactNode;
}

function consultGroup() {


  const [cookies, setCookie] = useCookies(["token", "idGrupo", "childs"]);
  const [grupos, setGrupos] = useState<InterfaceGrupo[]>([]);
  const [hayGrupos, setHayGrupos] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchGrupos = async () =>{
    const api = new SIGEAPICollection();
    const token = cookies.token;

    try{
      const response = await api.directivosCollection.executeGetGrupos(
        token
      );
      if(response.ok){
        console.log("Generando lista de grupos");
        const data = await response.json();
        console.log(data);
        if(!data || data.length == 0){
          setHayGrupos(false);
          setLoading(false);
          return;
        }
        else{
          setHayGrupos(true);
        }

        let newGrupos : InterfaceGrupo[] = [];
        console.log("Entrando");

        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          

          const newGrupo : InterfaceGrupo = {
            idGrupo : element.idGrupo,
            grado : element.grado,
            subGrado: element.subGrado,
            turno: element.turno,
            responsable: element.responsable,
            idResponsable: element.idResponsable,
            cupos: element.cupos,
            salon: element.salon,
            inscritos: element.inscritos,
            cicloEscolar: element.cicloEscolar,
          };
          newGrupos.push(newGrupo);
        }
        console.log("Grupos obtenidos");
        setGrupos(newGrupos);
        setHayGrupos(true);
        setLoading(false);
      }
      else{
        console.error(`Error en la solicitud. Código de estado: ${response.status}`);
      }
    }catch(error){
      console.error("Error de solicitud:", error);
    }
  }

  useEffect(() => {
    fetchGrupos();
  }, []);

  return (
    <>
     <PrincipalTitle
      title = {"Consultar Grupos"}
     ></PrincipalTitle>
      <div className="bg-white">
        <InputSearch
         searchDataAutomcomplete={[
          ...grupos.map((grupo) => ({
            key : grupo.idGrupo,
            value : grupo.idGrupo,
          })),
          ...grupos.map((grupo) => ({
            key : grupo.idGrupo,
            value : `${grupo.grado} ${grupo.subGrado}`
          }))
         ]}

          comment = {"Recuerda que puedes buscar a un grupo por grado y grupo"}
        ></InputSearch>
        <TableGroups groups = {grupos}></TableGroups>
      </div>
    </>
  );
}

export default consultGroup;
