import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import { useCookies } from "react-cookie";
import InterfacePeriodo from "@/data/interfaces/periodo";
import SIGEAPICollection from "@/data/calls/apiHandler";
import AlertComponent from "@/components/elements/Alert";
import ButtonComponent from "@/components/ButtonComponent";
import CyclePanel from "@/components/elements/Panels/CyclePanel";

interface CardPeriodosProps {}

export const CardPeriodos = ({}: CardPeriodosProps) => {
    const [PeriodoIniciado, setPeriodoIniciado] = useState<boolean>(false);
    const [cookies, setCookie] = useCookies(["token", "boleta", "childs"]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    // estos serían el formData
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [Preinscripciones, setPreinscripciones] = useState<boolean>(false);
    const [Calificaciones, setCalificaciones] = useState<boolean>(false);

    // const [Preinscripciones, setPreinscripciones] = useState<Date>(new Date());
    // const [Calificaciones, setCalificaciones] = useState<Date>(new Date());

    // variables para la logica
    const currentDate = new Date();
    const [warning, setWarning] = useState(false);
    const minDate = new Date(new Date());
    const maxDate = new Date(new Date().setFullYear(minDate.getFullYear()));
    endDate.setFullYear(startDate.getFullYear() + 1);

    function updateEndDate(date: Date | null) {
        setStartDate(date || new Date());
        if (date)
            setEndDate(
                new Date(new Date().setFullYear(date.getFullYear() + 1))
            );
        if (currentDate.getFullYear() - endDate.getFullYear() < -1)
            setWarning(true);
    }

    const handleSubmmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        console.log("Enviando datos");
        setLoading(true);

        const periodo: InterfacePeriodo = {
            anioInicio: startDate.getFullYear(),
            anioFin: endDate.getFullYear(),
            periodoCalificaciones: Calificaciones,
            periodoPreinscripciones: Preinscripciones,
            periodoReinscripciones: false,
        };

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
            } else {
                setError(true);
            }
        } catch (error) {
            console.error("Error de solicitud:", error);
        }
        setLoading(false);
    };

    return (
        <>
            <div className="p-5 rounded-lg">
              <CyclePanel/>
            </div>
        </>
    );
};

export default CardPeriodos;
