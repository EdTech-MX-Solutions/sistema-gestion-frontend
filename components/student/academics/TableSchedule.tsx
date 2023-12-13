import React, {useEffect, useState} from "react";
import InterfaceHorario from "@/data/interfaces/horario";
import SIGEAPICollection from "@/data/calls/apiHandler";
import {useCookies} from "react-cookie";
import Loader from "@/components/elements/Loader";

interface TableScheduleprops {}

interface TableScheduleprops {
    horarioId: string;
}

const TableSchedule = ({ horarioId }: TableScheduleprops) => {
    const [horario, setHorario] = useState<InterfaceHorario[]>([]);
    const [cookies, setCookie] = useCookies(["token", "boleta", "childs"]);
    const [loading, setLoading] = useState<boolean>(false);
    const [hayHorario, setHayHorario] = useState<boolean>(false);
    const fetchHorario = async () => {
        setLoading(true);
        const api = new SIGEAPICollection();
        const response = await api.sharedCollection.executeGetHorarioAlumno(cookies.token, horarioId)
            if(response.ok){
                const data = await response.json();
                if(data.length == 0){
                    setLoading(false);
                    setHayHorario(false);
                    return;
                }
                setHorario(data);
                setLoading(false);
                setHayHorario(true);
            }else{
                setLoading(false);
                setHayHorario(false);
                console.error("Error al obtener el horario " + response.status);
            }
    }
    useEffect(()=>{
        fetchHorario();
    },[])

    if (!hayHorario && !loading) {
        return (
            <>
                <div className="flex justify-center items-center h-96">
                    <div className="text-3xl text-gray-400">
                        <h1 className="text-gray-800 dark:text-gray-200">
                            Aun no se han cargado los horarios.
                        </h1>
                        <p className="text-1xl">
                            Favor de revisar más tarde.
                        </p>
                    </div>
                </div>
            </>
        );
    }else if(loading){
        return (
            <>
                <div className="flex justify-center items-center h-96">
                    <h1 className="text-2xl text-gray-400">
                        Cargando Datos...
                        <Loader/>
                    </h1>
                </div>
            </>
        );
    }else{
        return (
            <>
                <div className="flex mx-auto justify-center p-5 bg-white rounded-lg">
                    <table className="table-fixed w-full text-sm text-center font-semibold ">
                        <thead className="text-white uppercase bg-green-700">
                        <tr className="p5">
                            <th className="p-5"> Materia </th>
                            <th> Lunes </th>
                            <th> Martes</th>
                            <th> Miércoles </th>
                            <th> Jueves </th>
                            <th> Viernes </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            horario.length === 0 ?
                                <tr><td colSpan={6}>No hay materias registradas</td></tr>:
                                horario.map((materia) => (
                                    <tr key={materia.claveMateria}>
                                        <td className="p-5">
                                            {" "}
                                            {materia.nombreMateria}{" "}
                                        </td>
                                        <td> {materia.horaLunes} </td>
                                        <td> {materia.horaMartes} </td>
                                        <td> {materia.horaMiercoles} </td>
                                        <td> {materia.horaJueves} </td>
                                        <td> {materia.horaViernes} </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
};

export default TableSchedule;
