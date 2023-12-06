import SIGEAPICollection from "@/backend-calls/apiHandler";
import InterfacePeriodo from "@/interfaces/periodo";
import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
} from "react";
import { useCookies } from "react-cookie";

interface PeriodoContextType {
    periodo: InterfacePeriodo;
    updatePeriodo: (newPeriodo: InterfacePeriodo) => void;
}

const PeriodoContext = createContext<PeriodoContextType | undefined>(undefined);

export const PeriodoProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [cookies, setCookie] = useCookies(["token"]);
    const [periodo, setPeriodo] = useState<InterfacePeriodo>(
        {
            anioInicio: 0,
            anioFin: 0,
            periodoCalificaciones: false,
            periodoPreinscripciones: false,
            periodoReinscripciones: false,
            finalizado: false,
        }
    );

    const fetchPeriodo = async () => {
        const api = new SIGEAPICollection();
        const token = cookies.token;

        try {
            const response = await api.sharedCollection.executeGetCiclos(
                token
            );
            if (response.ok) {
                const data = await response.json();
                const newPeriodo: InterfacePeriodo = {
                    anioInicio: data.añoInicio,
                    anioFin: data.añoFin,
                    periodoCalificaciones: data.periodoCalificaciones,
                    periodoPreinscripciones: data.periodoPreinscripciones,
                    periodoReinscripciones: data.periodoReinscripciones,
                    finalizado: data.finalizado,
                };
                    
                setPeriodo(newPeriodo);
                console.log("Periodo actual: ", newPeriodo);
            } else {
                console.error(
                    `Error en la solicitud. Código de estado: ${response.status}`
                );
            }
        } catch (error) {
            console.error("Error de solicitud:", error);
        }
    };

    const updatePeriodo = (newPeriodo: InterfacePeriodo) => {
        setPeriodo(newPeriodo);
    };

    useEffect(() => {
        fetchPeriodo();
    }, []); 
	
    return (
        <PeriodoContext.Provider value={{ periodo, updatePeriodo }}>
            {children}
        </PeriodoContext.Provider>
    );
};

export const usePeriodo = (): PeriodoContextType => {
    const context = useContext(PeriodoContext);
    if (!context) {
        throw new Error("usePeriodo must be used within a PeriodoProvider");
    }
    return context;
};
