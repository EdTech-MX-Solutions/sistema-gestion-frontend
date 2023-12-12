import React, { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";
import { useCookies } from "react-cookie";
import InterfacePeriodo from "@/data/interfaces/periodo";
import SIGEAPICollection from "@/data/calls/apiHandler";
import Loader from "../elements/Loader";
import Link from "next/link";
import { usePeriodo } from "../context/PeriodoProvider";

interface FormFinalizarCicloEscolarProps {
    autoStart?: boolean;
}

export const FormFinalizarCicloEscolar = ({
    autoStart,
}: FormFinalizarCicloEscolarProps) => {
    const [PeriodoFinalizado, setPeriodoFinalizado] = useState<boolean>(false);
    const [cookies, setCookie] = useCookies(["token", "boleta", "childs"]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const periodo = usePeriodo();

    const title = "Ciclo Escolar Finalizado";
    const subtitle = "Nos vemos en el siguiente ciclo escolar :).";

    const handleSubmmit = async () => {
        setLoading(true);
        console.log("Enviando datos de finalización de ciclo escolar...");

        const api = new SIGEAPICollection();
        const token = cookies.token;

        try {
            const response = await api.directivosCollection.executeEndCycle(
                token
            );
            if (response.status === 201) {
                const data = await response.json();
                console.log(data);
                setPeriodoFinalizado(true);
                const response2 = await api.sharedCollection.executeGetCiclos(
                    token
                );
                if (response2.ok) {
                    const data2 = await response2.json();
                    const newPeriodo: InterfacePeriodo = {
                        anioInicio: data2.añoInicio,
                        anioFin: data2.añoFin,
                        periodoCalificaciones: data2.periodoCalificaciones,
                        periodoPreinscripciones: data2.periodoPreinscripciones,
                        periodoReinscripciones: data2.periodoReinscripciones,
                        finalizado: data2.finalizado,
                    };
                    periodo.updatePeriodo(newPeriodo);
                }
            } else {
                setError(true);
            }
        } catch (error) {
            console.error("Error de solicitud:", error);
        }
        setLoading(false);
    };

    useEffect(() => {
        console.log("AutoStart:", autoStart);
        if (autoStart) {
            console.log("Starting...");
            handleSubmmit();
        }
    }, []);

    if (loading) {
        return (
            <>
                <Loader />
            </>
        );
    } else {
        return (
            <>
                <div className="p-5 bg-white rounded-lg">
                    <div className="bg-white p-6  md:mx-auto">
                        <svg
                            viewBox="0 0 24 24"
                            className="text-green-600 w-16 h-16 mx-auto my-6"
                        >
                            <path
                                fill="currentColor"
                                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                            ></path>
                        </svg>
                        <div className="text-center">
                            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                                {title}
                            </h3>
                            <p className="text-gray-600 my-2">{subtitle}</p>
                            <Link href={"/directive/cicloEscolar/cycle"} onClick={() => window.location.href ="/directive/cicloEscolar/cycle"}>
                                <ButtonComponent
                                    color={"green"}
                                    title={"Regresar"}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default FormFinalizarCicloEscolar;
