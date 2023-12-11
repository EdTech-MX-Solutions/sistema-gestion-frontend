import SIGEAPICollection from "@/data/calls/apiHandler";
import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
} from "react";
import { useCookies } from "react-cookie";

interface GreetContextType {
    greet: string;
    updateGreet: (newGreet: string) => void;
}

const GreetContext = createContext<GreetContextType | undefined>(undefined);

export const GreetProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [greet, setGreet] = useState<string>("");

    const fetchGreet = async () => {
        var today = new Date();
        var curHr = today.getHours();
        if (curHr < 4) {
            setGreet("Deberías estar durmiendo, ya es tarde,");
        } else if (curHr < 7) {
            setGreet("Con que madrugando, ¿eh?");
        } else if (curHr < 12) {
            setGreet("Buenos días");
        } else if (curHr < 18) {
            setGreet("Buenas tardes");
        } else {
            setGreet("Buenas noches");
        }
    };

    const updateGreet = (newGreet: string) => {
        setGreet(newGreet);
    };

    useEffect(() => {
        fetchGreet();
    }, []);

    return (
        <GreetContext.Provider value={{ greet, updateGreet }}>
            {children}
        </GreetContext.Provider>
    );
};

export const useGreet = (): GreetContextType => {
    const context = useContext(GreetContext);
    if (!context) {
        throw new Error("useGreet must be used within a GreetProvider");
    }
    return context;
};
