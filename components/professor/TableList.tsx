import React, {useEffect, useState} from "react";
import ButtonComponent from "../elements/Buttons/ButtonComponent";
import InterfaceAlumno from "@/data/interfaces/alumno";
import SIGEAPICollection from "@/data/calls/apiHandler";
import {useCookies} from "react-cookie";

interface TableListprops {
    lista: InterfaceAlumno[]
}

interface Asistencia{
    alumno: InterfaceAlumno,
    asistio: boolean
}

const fechaActual = new Date();

const TableList = ({lista}: TableListprops) => {
    const [asistencias,setAsistencias] = useState<Asistencia[]>(
        lista.map((alumno)=> {
            return {alumno,asistio:false}
        }));
    const [loadingAsistencias, setLoading] = useState<boolean>(false);
    const handleAsistenciaChange = (noBoleta:string) => {
        setAsistencias((prevAsistencias) => {
            return prevAsistencias.map((asistencia) =>
                asistencia.alumno.noBoleta === noBoleta ? { ...asistencia, asistio: !asistencia.asistio } : asistencia
            );
        });
    };
    const [cookies, setCookie] = useCookies(["token"]);
    const handleAsistenciaSubmit = async() => {
        let asistenciasError = [];
        const api = new SIGEAPICollection();
        const token = cookies.token;
        setLoading(true);
        console.log(asistencias);
        for (const asitencia of asistencias) {
            let response = await api.sharedCollection.executePutAsistencias(token,asitencia.alumno.noBoleta,asitencia.asistio,1);
            if(!response.ok){
                asistenciasError.push(response.body)
            }
        }
        setLoading(false);
    }

    if (lista.length > 0) {
        return (
            <>
                <form>
                    <div className="justify-center bg-white p-5 rounded-lg">
                        <table className="table-fixed w-full text-sm text-center font-semibold">
                            <thead className="text-white uppercase bg-green-700">
                            <tr className="">
                                <th className="p-3"> No. Lista</th>
                                <th> Apellido Paterno</th>
                                <th> Apellido Materno</th>
                                <th> Nombres (s)</th>
                                <th colSpan={2}> Acciones</th>
                                <th> {`${fechaActual.getDate()}/${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()}`} </th>
                            </tr>
                            </thead>
                            <tbody>
                            {asistencias.map((asistencia, index) => (
                                <tr key={asistencia.alumno.noBoleta}>
                                    <td className="p-5"> {index + 1} </td>
                                    <td> {asistencia.alumno.nombres} </td>
                                    <td> {asistencia.alumno.apellidoPaterno} </td>
                                    <td> {asistencia.alumno.apellidoMaterno} </td>
                                    <td>
                                        <button
                                            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                    <span
                        className="relative px-1 py-0.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                      Ver Datos
                    </span>
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-600 to-red-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                    <span
                        className="relative px-1 py-0.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                      Reporte
                    </span>
                                        </button>
                                    </td>

                                    <td>
                                        <div className="items-center p-1 rounded">
                                            <input
                                                id="bordered-checkbox-1"
                                                type="checkbox"
                                                className="w-7 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                                onChange={(e)=>handleAsistenciaChange(asistencia.alumno.noBoleta)}
                                                checked={asistencia.asistio}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="text-center">
                        <ButtonComponent
                            title={"Guardar Cambios"}
                            color={"green"}
                            onClick={handleAsistenciaSubmit}
                            loading={loadingAsistencias}
                        ></ButtonComponent>
                    </div>
                </form>
            </>
        );
    } else {
        return (
            <>
                <div className="flex justify-center items-center h-96">
                    <div className="text-3xl text-gray-400">
                        <h1 className="text-gray-800 dark:text-gray-200">
                            Aun no hay alumnos para mostrar
                        </h1>
                        <p className="text-1xl">
                            Favor de revisar más tarde.
                        </p>
                    </div>
                </div>
            </>
        );
    }
};

export default TableList;
