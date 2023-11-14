import { ReactNode, useState } from "react";
import PrincipalTitle from "@/components/student/Principal.Title";
import TableGrades from "@/components/student/academics/Table.Grades";

interface DefaultLayoutProps {
  children: ReactNode;
}

function academicRecord(){

    const title = "Historial academico"

    return(
        <>
            <PrincipalTitle title = {title}></PrincipalTitle>

            <div className="bg-white grid grid-cols-2 gap-4">
                <div className="col-span-1">
                    <div className="grid grid-rows-4 gap-">
                        <div className="p-4">
                            <label htmlFor="periodo" className="block mb-2 text-sm font-medium text-gray-900"> Seleciona un periodo escolar: </label>
                            <select name="periodo" id="periodo" className="w-full p-5 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                                <option selected> Selecciona.... </option>
                                <option value="primerAño"> Primero Grado</option>
                                <option value="segundoAño"> Segundo Grado</option>
                                <option value="terceroAño"> Tercero Grado</option>
                                <option value="cuartoAño"> Cuarto Grado</option>
                                <option value="quintoAño"> Quinto Grado</option>
                                <option value="sextoAño"> Sexto Grado</option>
                            </select>
                        </div>

                        <div className="row-span-3">
                            <TableGrades></TableGrades>
                        </div>
                    </div>
                </div>

                <div className="col-span-1">
                    <div className="grid grid-rows-6 gap-2">
                        <div className="p-4 row-span-3">
                            Grafica 1
                        </div>
                        <div className="p-4 row-span-3">
                            Grafica 2
                        </div>
                    </div>
                </div>
            </div>

            
        </>
    );
}

export default academicRecord;


