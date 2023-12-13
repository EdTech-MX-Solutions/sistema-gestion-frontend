import React, {useEffect, useState} from "react";
import InterfaceHorario from "@/data/interfaces/horario";
import SIGEAPICollection from "@/data/calls/apiHandler";
import {useCookies} from "react-cookie";

interface TableScheduleprops {}

interface TableScheduleprops {
    horarioId: string;
}

const TableSchedule = ({ horarioId }: TableScheduleprops) => {
    const [horario, setHorario] = useState<InterfaceHorario[]>([]);
    const [cookies, setCookie] = useCookies(["token", "boleta", "childs"]);
    useEffect(()=>{
        const api = new SIGEAPICollection();
        api.sharedCollection.executeGetHorarioAlumno(cookies.token, horarioId)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }else{
                    return [];
                }
            })
            .then((data) => {
                setHorario(data);
            });
    },[])
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
};

export default TableSchedule;
