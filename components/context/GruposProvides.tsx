import SIGEAPICollection from "@/backend-calls/apiHandler";
import InterfaceGrupo from "@/interfaces/grupos";
import InterfaceProfessor from "@/interfaces/professor";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { useCookies } from "react-cookie";

interface GrupoContextType {
  grupos: InterfaceGrupo[];
  updateGrupo: (newGrupo: InterfaceGrupo) => void;
}

const GrupoContext = createContext<GrupoContextType | undefined>(undefined);

export const GrupoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cookies, setCookie] = useCookies(["token", "idGrupo", "childs"]);
  const [grupos, setGrupos] = useState<InterfaceGrupo[]>([]);
  const [grupo, setGrupo] = useState<InterfaceGrupo | null>(null);

  const updateGrupo = (newGrupo: InterfaceGrupo) => {
    setGrupo(newGrupo);
  };

  const fetchGrupos = async () => {
    const api = new SIGEAPICollection();
    const token = cookies.token;

    try {
      const response = await api.directivosCollection.executeGetGrupos(token);
      if (response.ok) {
        const data = await response.json();
        let newGrupos: InterfaceGrupo[] = [];
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          const newGrupo: InterfaceGrupo = {
            idGrupo: element.idGrupo,
            grado: element.grado,
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
        setGrupos(newGrupos);
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
    fetchGrupos();
  }, []);

    return (
        <GrupoContext.Provider value={{ grupos, updateGrupo }}>
        {children}
        </GrupoContext.Provider>
    );
};

export const useGrupos = () : GrupoContextType => {
    const context = useContext(GrupoContext);
    if (context === undefined) {
      throw new Error("useGrupos debe estar dentro del proveedor GrupoProvider");
    }
    return context;
}
