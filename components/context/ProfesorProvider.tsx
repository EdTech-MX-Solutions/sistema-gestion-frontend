import SIGEAPICollection from "@/data/calls/apiHandler";
import InterfaceProfessor from "@/data/interfaces/professor";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { useCookies } from "react-cookie";

interface ProfesorContextType {
  loading: boolean;
  hayProfesores: boolean;
  profesores: InterfaceProfessor[];
  updateProfesor: (newProfesor: InterfaceProfessor[]) => void | InterfaceProfessor[];
}

const ProfesorContext = createContext<ProfesorContextType | undefined>(
  undefined
);

export const ProfesorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cookies, setCookie] = useCookies(["token", "idProfessor", "childs"]);
  const [profesores, setProfesores] = useState<InterfaceProfessor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [hayProfesores, setHayProfesores] = useState<boolean>(false);

  const updateProfesor = (newProfesor: InterfaceProfessor[]) =>{
    setProfesores(newProfesor);
  }

  const fetchProfesores = async () => {
    setLoading(true);
    const api = new SIGEAPICollection();
    const token = cookies.token;

    try {
      const response = await api.directivosCollection.executeGetProfessors(
        token
      );
      if (response.ok) {
        const data = await response.json();
        let newProfessors: InterfaceProfessor[] = [];
        if (!data || data.length == 0) {
          setHayProfesores(false);
          setLoading(false);
          return;
        }
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          const newProfessor: InterfaceProfessor = {
            idProfesor: element.idProfesor,
            nombre : element.nombre,
            apellidoPaterno : element.apellidoPaterno,
            apellidoMaterno : element.apellidoMaterno,
            email : element.email,
            activo : element.activo,
            diretivo : element.directivo,
            noCedulaProfesional : element.noCedulaProfesional,
            numero : element.numero,
          };
          newProfessors.push(newProfessor);
        }
        console.log("Profesores obtenidos");
        setCookie("childs", data.length);
        setCookie("idProfessor", data[0].idProfesor);
        setProfesores(newProfessors);
        setHayProfesores(true);
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
    fetchProfesores();
  }, []);

  return (
    <ProfesorContext.Provider value={{ profesores, updateProfesor, loading, hayProfesores }}>
        {children}
    </ProfesorContext.Provider>
  );
};

export const useProfesores = () : ProfesorContextType => {
    const context = useContext(ProfesorContext);
    if (!context) {
        throw new Error("useProfesores must be used within a ProfesoresProvider");
    }
    return context;
}