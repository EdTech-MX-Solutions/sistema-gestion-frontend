import PanelCard from "./CardPanel";
import React from "react";
import { usePeriodo } from "@/components/context/PeriodoProvider";
import { ConfirmLogoutElement } from "../Confirms/ConfirmLogout";
import { ConfirmElement } from "../Confirms/Confirm";
import { useRouter } from "next/router";

export default function CyclePanel() {
    const [confirmationisopen, setConfirmationOpen] = React.useState(false);
    const periodo = usePeriodo();
    const periodo_escuela = periodo.periodo;
    const isAc = periodo_escuela.finalizado || false;
    const Activo = periodo_escuela.finalizado ? "Finalizado" : "Ciclo en curso";
    const isCalificaciones = periodo_escuela.periodoCalificaciones;
    const isPreinscripciones = periodo_escuela.periodoPreinscripciones;
    const isReinscripciones = periodo_escuela.periodoReinscripciones;
    const route = useRouter();

    const [confirmationisopen2, setConfirmationOpen2] = React.useState(false);
    const [confirmationisopen3, setConfirmationOpen3] = React.useState(false);

    const Panel = () => (
        <>
            <div className="bg-emerald-600 hidden" />
            <div className="bg-gray-600 hidden" />
            <div className="bg-red-800 hidden" />
            {isAc ? (
                <PanelCard
                    category="Estado del Ciclo Escolar"
                    title={`${Activo}: ${periodo_escuela.anioInicio
                        .toString()
                        .substring(2, 4)}-${periodo_escuela.anioFin
                        .toString()
                        .substring(2, 4)}`}
                    bgColor="red-800"
                    textSize="sm"
                    isActionEnabled
                    ActionText="Iniciar Ciclo Escolar"
                    onClick={() => setConfirmationOpen2(true)}
                />
            ) : (
                <PanelCard
                    category="Estado del Ciclo Escolar"
                    title={`${Activo}: ${periodo_escuela.anioInicio
                        .toString()
                        .substring(2, 4)}-${periodo_escuela.anioFin
                        .toString()
                        .substring(2, 4)}`}
                    bgColor="emerald-600"
                    textSize="sm"
                    isActionEnabled
                    ActionText="Finalizar Ciclo Escolar"
                    onClick={() => setConfirmationOpen3(true)}
                />
            )}
            {isCalificaciones ? (
                <PanelCard
                    category="Estado del Periodo de Calificaciones"
                    title="Es Periodo"
                    bgColor="emerald-600"
                    textSize="sm"
                    isActionEnabled
                    ActionText="Deshabilitar"
                />
            ) : (
                <PanelCard
                    category="Estado del Periodo de Calificaciones"
                    title="Deshabilitado"
                    bgColor="red-800"
                    textSize="sm"
                    isActionEnabled
                    ActionText="Habilitar"
                />
            )}
            {isPreinscripciones ? (
                <PanelCard
                    category="Estado del Periodo Preinscripciones"
                    title="Es Periodo"
                    bgColor="emerald-600"
                    textSize="sm"
                    isActionEnabled
                    ActionText="Deshabilitar"
                />
            ) : (
                <PanelCard
                    category="Estado del Periodo Preinscripciones"
                    title="Deshabilitado"
                    bgColor="red-800"
                    textSize="sm"
                    isActionEnabled
                    ActionText="Habilitar"
                />
            )}
            {isReinscripciones ? (
                <PanelCard
                    category="Estado del Periodo Reinscripciones"
                    title="Es Periodo"
                    bgColor="emerald-600"
                    textSize="sm"
                    isActionEnabled
                    ActionText="Deshabilitar"
                />
            ) : (
                <PanelCard
                    category="Estado del Periodo Reinscripciones"
                    title="Deshabilitado"
                    bgColor="red-800"
                    textSize="sm"
                    isActionEnabled
                    ActionText="Habilitar"
                />
            )}
            <PanelCard
                category="Sistema"
                title="Regresar al Inicio"
                bgColor="gray-600"
                route="/directive"
            />
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
            <ConfirmElement
                open={confirmationisopen2}
                text="¿Estás seguro que deseas iniciar el ciclo escolar?"
                handler={() => {
                    setConfirmationOpen2(false)
                }}
                handlerConfirm={() => {
                    route.push("/directive/cicloEscolar/createCicloEscolar");
                }}
            />
            <ConfirmElement
                open={confirmationisopen3}
                text="¿Estás seguro que deseas finalizar el ciclo escolar?"
                handler={() => {
                    setConfirmationOpen3(false)
                }}
                handlerConfirm={() => {
                    route.push("/directive/cicloEscolar/finalizarCicloEscolar");
                }}
            />
        </>
    );
}
