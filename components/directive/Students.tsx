import React from "react";
import PanelCard from "../elements/Panels/CardPanel";
import { ConfirmLogoutElement } from "../elements/Confirms/ConfirmLogout";
import { ConfirmElement } from "../elements/Confirms/Confirm";

export default function PanelDirectiveStudents() {
    const [confirmationisopen, setConfirmationOpen] = React.useState(false);

    const Panel = () => (
        <>
            <PanelCard
                category="Panel de Alumnos"
                title="Consultar Alumno"
                bgColor="emerald-600"
                route="/directive/actionsStudent/consultStudents"
            />
            <PanelCard
                category="Panel de Alumnos"
                title="Registrar Alumno"
                bgColor="emerald-600"
                route="/directive/actionsStudent/registrerDataPersonalStudent"
            />
           
            {/* <PanelCard
                category="Panel de Control"
                title="Reportes y Avisos"
                bgColor="emerald-600"
                textSize="sm"
                route="/directive/othersOptions/suggestions"
            /> */}
            <PanelCard
                category="Sistema"
                title="Regresar al Inicio"
                bgColor="gray-600"
                route="/"
            />
            {/* <PanelCard
                category="Sistema"
                title="Ayuda"
                bgColor="cyan-600 bg-opacity-50"
                route="/"
            /> */}

            <PanelCard
                category="Sistema"
                title="Cerrar Sesión"
                bgColor="red-800"
                onClick={() => setConfirmationOpen(true)}
            />
        </>
    );

    return (
        <>
            <div className="flex flex-wrap mt-10">
                <Panel />
            </div>
            <ConfirmLogoutElement
                open={confirmationisopen}
                text="¿Estás seguro que deseas cerrar sesión?"
                handler={() => setConfirmationOpen(false)}
            />
        </>
    );
}
