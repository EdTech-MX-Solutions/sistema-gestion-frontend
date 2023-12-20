import React, { useEffect, useState } from "react";
import ButtonComponent from "../elements/Buttons/ButtonComponent";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import AlertComponent from "../elements/Alert";
import { useCookies } from "react-cookie";
import InterfacePeriodo from "@/data/interfaces/periodo";
import SIGEAPICollection from "@/data/calls/apiHandler";
import Loader from "../elements/Loader";
import Link from "next/link";
import { usePeriodo } from "../context/PeriodoProvider";

interface FormCicloEscolarProps {
    autoStart?: boolean;
}

export const FormCicloEscolar = ({ autoStart }: FormCicloEscolarProps) => {
    const [PeriodoIniciado, setPeriodoIniciado] = useState<boolean>(false);
    const [cookies, setCookie] = useCookies(["token", "boleta", "childs"]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const periodo = usePeriodo();

    const currentDate = new Date();
    const [warning, setWarning] = useState(false);
    const minDate = new Date(new Date());
    const maxDate = new Date(new Date().setFullYear(minDate.getFullYear()));
    endDate.setFullYear(startDate.getFullYear() + 1);

    const title = "Ciclo Escolar Iniciado";
    const subtitle = "¡Bienvenido al nuevo ciclo escolar!";

    function updateEndDate(date: Date | null) {
        setStartDate(date || new Date());
        if (date)
            setEndDate(
                new Date(new Date().setFullYear(date.getFullYear() + 1))
            );
        if (currentDate.getFullYear() - endDate.getFullYear() < -1)
            setWarning(true);
    }

    const handleSubmmit = async () => {
        setLoading(true);
        console.log("Enviando datos de inicio de ciclo escolar...");

        const api = new SIGEAPICollection();
        const token = cookies.token;

        try {
            const response = await api.directivosCollection.executePostCycle(
                token
            );
            if (response.status === 201) {
                const data = await response.json();
                console.log(data);
                setPeriodoIniciado(true);
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

    // return (
    //     <>
    //         <div className="p-5 bg-white rounded-lg">
    //             <h4 className="font-bold pb-5"> Nuevo Ciclo Escolar </h4>
    //             <form onSubmit={handleSubmmit}>
    //                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    //                     <div>
    //                         <label
    //                             htmlFor=""
    //                             className="block mb-2 text-sm font-medium text-gray-900"
    //                         >
    //                             Año inicio del ciclo escolar:
    //                         </label>
    //                         <DatePicker
    //                             locale={es}
    //                             selected={startDate}
    //                             onChange={(date) => {
    //                                 updateEndDate(date);
    //                             }}
    //                             showYearPicker
    //                             minDate={minDate}
    //                             maxDate={maxDate}
    //                             dateFormat="yyyy"
    //                             title="El año de finalización del ciclo escolar se calcula automáticamente"
    //                             className="bg-green-800 bg-opacity-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    //                         />
    //                     </div>

    //                     <div>
    //                         <label
    //                             htmlFor=""
    //                             className="block mb-2 text-sm font-medium text-gray-900"
    //                         >
    //                             Año de finalización del ciclo escolar:
    //                         </label>
    //                         <DatePicker
    //                             locale={es}
    //                             selected={endDate}
    //                             onChange={() => console.log()}
    //                             showYearPicker
    //                             dateFormat="yyyy"
    //                             title="El año de finalización del ciclo escolar se calcula automáticamente"
    //                             className="bg-green-800 bg-opacity-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    //                         />
    //                     </div>
    //                 </div>
    //                 {warning && (
    //                     <>
    //                         <div className="pt-10">
    //                             <AlertComponent
    //                                 bgColor="orange-100 bg-opacity-40"
    //                                 borderColor="orange-100"
    //                                 textColor="orange-100"
    //                                 title="¡Cuidado!"
    //                                 message=" El ciclo escolar actual no coincide con el año actual, ¿Aún así deseas continuar?"
    //                             />
    //                         </div>
    //                     </>
    //                 )}
    //                 {PeriodoIniciado && (
    //                     <>
    //                         <div className="pt-10">
    //                             <AlertComponent
    //                                 bgColor="green-100 bg-opacity-40"
    //                                 borderColor="green-100"
    //                                 textColor="green-100"
    //                                 title="¡Éxito!"
    //                                 message=" El ciclo escolar ha sido iniciado correctamente."
    //                             />
    //                         </div>
    //                     </>
    //                 )}
    //                 {error && (
    //                     <>
    //                         <div className="pt-10">
    //                             <AlertComponent
    //                                 bgColor="red-100 bg-opacity-40"
    //                                 borderColor="red-100"
    //                                 textColor="red-100"
    //                                 title="¡Error!"
    //                                 message=" El ciclo escolar no pudo ser iniciado."
    //                             />
    //                         </div>
    //                     </>
    //                 )}
    //                 <div className="text-center pt-10">
    //                     <ButtonComponent
    //                         type="submit"
    //                         title={"Crear"}
    //                         color={"blue"}
    //                         loading={loading}
    //                     ></ButtonComponent>
    //                 </div>
    //             </form>
    //         </div>
    //     </>
    // );
};

export default FormCicloEscolar;
