import { useCookies } from "react-cookie";
import PanelCard from "./CardPanel";
import { signOut } from "next-auth/react";
import React from "react";
import { ConfirmElement } from "../Confirms/Confirm";

export default function PanelCards() {
    const [confirmationisopen, setConfirmationOpen] = React.useState(false);
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
                onClick={() => setConfirmationOpen(true)}
            />
        </>
    );

    return (
        <>
            <div className="flex flex-wrap items-center mt-10">
                <Panel />
            </div>
            <ConfirmElement
                open={confirmationisopen}
                text="¿Estás seguro que deseas cerrar sesión?"
                handler={() => setConfirmationOpen(false)}
            />
        </>
    );
}
