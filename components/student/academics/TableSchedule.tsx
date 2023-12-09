import React from "react";

interface TableScheduleprops {}

interface TableScheduleprops {
    horario: Array<{
        claveMateria: string;
        nombreMateria: string;
        horaLunes: string;
        horaMartes: string;
        horaMiercoles: string;
        horaJueves: string;
        horaViernes: string;
    }>;
}

const TableSchedule = ({ horario }: TableScheduleprops) => {
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
                        {horario.map((materia) => (
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
            <div>
                <button onClick={()=>window.print()} className="print:hidden bg-secondary bg-opacity-80 hover:bg-opacity-100 text-xs text-gray-800 font-bold p-2 px-2 rounded inline-flex items-center">
                    <svg
                        className="fill-current w-2 h-2 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    <span>Imprimir</span>
                </button>
            </div>
        </>
    );
};

export default TableSchedule;
