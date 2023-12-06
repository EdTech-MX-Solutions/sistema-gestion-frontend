import SIGEAPICollection from "@/src/apiHandler";
import InterfaceAlumno from "@/interfaces/alumno";
import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
} from "react";
import { useCookies } from "react-cookie";

interface AlumnoContextType {
    alumno: InterfaceAlumno;
    updateAlumno: (newAlumno: InterfaceAlumno) => void;
}

const AlumnoContext = createContext<AlumnoContextType | undefined>(undefined);

export const AlumnoProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [cookies, setCookie] = useCookies(["token", "boleta", "childs"]);
    // const [alumno, setAlumno] = useState<InterfaceAlumno | null>(null);
    const [alumno, setAlumno] = useState<InterfaceAlumno>({
        no_boleta: "cargando...",
        curp: "cargando...",
        nombre: "cargando...",
        apellido_paterno: "",
        apellido_materno: "",
        fecha_nacimiento: "cargando...",
        sexo: "cargando...",
        estatus: "cargando...",
        entidad_nacimiento: "cargando...",
        pais_origen: "cargando...",
        edad: 0,
        aniosPreescolar: 0,
        grado: null,
        grupo: null,
        actualizarDatosMedicos: null,
    });

    const fetchAlumno = async () => {
        const api = new SIGEAPICollection();
        const token = cookies.token;

        try {
            const response = await api.sharedCollection.executeGetAlumnos(
                token
            );
            if (response.ok) {
                const data = await response.json();
                const sexo = data[0].sexo === "M" ? "Masculino" : "Femenino";
                const newAlumno: InterfaceAlumno = {
                    no_boleta: data[0].noBoleta,
                    curp: data[0].curp,
                    nombre: data[0].nombres,
                    apellido_paterno: data[0].apellidoPaterno,
                    apellido_materno: data[0].apellidoMaterno,
                    fecha_nacimiento: data[0].fechaNacimiento,
                    sexo: sexo,
                    estatus: data[0].estatus,
                    entidad_nacimiento: data[0].entidad,
                    pais_origen: data[0].paisOrigen,
                    edad: data[0].edad,
                    aniosPreescolar: data[0].aniosPreescolar,
                    grado: data[0].grado,
                    grupo: data[0].grupo,
                    actualizarDatosMedicos: data[0].actualizarDatosMedicos,
                };
                setCookie("childs", data.length);
                setCookie("boleta", data[0].noBoleta);
                setAlumno(newAlumno);
            } else {
                console.error(
                    `Error en la solicitud. Código de estado: ${response.status}`
                );
            }
        } catch (error) {
            console.error("Error de solicitud:", error);
        }
    };

    const updateAlumno = (newAlumno: InterfaceAlumno) => {
        setAlumno(newAlumno);
    };

    useEffect(() => {
        fetchAlumno();
    }, []);

    return (
        <AlumnoContext.Provider value={{ alumno, updateAlumno }}>
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
