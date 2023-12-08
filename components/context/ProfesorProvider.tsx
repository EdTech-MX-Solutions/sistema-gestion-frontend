import SIGEAPICollection from "@/backend-calls/apiHandler";
import InterfaceProfessor from "@/interfaces/professor";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { useCookies } from "react-cookie";

interface ProfesorContextType {
  profesores: InterfaceProfessor[];
  updateProfesor: (newProfesor: InterfaceProfessor) => void;
}

const ProfesorContext = createContext<ProfesorContextType | undefined>(
  undefined
);

export const ProfesorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cookies, setCookie] = useCookies(["token", "idProfessor", "childs"]);
  const [profesores, setProfesores] = useState<InterfaceProfessor[]>([]);
  const [profesor, setProfesor] = useState<InterfaceProfessor | null>(null);

  const updateProfesor = (newProfesor: InterfaceProfessor) =>{
    setProfesor(newProfesor);
  }

  const fetchProfesores = async () => {
    const api = new SIGEAPICollection();
    const token = cookies.token;

    try {
      const response = await api.directivosCollection.executeGetProfessors(
        token
      );
      if (response.ok) {
        const data = await response.json();
        let newProfessors: InterfaceProfessor[] = [];
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
        setCookie("childs", data.length);
        setCookie("idProfessor", data[0].idProfesor);
        setProfesores(newProfessors);
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
    <ProfesorContext.Provider value={{profesores, updateProfesor}}>
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