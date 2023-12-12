import PanelCard from "./CardPanel";
import React, { useEffect } from "react";
import { usePeriodo } from "@/components/context/PeriodoProvider";
import { ConfirmLogoutElement } from "../Confirms/ConfirmLogout";
import { ConfirmElement } from "../Confirms/Confirm";
import { useRouter } from "next/router";
import Loader from "../Loader";
import SIGEAPICollection from "@/data/calls/apiHandler";
import { useCookies } from "react-cookie";
import { Alert } from "@material-tailwind/react";
import InterfacePeriodo from "@/data/interfaces/periodo";

export default function CyclePanel() {
    const [cookies, setCookie] = useCookies(["token"]);
    const [isLoading, setLoading] = React.useState(true);
    const route = useRouter();
    const periodo = usePeriodo();

    const [message, setMessage] = React.useState("");
    const [haveMessage, setHaveMessage] = React.useState(false);
    const [messageType, setMessageType] = React.useState("info");

    const [confirmationisopen, setConfirmationOpen] = React.useState(false);
    const [confirmationisopen2, setConfirmationOpen2] = React.useState(false);
    const [confirmationisopen3, setConfirmationOpen3] = React.useState(false);
    const [confirmationisopen4, setConfirmationOpen4] = React.useState(false);
    const [confirmationisopen6, setConfirmationOpen6] = React.useState(false);

    const periodo_escuela = periodo.periodo;
    const isAc = periodo_escuela.finalizado || false;
    const Activo = periodo_escuela.finalizado ? "Finalizado" : "Ciclo en curso";
    const isCalificaciones = periodo_escuela.periodoCalificaciones;
    const isPreinscripciones = periodo_escuela.periodoPreinscripciones;
    const isReinscripciones = periodo_escuela.periodoReinscripciones;

    const handlePeriodo = async (periodo_escuela: InterfacePeriodo) => {
        const api = new SIGEAPICollection();
        const token = cookies.token;
        const response = await api.directivosCollection.executePostPeriodo(
            token,
            periodo_escuela
        );
        if (response.status === 200) {
            console.log("Periodo actualizado");
            periodo.updatePeriodo(periodo_escuela);
        }
    };
    const handleCalificaciones = async () => {
        periodo_escuela.periodoCalificaciones =
            !periodo_escuela.periodoCalificaciones;
        handlePeriodo(periodo_escuela).then(() => {
            console.log("Periodo de reinscripciones actualizado");
            periodo.updatePeriodo(periodo_escuela);
        });
    };

    const handleReinscripciones = async () => {
        periodo_escuela.periodoReinscripciones =
            !periodo_escuela.periodoReinscripciones;
        handlePeriodo(periodo_escuela).then(() => {
            console.log("Periodo de reinscripciones actualizado");
            periodo.updatePeriodo(periodo_escuela);
        });
    };

    useEffect(() => {
        setLoading(false);
    }, []);

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
                    onClick={() => setConfirmationOpen4(true)}
                />
            ) : (
                <PanelCard
                    category="Estado del Periodo de Calificaciones"
                    title="Deshabilitado"
                    bgColor="red-800"
                    textSize="sm"
                    isActionEnabled
                    ActionText="Habilitar"
                    onClick={() => setConfirmationOpen4(true)}
                />
            )}
            {isPreinscripciones ? (
                <PanelCard
                    category="Estado del Periodo Preinscripciones"
                    title="Es Periodo"
                    bgColor="cyan-600"
                    textSize="sm"
                    isActionEnabled
                    ActionText="Configuración Automática"
                    onClick={() => {
                        setHaveMessage(true);
                        setMessage(
                            "El periodo de Preinscripciones es automático"
                        );
                        setMessageType("info");
                    }}
                />
            ) : (
                <PanelCard
                    category="Estado del Periodo Preinscripciones"
                    title="Deshabilitado"
                    bgColor="cyan-600 bg-opacity-40"
                    textSize="sm"
                    isActionEnabled
                    ActionText="Configuración Automática"
                    onClick={() => {
                        setHaveMessage(true);
                        setMessage(
                            "El periodo de Preinscripciones es automático"
                        );
                        setMessageType("info");
                    }}
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
                    onClick={() => setConfirmationOpen6(true)}
                />
            ) : (
                <PanelCard
                    category="Estado del Periodo Reinscripciones"
                    title="Deshabilitado"
                    bgColor="red-800"
                    textSize="sm"
                    isActionEnabled
                    ActionText="Habilitar"
                    onClick={() => setConfirmationOpen6(true)}
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

    if (isLoading) return <Loader />;
    else {
        return (
            <>
                {/* Messages Icon info */}
                <Alert
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-5 h-5 mx-1"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                            />
                        </svg>
                    }
                    className={`${haveMessage ? "block" : "hidden"} w-full 
                    ${
                        messageType === "success"
                            ? "border-emerald-300"
                            : messageType === "info"
                            ? "dark:border-blue-300 border-gray-700"
                            : "border-red-300"
                    }
                    lg:w-2/3 border-2  border-opacity-50 mt-2 p-1 rounded-lg mb-4 text-black`}
                >
                    {message}
                </Alert>
                <div className="flex flex-wrap mt-10">
                    <Panel />
                </div>
                <ConfirmLogoutElement
                    open={confirmationisopen}
                    text="¿Estás seguro que deseas cerrar sesión?"
                    handler={() => setConfirmationOpen(false)}
                />
                {/* Finalizar Ciclo */}
                <ConfirmElement
                    open={confirmationisopen2}
                    text={`¿Estás seguro que deseas ${
                        isAc ? "iniciar" : "finalizar"
                    } el ciclo escolar?`}
                    // text="¿Estás seguro que deseas iniciar el ciclo escolar?"
                    handler={() => {
                        setConfirmationOpen2(false);
                    }}
                    handlerConfirm={() => {
                        route.push(
                            "/directive/cicloEscolar/createCicloEscolar"
                        );
                    }}
                />
                {/* Finalizar Ciclo */}
                <ConfirmElement
                    open={confirmationisopen3}
                    text="¿Estás seguro que deseas finalizar el ciclo escolar?"
                    handler={() => {
                        setConfirmationOpen3(false);
                    }}
                    handlerConfirm={() => {
                        route.push(
                            "/directive/cicloEscolar/finalizarCicloEscolar"
                        );
                    }}
                />
                {/* Periodo de Calificaciones */}
                <ConfirmElement
                    open={confirmationisopen4}
                    text="¿Estás seguro que deseas iniciar el Periodo de Calificaciones?"
                    handler={() => {
                        setConfirmationOpen4(false);
                    }}
                    handlerConfirm={() => {
                        handleCalificaciones().then(() => {
                            setConfirmationOpen4(false);
                            setMessage("Periodo de calificaciones actualizado");
                            setHaveMessage(true);
                            setMessageType("success");
                        });
                    }}
                />

                {/* Periodo de Reinscripciones */}
                <ConfirmElement
                    open={confirmationisopen6}
                    text="¿Estás seguro que deseas iniciar el Periodo de Reinscripciones?"
                    handler={() => {
                        setConfirmationOpen6(false);
                    }}
                    handlerConfirm={() => {
                        handleReinscripciones().then(() => {
                            setConfirmationOpen6(false);
                            setMessage(
                                "Periodo de reinscripciones actualizado"
                            );
                            setHaveMessage(true);
                            setMessageType("success");
                        });
                    }}
                />
            </>
        );
    }
}
