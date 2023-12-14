import SIGEAPICollection from "@/data/calls/apiHandler";
import InterfaceGrupo from "@/data/interfaces/grupos";
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
  updateGrupo: (newGrupo: InterfaceGrupo[]) => void;
  loading: boolean;
  hayGrupos: boolean;
}

const GrupoContext = createContext<GrupoContextType | undefined>(undefined);

export const GrupoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cookies, setCookie] = useCookies(["token"]);
  const [grupos, setGrupos] = useState<InterfaceGrupo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [hayGrupos, setHayGrupos] = useState<boolean>(false);

  const updateGrupo = (newGrupo: InterfaceGrupo[]) => {
    setGrupos(newGrupo);
  };

  const fetchGrupos = async () => {
    setLoading(true);
    const api = new SIGEAPICollection();
    const token = cookies.token;

    try {
      const response = await api.directivosCollection.executeGetGrupos(token);
      if (response.ok) {
        const data = await response.json();
        let newGrupos: InterfaceGrupo[] = [];
        if (!data || data.length == 0) {
          setHayGrupos(false);
          setLoading(false);
          return;
        }
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
        setHayGrupos(true);
        setGrupos(newGrupos);
      } else {
        console.error(
          `Error en la solicitud. Código de estado: ${response.status}`
        );
      }
    } catch (error) {
      console.error("Error de solicitud:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchGrupos();
  }, []);

    return (
        <GrupoContext.Provider value={{ grupos, updateGrupo, loading, hayGrupos }}>
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
