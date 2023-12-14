import SIGEAPICollection from "@/data/calls/apiHandler";
import InterfaceAlumno from "@/data/interfaces/alumno";
import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
} from "react";
import { useCookies } from "react-cookie";

interface AlumnoContextType {
    alumnos: InterfaceAlumno[];
    updateAlumno: (newAlumno: InterfaceAlumno[]) => void;
    loading: boolean;
    hayalumnos: boolean;
}

const AlumnoContext = createContext<AlumnoContextType | undefined>(undefined);

export const AlumnoProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [cookies, setCookie] = useCookies(["token", "boleta", "childs"]);
    const [loading, setLoading] = useState<boolean>(false);
    const [hayalumnos, setHayalumnos] = useState<boolean>(false);
    const [alumnos, setAlumnos] = useState<InterfaceAlumno[]>([
        {
            no_boleta: "",
            curp: "",
            nombre: "",
            apellido_paterno: "",
            apellido_materno: "",
            fecha_nacimiento: "",
            sexo: "",
            estatus: "",
            entidad_nacimiento: "",
            pais_origen: "",
            edad: 0,
            aniosPreescolar: 0,
            grado: null,
            grupo: null,
            actualizarDatosMedicos: null,
        },
    ]);

    const updateAlumno = (newAlumno: InterfaceAlumno[]) => {
        setAlumnos(newAlumno);
    };

    const fetchAlumno = async () => {
        setLoading(true);
        const api = new SIGEAPICollection();
        const token = cookies.token;

        try {
            const response = await api.sharedCollection.executeGetAlumnos(
                token
            );
            if (response.ok) {
                const data = await response.json();
                
                let newAlumnos : InterfaceAlumno[] = [];
                if (!data || data.length == 0) {
                    setHayalumnos(false);
                    setLoading(false);
                    return;
                }
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
                    setCookie("childs", element.length);
                    setCookie("boleta", element.noBoleta);
                    newAlumnos.push(newAlumno);
                }
                setAlumnos(newAlumnos);
                setHayalumnos(true);
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
        fetchAlumno();
    }, []);

    return (
        <AlumnoContext.Provider value={{ alumnos, updateAlumno, loading, hayalumnos }}>
            {children}
        </AlumnoContext.Provider>
    );
};

export const useAlumno = (): AlumnoContextType => {
    const context = useContext(AlumnoContext);
    if (!context) {
        throw new Error("useAlumno must be used within an AlumnoProvider");
    }
    return context;
};