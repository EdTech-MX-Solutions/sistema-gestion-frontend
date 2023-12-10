import { useCookies } from "react-cookie";
import PanelCard from "./CardPanel";
import { signOut } from "next-auth/react";

export default function CyclePanel() {
    const [cookies, setCookie, removeCookie] = useCookies([
        "token",
        "user",
        "childs",
        "boleta",
    ]);

    const Panel = () => (
        <>
            <PanelCard
                category="Estado del Ciclo Escolar"
                title="Estado del Periodo: Activo"
                bgColor="emerald-600"
                textSize="sm"
                
            />
            <PanelCard
                category="Panel de Control"
                title="Activar Periodo de Calificaciones"
                textSize="sm"
                bgColor="emerald-600"
            />
            <PanelCard
                category="Panel de Control"
                title="Activar Periodo de Preinscripciones"
                textSize="sm"
                bgColor="emerald-600"
            />
            <PanelCard
                category="Panel de Control"
                title="Iniciar Nuevo Periodo"
                textSize="sm"
                bgColor="emerald-600"
                route="/directive/cicloEscolar/createCicloEscolar"
            />
            <PanelCard
                category="Sistema"
                title="Salir"
                bgColor="gray-600"
                onClick={() => {
                    removeCookie("token", { path: "/" });
                    setCookie("user", "", { path: "/" });
                    setCookie("childs", "", { path: "/" });
                    setCookie("boleta", "", { path: "/" });
                    signOut();
                }}
            />
        </>
    );

    return (
        <>
            <div className="flex flex-wrap items-center mt-10">
                <Panel />
            </div>
        </>
    );
}
