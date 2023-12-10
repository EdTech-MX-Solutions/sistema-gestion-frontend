import { useCookies } from "react-cookie";
import PanelCard from "./CardPanel";
import { signOut } from "next-auth/react";

export default function PanelCards() {
    const [cookies, setCookie, removeCookie] = useCookies([
        "token",
        "user",
        "childs",
        "boleta",
    ]);

    const Panel = () => (
        <>
            <PanelCard
                category="Panel de Control"
                title="Alumnos"
                bgColor="emerald-600"
                route="/student/academics/notes"
            />
            <PanelCard
                category="Panel de Control"
                title="Tutores"
                bgColor="emerald-600"
                route="/student/academics/schedule"
            />
            <PanelCard
                category="Panel de Control"
                title="Grupos"
                bgColor="emerald-600"
                route="/student/othersOptions/suggestions"
            />
            <PanelCard
                category="Panel de Control"
                title="Directivos"
                bgColor="emerald-600"
                route="/student/othersOptions/suggestions"
            />
            <PanelCard
                category="Panel de Control"
                title="Reportes y Avisos"
                bgColor="emerald-600"
                route="/student/othersOptions/suggestions"
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
